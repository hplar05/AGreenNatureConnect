import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/db/db";
import { DeclineProductSchema } from "@/lib/validations/employee/products";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        const cancelledTransactions = await prisma.transaction.findMany({
            where:{
                buyerId: session.user.id,
                status: "CANCELLED"
            },
            orderBy:{
                updatedAt: 'desc'
            },
            include:{
                buyer: true,
                seller: true,
                orderedVariant: {
                    include:{
                        product: true,
                        variant: true
                    }
                }
            }
        })
        return new Response(JSON.stringify(cancelledTransactions), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify({message: 'Error:', error}))
    }
};


export async function PUT(req: Request) {
    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        const body = await req.json()
        const { transactionId, type, otherReason } = DeclineProductSchema.parse(body)

        const existingTransaction = await prisma.transaction.findUnique({
            where: {
                id: transactionId,
            },
        });

        if (!existingTransaction) {
            return new NextResponse('Transaction not found', { status: 404 });
        }

        const cancelOrderById = await prisma.transaction.update({
            where: {
                id: transactionId,
            },
            data: {
                cancelType: type,
                cancelReason: otherReason,
                status: "CANCELLED"
            }
        })

        revalidatePath('/orders', 'layout')
        return new Response(JSON.stringify(cancelOrderById));
    } catch (error) {
        console.error("Error updating transaction:", error);
        return new NextResponse('Could not update the transaction', { status: 500 });
    }
}


