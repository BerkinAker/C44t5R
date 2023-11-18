interface ProductProps {
  params: { productId: string }
}


export default function Product({params}: ProductProps) {
  return (
    <div>{params.productId}</div>
  )
}
