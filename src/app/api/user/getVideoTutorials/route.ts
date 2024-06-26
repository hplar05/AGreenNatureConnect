import prisma from "@/lib/db/db"

export const dynamic = "force-dynamic"

export async function GET() {
    try {
        const communities = await prisma.community.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                VideoTutorial: {
                    include: {
                        author: true
                    },
                    where: {
                        isApproved: "APPROVED"
                    },
                }
            },
            where: {
                isArchived: false
            }
        });

        return new Response(JSON.stringify(communities));
    } catch (error) {
        return new Response('Could not fetch communities', { status: 500 })
    }
}