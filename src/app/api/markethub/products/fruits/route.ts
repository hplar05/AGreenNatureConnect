import prisma from "@/lib/db/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    try {
        const param = searchParams.get("cursor");
        const barangay = searchParams.get("barangay");
        const limit = 12
        const getAllProducts = await prisma.product.findMany({
            cursor: param ? {
                id: param
            } : undefined,
            take: limit,
            skip: param === '' ? 0 : 1,
            where: {
                isFree: {
                    equals: false
                },
                OR:[
                    {
                        quantity:{
                        not:{
                            lte: 0
                        }
                        }
                    },
                    {
                        quantityIPacks:{
                            not:{
                                lte: 0
                            }
                        },
                    },
                    {
                        quantityInPieces:{
                            not:{
                                lte: 0
                            }
                        },
                    }
                ],
                status: {
                    equals: "APPROVED"
                },
                category: {
                    equals: "Fruits"
                },
                community:{
                    address: barangay === null || barangay === "" || barangay === "all" || barangay === undefined ? undefined : barangay  
                }
            },
            include:{
                Stock: true,
                community: true,
                reviews: true,
            },
            orderBy:{
                updatedAt: 'desc'
            }
        })
        const myCursor = getAllProducts.length === limit ? getAllProducts[getAllProducts.length - 1].id : undefined;
        return new Response(JSON.stringify({ getAllProducts, nextId: myCursor }))
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error:', error }))
    }
}