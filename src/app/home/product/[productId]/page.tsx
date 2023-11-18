
import ProductImage from "@/components/ProductImage"
import RouterBack from "@/components/RouterBack"
import { getProductImageByName, getProductsById } from "@/lib/products"
import Image from "next/image"
import { Heart } from "lucide-react"
import Button from "@/components/Button"

interface ProductProps {
  params: { productId: string }
}

export const metadata = {
  title: "Product Detail",
}

export default async function Product({ params }: ProductProps) {
  const uriParams = params.productId.split("%")
  const categoryId = uriParams[0]
  const productSlug = uriParams[1]

  const products = await getProductsById(categoryId)
  const product = products.product.find((product: any) => product.slug === productSlug.slice(2))

  const productImage = await getProductImageByName(product.cover)
  const image = productImage.action_product_image.url

  return (
    <div className="px-[60px] pb-20 md:pb-0">
      <RouterBack />
      <div className="flex flex-col md:flex-row gap-20">
        <div className="bg-[#F4F4FF] rounded-md">
          <div className="md:w-[420px] md:h-[570px] flex justify-center items-center">
            <Image
              src={image}
              height={300}
              width={120}
              alt="product"
              style={{ width: 300, height: 450 }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[60px] w-full">
          <div className="w-full">
            <div className="flex w-full justify-between items-center ">
              <h1 className="text-lg lg:text-[40px] font-semibold leading-[54px] mb-[10px]">{product.name}</h1>
              <div className="bg-[#F4F4FF] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:opacity-70 hover:transition-all hover:duration-300">
                <Heart color='#6251DD' />
              </div>
            </div>
            <p className="text-lg lg:text-3xl text-black opacity-60">{product.author}</p>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl text-[#090937] font-bold mb-[10px]">Summary</h1>
            <p className="text-lg md:text-xl text-[#090937] opacity-60 leading-normal">{product.description}</p>
          </div>
          <div className="flex justify-end items-center w-full mx-auto">
            <Button bgColor="bg-[#EF6B4A]" classNames="h-[60px] lg:w-[400px] flex justify-between items-center gap-4 px-5 py-[10px] hover:scale-95 hover:duration-200">
              <span className="text-lg font-bold">
                {product.price} $
              </span>
              <span className="text-lg font-semibold">
                Buy Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
