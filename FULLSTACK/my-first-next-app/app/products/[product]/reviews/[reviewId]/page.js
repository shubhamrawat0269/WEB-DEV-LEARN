export default async function Review({ params }) {
  const { product, reviewId } = await params;

  return (
    <div>
      <h1>
        Reviews {reviewId} Section here for product : {product}
      </h1>
    </div>
  );
}
