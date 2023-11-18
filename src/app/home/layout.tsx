import { User, Heart, ShoppingCart } from "lucide-react";
import Search from "@/components/inputs/search";
import Image from "next/image";
import Link from "next/link";

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <nav className="sticky mx-auto h-[120px] inset-x-0 top-0 w-full bg-white/75 backdrop-blur-lg z-30 transition-all">
        <div className="mx-auto w-full px-[60px]">
          <div className="flex h-[120px] justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                height={35}
                width={63}
                alt="logo"
              />
            </Link>
            <Search />
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center h-[50px] w-[50px] rounded-md bg-[#F4F4FF] hover:opacity-60 hover:cursor-pointer hover:transition-all hover:duration-200">
                <User />
              </div>
              <div className="flex justify-center items-center h-[50px] w-[50px] rounded-md bg-[#F4F4FF] hover:opacity-60 hover:cursor-pointer hover:transition-all hover:duration-200">
                <Heart />
              </div>
              <div className="flex justify-center items-center h-[50px] w-[50px]  rounded-md bg-[#F4F4FF] hover:opacity-60 hover:cursor-pointer hover:transition-all hover:duration-200">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}
