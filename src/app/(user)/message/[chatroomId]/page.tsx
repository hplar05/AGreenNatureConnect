import prisma from "@/lib/db/db"
import { ChatRoom } from "../_components/ChatRoom"
import { ChatRoomWithAllRelation, ChatRoomWithMessagesAndCommunity } from "@/lib/types"
import { getAuthSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { NewChatRoomV2User } from "@/app/employee/message/_components/NewChatRoomV2User"

interface Props {
    params: { chatroomId: string }
}

const ChatRoomPage = async ({ params }: Props) => {

    const session = await getAuthSession()

    if (!session) redirect("/discussion")

    const user = await prisma.user.findUnique({
        where: { id: session?.user.id }
    })

    const chatroom = await prisma.chatRoom.findUnique({
        where: {
            id: params.chatroomId
        },
        include: {
            community: true,
            messages: true,
            user: true,
        }
    })

    if (!chatroom) return <>Error fetching chatroom!</>

    return (
        // <ChatRoom chatroom={chatroom as ChatRoomWithAllRelation} userId={user?.id!} />
        <NewChatRoomV2User chatroom={chatroom} />
    )
}

export default ChatRoomPage