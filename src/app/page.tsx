import AuthForm from "@/components/AuthForm"
import Image from "next/image"

export const metadata = {
  title: "Create an account",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container grid lg:grid-cols-2 w-screen h-screen flex-col justify-center items-center lg:max-w-none lg:px-0">
        <div className="h-full hidden lg:block" style={{
          backgroundImage: "url(/authpicture.png)",
          backgroundSize: "cover",
        }}/>
        <div className="lg:p-12">
          <div className="flex flex-col justify-center w-full sm:w-96 mx-auto space-y-10">
            <div className="flex flex-col space-y-2">
              <Image
                src="/logo.png"
                height={78}
                width={120}
                alt="logo"
                className="mx-auto mb-28"
              />
              <h3 className="text-2xl text-slate-600">
                Welcome back!
              </h3>
              <h1 className="text-[32px] font-semibold tracking-tight">
                Login to your account
              </h1>
            </div>
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}
