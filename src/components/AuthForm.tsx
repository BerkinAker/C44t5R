"use client"

import { useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"
import Button from "./Button"

type UserAction = "LOGIN" | "SIGNUP"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [action, setAction] = useState<UserAction>("LOGIN")

  const toggleAction = () => {
    if (action === "LOGIN") {
      setAction("SIGNUP")
    } else {
      setAction("LOGIN")
    }
  }

  const { register, handleSubmit, formState: {
    errors,
  } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log("helloo")
    if (action === "LOGIN") {
      // login
    } else {
      // signup
    }

  }

  return (
    <div className="mt-12 mx-auto sm:mx-0 sm:max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {action === "SIGNUP" && (
          <Input id="name" label="Name" register={register} disabled={isLoading} errors={errors} />
        )}
        <Input id="email" label="E-mail" register={register} disabled={isLoading} errors={errors} type="email" />
        <Input id="password" label="Password" register={register} disabled={isLoading} errors={errors} type="password" />
        <div className="space-y-[10px]">
          <Button type="submit" classNames="w-full sm:w-[400px] h-[60px] flex items-center" bgColor="bg-[#EF6B4A]" textColor="text-[#FFFFFF]" disabled={isLoading}>
            {action === "LOGIN" ? "Login" : "Register"}
          </Button>
          <Button classNames="w-full sm:w-[400px] h-[60px] flex items-center" bgColor="transparent" textColor="text-[#6251DD]" borderColor="border border-[#6251DD]" disabled={isLoading}>
            {action === "LOGIN" ? "Register" : "Login"}
          </Button>
        </div>
      </form>
    </div>
  )
}
