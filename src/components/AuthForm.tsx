"use client"

import { useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"
import Button from "./Button"
import { handleLogin, handleRegister } from "@/services/userAuth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { useDispatch } from "react-redux"
import { AppDispatch } from "@/app/redux/store"
import { login } from "@/app/redux/features/auth-slice"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [action, setAction] = useState<"login" | "register">("login")

  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      checkbox: false,
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    try {
      if (action === "login") {
        console.log(data)
        const response = await handleLogin(data.email, data.password)
        console.log('Response: ', response)
        if (response.action_login.token) {
          toast('You have successfully logged in.')
          console.log('Login successfull')
          if (data.checkbox) {
            localStorage.setItem('token', response.action_login.token)
          }
          router.push('/home')
          dispatch(login())
        } else {
          toast('Invalid username or password.')
          console.log('Login failed')
        }
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
        {action === "register" && <Input id="name" label="Name" placeholder="John Doe" register={register} disabled={isLoading} errors={errors} required />}
        <Input id="email" label="E-mail" placeholder="john@mail.com" register={register} disabled={isLoading} errors={errors} type="email" required />
        <Input id="password" label="Password" placeholder="********" register={register} disabled={isLoading} errors={errors} type="password" required />
        {action === "login" && (
          <div className="flex items-center gap-1 text-[#6251DD]">
            <Input id="checkbox" label="" register={register} errors={errors} type="checkbox" />
            <span className="font-semibold">Remember Me</span>
          </div>
        )}
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
