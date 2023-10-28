'use client'

import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react";
import useRegisterModal from "@/lib/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../auth/Heading";
import InputAuth from "../auth/InputAuth";
import ButtonAuth from "../auth/ButtonAuth";
import useLoginModal from "@/lib/hooks/useLoginModal";
import {
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { RegisterSchema, RegisterType } from "@/lib/validations/registerUserSchema";
import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { toast } from "@/lib/hooks/use-toast";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter()

  const onToggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [registerModal, loginModal])

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  })

  const { mutate: registerUser, isLoading } = useMutation({
    mutationFn: async ({
      email,
      password,
      confirmPassword,
    }: RegisterType) => {
      const payload: RegisterType = {
        email,
        password,
        confirmPassword,
      };
      const { data } = await axios.post("api/register", payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 403) {
            return toast({
              title: "Creating a user failed",
              description: "Cannot create a user, you are already logged in!",
              variant: "destructive"
            })
          }
          if (err.response?.status === 405) {
            return toast({
              title: "Invalid Action",
              description: "Method not allowed",
              variant: "destructive"
            })
          }
          if (err.response?.status === 409) {
            return toast({
              title: "Invalid email",
              description: "Email already exists. Please use a different one.",
              variant: "destructive"
            })
          }
        } else {
          return toast({
            title: "Error!",
            description: "Error: Something went wrong!",
            variant: "destructive"
          })
        }
      }
    },
    onSuccess: () => {
      // router push the client to homepage / landing etc..

      router.refresh()
      router.push("/discussion")
      return toast({
        title: "Success!",
        description: "Account Created Successfully!",
        variant: "default"
      })
    }
  })

  const onSubmit: SubmitHandler<RegisterType> = (data: RegisterType) => {
    const payload: RegisterType = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };

    registerUser(payload)
  }

  // Eto yung body content ng Register Modal
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Register"
        subtitle="By Continuing you agree to our Terms and Conditions and acknowledge that you understand Privacy Policy"
      />
      <InputAuth
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.email && <span className='text-rose-500 ml-1'>{errors.email.message}</span>}

      <InputAuth
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.password && <span className='text-rose-500 ml-1'>{errors.password.message}</span>}

      <InputAuth
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.confirmPassword && <span className='text-rose-500 ml-1'>{errors.confirmPassword.message}</span>}

    </div>
  )

  // Eto naman yung footer content ng Register Modal
  const footerContent = (
    <div className='flex flex-col w-full'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>

        <div className='relative flex justify-center uppercase mt-3'>
          <span className='bg-background text-[14px] px-2 font-bold w-[100px] text-center text-black'>
            OR
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 mt-3 px-9'>
        <ButtonAuth
          outline
          label="Continue with Google"
          icon={FcGoogle}
          onClick={() => signIn('google')}
        />

        <div className="
          text-neutral-500
          text-center
          font-light
        ">
          <div className="flex flex-row items-center justify-center gap-2">
            <div>
              Already have an account?
            </div>

            <div
              onClick={onToggle}
              className="
                text-[#0227EB]
                hover:text-[#0227EB]/70
                cursor-pointer">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col gap-4 mt-3">
    //   <hr />
    //   <div className="flex items-center justify-center -mt-7">OR</div>
    //   <ButtonAuth
    //     outline
    //     label="Continue with Google"
    //     icon={FcGoogle}
    //     onClick={() => { }} // TODO Auth
    //   />
    // </div>

    // <div className="flex flex-col items-center h-[20px] mt-5">
    //   <div className="flex items-center w-full">
    //     <div className="flex-grow h-px bg-black/20 dark:bg-[#00000066]" />
    //     <p className="text-black dark:text-black text-xs mx-7 font-extrabold">
    //       OR
    //     </p>
    //     <div className="flex-grow h-px bg-black/20 dark:bg-[#00000066]" />
    //   </div>
    // </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Sign Up"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      isLoading={isLoading}
    />
  )
}

export default RegisterModal