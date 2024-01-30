import { getAuthSession } from "@/lib/auth"
import prisma from "@/lib/db/db"
import { CartSchema } from "@/lib/validations/addToCartSchema"
import { z } from "zod"


//Create Cart Items
export async function POST(req: Request) {
    try {
        const session = await getAuthSession()
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 })
        }
        const body = await req.json()
        const { variantId } = CartSchema.parse(body)
        await prisma.cart.create({
            data: {
                variantId,
                userId: session.user.id,
            }
        })
        return new Response('OK')
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response('Invalid POST request data passed', { status: 422 })
        }
        return new Response('Could not post to community at this time, please try again later', { status: 500 })
    }
}