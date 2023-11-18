"use client"

import { useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"
import Button from "./Button"
import axios from "axios"
import { handleLogin, handleRegister } from "@/services/userAuth"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [action, setAction] = useState<"login" | "register">("login")

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    console.log("helloo login")

    try {
      if (action === "login") {
        const response = await handleLogin(data.email, data.password)
        console.log('Response: ', response)
      } else {
        const response = await handleRegister(data.name, data.email, data.password)
        console.log('Response register: ', response)
      }

    } catch (error) {
      console.log('Error: ', error)
    }
    setIsLoading(false);
  }

  const toggleAction = () => {
    setAction(action === "login" ? "register" : "login")
  }

  return (
    <div className="mt-12 mx-auto sm:mx-0 sm:max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mb-[10px]">
        {action === "register" && <Input id="name" label="Name" register={register} disabled={isLoading} errors={errors} />}
        <Input id="email" label="E-mail" register={register} disabled={isLoading} errors={errors} type="email" />
        <Input id="password" label="Password" register={register} disabled={isLoading} errors={errors} type="password" />
        <Button type="submit" classNames="w-full sm:w-[400px] h-[60px] flex items-center hover:scale-95 hover:transition-all hover:duration-500" bgColor="bg-[#EF6B4A]" textColor="text-[#FFFFFF]" disabled={isLoading}>
          {action === "login" ? "Login" : "Register"}
        </Button>
      </form>
      <Button onClick={toggleAction} classNames="w-full sm:w-[400px] h-[60px] flex items-center hover:scale-95 hover:transition-all hover:duration-500" bgColor="transparent" textColor="text-[#6251DD]" borderColor="border border-[#6251DD]" disabled={isLoading}>
        {action === "login" ? "Register" : "Login"}
      </Button>
    </div>
  )
}
