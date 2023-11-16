"use client"

import { useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Input from "./inputs/Input"

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
          <Input id="name" label="Name" register={register} errors={errors} />
        )}
        <Input id="email" label="E-mail" register={register} errors={errors} type="email" />
        <Input id="password" label="Password" register={register} errors={errors} type="password" />
        <div>
          
        </div>
      </form>
    </div>
  )
}
