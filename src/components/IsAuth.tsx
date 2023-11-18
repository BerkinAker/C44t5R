"use client"

import { useAppSelector } from "@/app/redux/store"
import { redirect, usePathname } from "next/navigation"
import { useEffect } from "react"

export default function IsAuth({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  console.log('IsAuth: ', isAuth)
  useEffect(() => {
    // eger token varsa ve path / ise direkt home'a yonlendir
    if(path === "/" && localStorage.getItem("token")) {
      redirect("/home")
    }

    if (!isAuth && path !== "/" && !localStorage.getItem("token")) {
      redirect("/")
    }
  }, [isAuth, path],)

  return <>{children}</>
}
