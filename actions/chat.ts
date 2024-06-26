"use server"

import { getAuthSession } from "@/lib/auth"
import { getUserById } from "../data/user"
import prisma from "@/lib/db/db"
import { redirect } from "next/navigation"
import { pusherServer } from "@/lib/pusher"
import { Prisma } from "@prisma/client"


export const inspectChatRoom = async (communityId: string) => {
    const session = await getAuthSession()

    if (!session) return { error: "Unauthorized" }

    const user = await getUserById(session.user.id)

    if (!user) return { error: "No user found!" }

    if (!communityId) return { error: "No community found!" }

    const chatroom = await prisma.chatRoom.findFirst({
        where: {
            userId: user.id,
            communityId,
        }
    });

    if (chatroom) {
        redirect(`/message/${chatroom.id}`)
    } else {
        const newChatRoom = await prisma.chatRoom.create({
            data: {
                userId: user.id,
                communityId,
            }
        })

        const currentCommunity = await prisma.community.findUnique({
            where: { id: communityId }
        })

        if (newChatRoom) {
            await prisma.message.create({
                data: {
                    content: `
                    Welcome to our "Barangay ${currentCommunity?.name} live chat! We're available on weekdays from 8:00 AM to 5:00 PM and Saturdays from 8:00 AM to 12:00 PM. We're closed on Sundays. Please leave us a message if you reach out outside of these hours, and we'll respond promptly during our next available time slot. Thank you for choosing our barangay office for assistance!
                    `,
                    communityId,
                    chatRoomId: newChatRoom.id,
                }
            })
        }

        redirect(`/message/${newChatRoom.id}`)
    }
}

export const sendMessage = async (chatRoomId: string, senderId: string, senderType: 'user' | 'community', content: string, image: string) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        const user = await getUserById(session.user.id)

        if (!user) return { error: "No user found!" }

        if (content.length < 1) return { error: "Please enter a message!" }

        if (content.length >= 1000) return { error: "Content too long..." }

        const newMessage = await prisma.message.create({
            data: {
                chatRoomId,
                userId: senderType === 'user' ? senderId : undefined,
                communityId: senderType === 'community' ? senderId : undefined,
                content,
                image,
            }
        });

        if (senderType === 'user' || senderType === "community" && newMessage) {
            await prisma.chatRoom.update({
                where: { id: chatRoomId },
                data: {
                    updatedAt: new Date()
                },
            })
        }

        // await pusherServer.trigger(chatRoomId, 'messages:new', newMessage)

        return { success: "Message sent" };
    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchMessages = async (id: string, page: number, limit: number) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        const user = await getUserById(session.user.id)

        if (!user) return { error: "No user found!" }

        const skip = page * limit;

        const messages = await prisma.message.findMany({
            where: {
                chatRoomId: id
            },
            take: limit,
            skip: skip,
            orderBy: {
                createdAt: "desc"
            },
            include: {
                user: true,
                community: true,
            }
        })

        const count = await prisma.message.count({
            where: {
                chatRoomId: id,
            },
        });

        const hasMore = skip + limit < count;

        return { messages, nextPage: hasMore ? page + 1 : null };

    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchUsersWhoChatted = async (communityId: string) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        const community = await prisma.community.findUnique({
            where: { id: communityId }
        })

        if (!community) {
            return { error: "Community not found" }
        }

        const usersWithRecentMessages = await prisma.user.findMany({
            where: {
                ChatRoom: {
                    some: {
                        communityId: community.id,
                    },
                },
            },
            orderBy: {
                updatedAt: "desc"
            },
        });

        return usersWithRecentMessages
    } catch (error: any) {
        throw new Error(error)
    }
}

export const inspectChatRoomEmployee = async (communityId: string, userId: string) => {
    const session = await getAuthSession()

    if (!session) return { error: "Unauthorized" }

    const user = await getUserById(session.user.id)

    if (!user) return { error: "No user found!" }

    if (!communityId) return { error: "No community found!" }

    const chatroom = await prisma.chatRoom.findFirst({
        where: {
            communityId,
            userId
        }
    });

    if (chatroom) {
        redirect(`/employee/message/${chatroom.id}`)
    } else {
        const newChatRoom = await prisma.chatRoom.create({
            data: {
                userId: user.id,
                communityId,
            }
        })

        redirect(`/employee/message/${newChatRoom.id}`)
    }
}

export const deleteMessage = async (id: string) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        if (!id) return { error: "Message not found!" }

        await prisma.message.delete({
            where: { id }
        })

        return { success: "Message deleted!" }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchChatRoomMessages = async (id: string, page: number, limit: number) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        const user = await getUserById(session.user.id)

        if (!user) return { error: "No user found!" }

        const skip = page * limit;

        const chatroom = await prisma.chatRoom.findUnique({
            where: {
                id: id
            },
            include: {
                messages: {
                    take: limit,
                    skip: skip,
                    orderBy: {
                        createdAt: "desc"
                    },
                    include: {
                        user: true,
                        community: true
                    }
                }
            }
        })

        const count = await prisma.message.count({
            where: {
                chatRoomId: id,
            },
        });

        const hasMore = skip + limit < count;

        return { chatroom, nextPage: hasMore ? page + 1 : null };

    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchChatRoomWithUsersWhoChatted = async (communityId: string, name?: string) => {
    try {
        const session = await getAuthSession()

        if (!session) return { error: "Unauthorized" }

        const community = await prisma.community.findUnique({
            where: { id: communityId }
        })

        if (!community) {
            return { error: "Community not found" }
        }

        if (name) {
            const chatroomWithRecentMessagesByCommunity = await prisma.chatRoom.findMany({
                where: {
                    communityId: community.id,
                    user: {
                        OR: [
                            { name: { contains: name, mode: "insensitive" } },
                            { lastName: { contains: name, mode: "insensitive" } },
                        ]
                    }
                },
                include: {
                    messages: true,
                    user: true,
                    community: true,
                },
                orderBy: {
                    updatedAt: "desc"
                },
            })

            return chatroomWithRecentMessagesByCommunity
        } else {
            const chatroomWithRecentMessagesByCommunity = await prisma.chatRoom.findMany({
                where: {
                    communityId
                },
                include: {
                    messages: true,
                    user: true,
                    community: true,
                },
                orderBy: {
                    updatedAt: "desc"
                },
            })

            return chatroomWithRecentMessagesByCommunity
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

// export const fetchUsersWhoChatted = async (communityId: string) => {
//     try {
//         const session = await getAuthSession()

//         if (!session) return { error: "Unauthorized" }

//         const community = await prisma.community.findUnique({
//             where: { id: communityId }
//         })

//         if (!community) {
//             return { error: "Community not found" }
//         }

//         const usersWithRecentMessages = await prisma.user.findMany({
//             where: {
//                 ChatRoom: {
//                     some: {
//                         communityId: community.id,
//                     },
//                 },
//             },
//             orderBy: {
//                 updatedAt: "desc"
//             },
//         });

//         return usersWithRecentMessages
//     } catch (error: any) {
//         throw new Error(error)
//     }
// }