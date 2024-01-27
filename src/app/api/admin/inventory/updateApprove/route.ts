import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    const session = await getAuthSession()

    const user = await prisma.user.findFirst({
        where: {
            id: session?.user.id
        }
    })

    const community = await prisma.community.findFirst({
        where: {
            userId: user?.id
        }
    })

    const body = await req.json()

    try {
        const { id, status } = body;

        const updatedProduct = await prisma.product.update({
            where: {
                id,
            },
            data: {
                status,
            },
        })

        return new NextResponse(`Successfully updated the item`)
    } catch (error) {
        return new NextResponse('Could not update the product' + error, { status: 500 })
    }
}