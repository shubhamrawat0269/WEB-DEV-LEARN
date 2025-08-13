export default async function Reviews({ params }) {
  //   console.log(await params);
  //   console.log(await searchParams);

  const { product } = await params;

  return (
    <div>
      <h1>All Reviews Section here for product : {product}</h1>
    </div>
  );
}
