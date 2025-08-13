export default async function Products({ params }) {
  //   console.log(await params);
  //   console.log(await searchParams);

  const { product } = await params;

  return (
    <div>
      <h1>This is product : {product}</h1>
    </div>
  );
}
