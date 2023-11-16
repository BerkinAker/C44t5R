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
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors<FieldValues>,
  required?: boolean,
  disabled?: boolean,
}

export default function Input({ id, label, type, register, errors, required, disabled }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-slate-700 font-medium leading-4 ">
        {label}
      </label>
      <div className="mt-4">
        <input 
          className={clsx(`text-slate-800 h-[60px] sm:text-sm w-full block rounded-sm form-input border-0 py-2 shadow-sm bg-[#F4F4FF] sm:w-[400px] focus:ring-2 focus:ring-inset`, errors[id] && "ring-2 ring-red-500", disabled && "bg-slate-100 opacity-60 cursor-not-allowed")}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required: required })}
        />
      </div>
    </div>
  )
}
