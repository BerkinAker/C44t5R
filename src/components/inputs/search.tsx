"use client"

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";

import clsx from "clsx";

interface InputProps {
  register: UseFormRegister<FieldValues>,
}

export default function Search({ register }: InputProps) {
  return (
    <div className="flex items-center">
      <input
        className={clsx(`hidden sm:block text-slate-800 h-[50px] sm:text-sm lg:w-[800px] rounded-md form-input border-0 py-2 bg-[#F4F4FF]`)}
        placeholder="Search"
      />
    </div>
  )
}
