import ProductImage from "@/components/ProductImage"
import { getProductsById } from "@/lib/products"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface CategoryProps {
  params: { homeId: string }
}

export default async function Category({ params }: CategoryProps) {

  const products = await getProductsById(params.homeId)

  return (
    <div className="px-[60px]">
      <Link href="/home">
        <div className="flex items-center gap-[6.5px] mb-6">
          <ChevronLeft size={20} />
          <h1 className="text-[#090937] text-2xl font-bold">Back</h1>
        </div>
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-[40px]">
        {products.product.map((product: any) => (
          <Link key={product.id} href={`product/${params.homeId}&${product.slug}`}>
            <div className="flex flex-col justify-center items-center h-[330px] bg-[#F4F4FF] border border-gray-200 rounded-lg shadow py-[10px] hover:bg-gray-100 cursor-pointer">
              {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
              {/* @ts-ignore */}
              <ProductImage cover={product.cover} />
              <div className="flex justify-between items-center w-full pb-4 pt-2 px-4 leading-normal">
                <div>
                  <h5 className="mb-2 text-xl font-semibold text-[#090937] tracking-tight">{product.name}</h5>
                  <p className="mb-3 text-[16px] font-semibold text-[#090937] opacity-60">{product.author}</p>
                </div>
                <p className="text-2xl text-[#6251DD] font-semibold">{product.price} $</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
