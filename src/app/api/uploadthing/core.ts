import { getAuthSession } from '../../../lib/auth'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

const middleware = async () => {
  const session = await getAuthSession()

  if (!session || !session.user) throw new Error('Unauthorized')

  return { id: session.user.id }
}

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '16MB' } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => { }),
  changeAvatar: f({
    image: { maxFileSize: "16MB", maxFileCount: 1 },
  })
    .middleware(middleware)
    .onUploadComplete(async (data) => { }),
  pdfUploader: f({ pdf: { maxFileSize: '16MB' } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => { }),
  videoUploader: f({ video: { maxFileSize: '32MB' } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => { }),
  imageCarousel: f({ image: { maxFileSize: '16MB', maxFileCount: 5 } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => { }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter