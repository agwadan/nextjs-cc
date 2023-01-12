import { useRouter } from "next/router";

const ProductDetails = () => {

  const router = useRouter()
  const productId = router.query.productId;
  console.log(productId);

  return (
    <div>Details for product . . . {productId} </div>
  )
}

export default ProductDetails