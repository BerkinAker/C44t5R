"use client"

import { useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"
import Button from "./Button"
import Link from "next/link"
import axios from "axios"
import { handleRegister } from "@/services/userAuth"

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    try {
      const response = await handleRegister(
        data.email,
        data.name,
        data.password
      );

      console.log('Response: ', response)
    } catch (error) {
      console.log('Error: ', error)
      throw error
    }
    setIsLoading(false);
  }

  return (
    <div className="mt-12 mx-auto sm:mx-0 sm:max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mb-[10px]">
        <Input id="name" label="Name" register={register} disabled={isLoading} errors={errors} />
        <Input id="email" label="E-mail" register={register} disabled={isLoading} errors={errors} type="email" />
        <Input id="password" label="Password" register={register} disabled={isLoading} errors={errors} type="password" />
        <Button type="submit" classNames="w-full sm:w-[400px] h-[60px] flex items-center" bgColor="bg-[#EF6B4A]" textColor="text-[#FFFFFF]" disabled={isLoading}>
          Register
        </Button>
      </form>
      <Link href="/" >
        <Button classNames="w-full sm:w-[400px] h-[60px] flex items-center" bgColor="transparent" textColor="text-[#6251DD]" borderColor="border border-[#6251DD]" disabled={isLoading}>
          Login
        </Button>
      </Link>
    </div>
  )
}
