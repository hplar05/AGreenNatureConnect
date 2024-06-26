import { getAuthSession } from "../../../../../../lib/auth";
import prisma from "@/lib/db/db"
import { CommentSchema } from "@/lib/validations/createCommentSchema";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';



//Getting all 
export async function GET(req: NextRequest,) {
    const postIdWithComments = req.url.split("post/")[1];
    const postId = postIdWithComments.replace("/comments", "")

    try {
        const getAllCommentsByPostId = await prisma.comment.findMany({
            where: {
                postId: postId
            },
            include: {
                author: true,
                replies: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        if (getAllCommentsByPostId.length < 1) {

            return new Response(JSON.stringify('There are no comments right now!'))
        }
        revalidatePath(`/api/user/post/${postId}/comments`)
        return new Response(JSON.stringify(getAllCommentsByPostId), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error:', error }))
    }
}

//Creating new post
export async function POST(req: NextRequest) {
    const path = req.nextUrl.pathname;
    console.log(path);
    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        const body = await req.json();
        const { text, postId } = CommentSchema.parse(body);
        const commentId = uuidv4(); // Generate a unique commentId
        const commentSuccess = await prisma.comment.create({
            data: {
                text: text,
                postId: postId,
                authorId: session.user.id,
                commentId: commentId
            }
        });

        const post = await prisma.post.findUnique({
            where: {id: postId}
        })

        if(!post) {
            return new Response("Post not found!")
        }

        if(commentSuccess) {
            await prisma.notification.create({
                data: {
                    commentId: commentSuccess.id,
                    type: "COMMENT",
                    userId: post.authorId,
                }
            })
        }
        revalidatePath(path);
        return new Response('OK');
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response('Invalid POST request data passed', { status: 422 });
        }
        return new Response('Could not comment to post at this time, please try again later', { status: 500 });
    }
}

//Deleteng comments
export async function DELETE(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const commentId = searchParams.get('commentId')
    console.log(`this is your Id: ${commentId}`)
    try {
        const deleteComment = await prisma.comment.delete({
            where: {
                id: commentId as string
            }
        })


        console.log(deleteComment)
        return new Response(JSON.stringify(deleteComment), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

export async function HEAD(req: NextRequest) {

}