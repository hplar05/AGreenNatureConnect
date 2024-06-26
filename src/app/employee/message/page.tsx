import { getAuthSession } from '@/lib/auth'
import ChatComponent from './_components/ChatComponent'
import prisma from '@/lib/db/db'
import { redirect } from 'next/navigation'
import { CommunityWithMessages } from '@/lib/types'
import { NewChatV2 } from './_components/NewChatV2'

const MessagePage = async () => {

    const session = await getAuthSession()

    if (!session) redirect("/discussion")

    const user = await prisma.user.findUnique({
        where: { id: session?.user.id },
        include: {
            Community: true
        }
    })

    const community = await prisma.community.findUnique({
        where: { id: user?.Community?.id },
        include: {
            messages: true
        }
    })

    if (!community) return <>Error fetching community!</>


    return (
        <div className='pb-11'>
            {/* <ChatComponent community={community as CommunityWithMessages} /> */}
            <NewChatV2 community={community} />
        </div>
    )
}

export default MessagePage