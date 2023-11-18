import Link from "next/link";
import BookCard from "@/components/BookCard";
import { getCategories } from "@/lib/categories";

export const metadata = {
  title: "Home Page",
}

export default async function HomePage() {
  const categories = await getCategories()

  return (
    <>
      {/* Slide Component */}
      <div className="container mx-auto flex flex-col gap-20 p-4 lg:pb-20">
        {categories.category.map((category: any) => (
          <div key={category.id} className="flex flex-col">
            <div className="flex justify-between mb-8">
              <h1 className="text-[32px] font-semibold">{category.name}</h1>
              <Link href={`/home/${category.id}`}>
                <p className="text-[#EF6B4A] text-[20px] font-semibold">
                  View All
                </p>
              </Link>
            </div>
            {/* @ts-ignore */}
            <BookCard id={category.id} />
          </div>
        ))}
      </div>
    </>
  )
}
