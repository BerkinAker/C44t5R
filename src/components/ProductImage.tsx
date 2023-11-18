import { getProductImageByName } from "@/lib/products";
import Image from "next/image";

interface ProductImageProps {
  cover: string;
}

export default async function ProductImage({ cover }: ProductImageProps) {
  const productImage = await getProductImageByName(cover)
  const image = productImage.action_product_image.url
  return (
    <Image
      src={image}
      height={180}
      width={120}
      alt="product"
      style={{ width: 120, height: 180 }}
    />
  )
}
