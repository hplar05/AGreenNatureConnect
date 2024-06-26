import prisma from "@/lib/db/db";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    try {
        const query = searchParams.get("query");
        const products = await prisma.product.findMany({
            where:{
                name:{
                    contains: query ? query : undefined
                },
                isFree: {
                    equals: false
                },
                status:{
                    equals: "APPROVED"
                },
                quantity:{
                    not: 0
                }
                // variants:{
                //     some: {
                //         variant: {
                //             not: 0
                //         }
                //     }
                // }
            },
            include:{
               Stock: true,
               community: true,
               reviews: true,
            }
        });

        return new Response(JSON.stringify({products}))
    } catch (error) {
        return new Response(JSON.stringify({error}))
    }
   
}