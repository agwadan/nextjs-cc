import { useRouter } from "next/router"

const ReviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(router.query);
  return (
    <div>Review Number . . . {reviewId} for product {productId}</div>
  )
}

export default ReviewId