"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function RouterBack() {
  const router = useRouter()

  return (
    <div onClick={() => router.back()} className="flex items-center gap-[6.5px] md:w-[180px] h-[33px] mb-6 cursor-pointer">
      <ChevronLeft size={20} />
      <h1 className="text-[#090937] text-2xl font-bold">Back</h1>
    </div>
  )
}
