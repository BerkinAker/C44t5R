"use client"

import clsx from "clsx"

interface ButtonProps {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  bgColor?: string
  textColor?: string
  borderColor?: string
  classNames?: string
  disabled?: boolean
}


export default function Button({ children, type, onClick, bgColor, textColor, borderColor, disabled, classNames }: ButtonProps) {
  return (
    <button className={clsx(`flex justify-center text-2xl font-semibold rounded-md px-4 py-2 hover:transition-all hover:duration-300 hover:opacity-80`, bgColor ? bgColor : "bg-slate-700", textColor ? textColor : "text-white", borderColor ? borderColor : "border-0", disabled && "cursor-not-allowed opacity-50" ,classNames ? classNames : "" )} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
