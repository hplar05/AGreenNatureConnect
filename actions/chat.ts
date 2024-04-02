"use server"

import { getAuthSession } from "@/lib/auth"
import { getUserById } from "../data/user"
import prisma from "@/lib/db/db"
import { redirect } from "next/navigation"

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

        await prisma.message.create({
            data: {
                chatRoomId,
                userId: senderType === 'user' ? senderId : undefined,
                communityId: senderType === 'community' ? senderId : undefined,
                content,
                image,
            }
        });

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

        const userWhoChatted = await prisma.user.findMany({
            where: {
                // Message: {
                //     some: {
                //         communityId: community.id
                //     }
                // },
                ChatRoom: {
                    some: {
                        communityId: community.id
                    }
                }
            }
        })

        return userWhoChatted
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