import { getAuthSession } from "@/lib/auth"
import prisma from "@/lib/db/db"
import { PostSchema } from "@/lib/validations/createPostSchema"
import { z } from "zod"

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 })
        }
        const body = await req.json()
        const { title, content, topicId } = PostSchema.parse(body)
        await prisma.post.create({
            data: {
                title,
                content,
                authorId: session.user.id,
                topicId
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