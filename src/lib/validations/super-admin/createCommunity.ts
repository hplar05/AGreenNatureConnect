import { z } from "zod";

export type CreateCommunityType = z.infer<typeof CreateCommunitySchema>

// const CommunityImageSchema = z.object({
//     imageUrl: z.string().url(), // Assuming imageUrl is a URL string
// });

export const CreateCommunitySchema = z.object({
    // communityImages: z.optional(z.array(CommunityImageSchema)),
    // communityDisplayPhoto: z.optional(z.string()),
    form: z.optional(z.string()),
    // barangayName: z.string({
    //     required_error: "Barangay name required!"
    // }),
    urbanFarmName: z.string({
        required_error: "Urban farm name required!"
    }),
    communityAddress: z.string({
        required_error: "Urban farm address required!"
    }),
    // communityEmail: z.string({
    //     required_error: "Urban farm email required!"
    // }).email().refine(email => email.length <= 255, { message: "Email is too long" }),
    // communityDescription: z.string({
    //     required_error: "Description required!"
    // }),
    email: z.string({
        required_error: "Admin email required!"
    }).email().refine(email => email.length <= 255, { message: "Admin Email is too long" }),
    firstname: z.string().min(3, { message: "Admin Name is too short." }).max(50, { message: "Admin Name is too long" }),
    lastName: z.string().min(3, { message: "Admin Lastname is too short." }).max(50, { message: "Admin Lastname is too long" }),
    // phone: z.string()
    //     .refine(phone => {
    //         const phMobilePattern = /^(09\d{9})$/;
    //         return phMobilePattern.test(phone)
    //     }),
    gender: z.string({
        required_error: "Please select a valid gender."
    }),
    userPhone: z.string()
        .refine(phone => {
            const phMobilePattern = /^(09\d{9})$/;
            return phMobilePattern.test(phone)
        }),
    // password: z.string()
    //     .min(8, { message: "Minimum password length is 8 characters" })
    //     .max(20, { message: "Maximum password length is 20 characters" })
    //     .refine(password => {
    //         // reg-ex code, chat gpt generated: at least one lowercase letter, one uppercase letter, and one special character
    //         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]+$/;
    //         return passwordPattern.test(password)
    //     }, { message: "Password must contain at least one lowercase letter, one uppercase letter, and one special character." })
    //     .optional(),
    // confirmPassword: z.string().min(8, { message: "Password does not match" }).optional(),
    blk: z.optional(z.string()),
    street: z.string({
        required_error: "Street address is required"
    }),
    zip: z.optional(z.string())
})
// .refine(data => data.password === data.confirmPassword, {
//     message: "Password does not match",
//     path: ["confirmPassword"],
// });