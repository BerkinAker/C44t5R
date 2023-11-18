"use client"

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";

import clsx from "clsx";

interface InputProps {
  id: string,
  label: string,
  type?: string,
  placeholder?: string
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors<FieldValues>,
  required?: boolean,
  disabled?: boolean,
}

export default function Input({ id, label, type, placeholder, register, errors, required, disabled }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-slate-700 font-medium leading-4 ">
        {label}
      </label>
      <div className="mt-4">
        {(id === "name") && (
          <input
            className={clsx(`text-slate-800 h-[60px] sm:text-sm w-full block rounded-sm form-input border-0 p-4 py-2 shadow-sm bg-[#F4F4FF] sm:w-[400px] focus:ring-2 focus:ring-inset`, errors[id] && "ring-2 ring-red-500", disabled && "bg-slate-100 opacity-60 cursor-not-allowed")}
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required: required, minLength: 3, maxLength: 32 })}
          />
        )}
        {(id === "email") && (
          <input
            className={clsx(`text-slate-800 h-[60px] sm:text-sm w-full block rounded-sm form-input border-0 p-4 py-2 shadow-sm bg-[#F4F4FF] sm:w-[400px] focus:ring-2 focus:ring-inset`, errors[id] && "ring-2 ring-red-500", disabled && "bg-slate-100 opacity-60 cursor-not-allowed")}
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required: required })}
          />
        )}
        {(id === "password") && (
          <input
            className={clsx(`text-slate-800 h-[60px] sm:text-sm w-full block rounded-sm form-input border-0 p-4 py-2 shadow-sm bg-[#F4F4FF] sm:w-[400px] focus:ring-2 focus:ring-inset`, errors[id] && "ring-2 ring-red-500", disabled && "bg-slate-100 opacity-60 cursor-not-allowed")}
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required: required, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/ })}
          />
        )}
        {/* give me a sentence that describe name input must be 20 or min 3 okay ? */}
        {errors.name && id === "name" && (<span className="text-rose-500 text-sm">The name must be between 3-32 characters. </span>)}
        {errors.email && id === "email" && (<span className="text-rose-500 text-sm">The email must be valid.</span>)}
        {errors.password && id === "password" && (<span className="text-rose-500 text-sm">The password must be alphanumeric and between 6-20 characters. </span>)}

      </div>
    </div>
  )
}
