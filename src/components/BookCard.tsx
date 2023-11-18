import { getProductsById } from '@/lib/products'
import React from 'react'
import ProductImage from './ProductImage'
import Link from 'next/link'

export default async function BookCard({ id }: { id: string }) {

  const products = await getProductsById(id)

  return (
    <div className="grid p-4 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:p-0">
      {products.product.slice(0, 4).map((product: any) => (
        <Link key={product.id} href={`/home/product/${id}&${product.slug}`}>
          <div className="grid grid-cols-5 gap-5 bg-[#F4F4FF] border border-gray-200 rounded-lg shadow py-[10px] hover:bg-gray-100 cursor-pointer">
            <div className="col-span-2">
              {/* @ts-ignore */}
              <ProductImage cover={product.cover} />
            </div>
            <div className="flex flex-col justify-between leading-normal col-span-3">
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
  )
}
