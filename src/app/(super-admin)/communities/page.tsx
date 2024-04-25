import { Card, Title } from '@tremor/react'
import SearchCommunities from '../_components/SearchCommunities'
import prisma from '@/lib/db/db'

const CommunitiesPage = async () => {
    const communities = await prisma.community.findMany()

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className='lg:w-[1280px] lg:ml-[300px]'>

                <Title>List of Communities</Title>

                <SearchCommunities communities={communities} />

            </Card>
        </div>
    )
}

export default CommunitiesPage