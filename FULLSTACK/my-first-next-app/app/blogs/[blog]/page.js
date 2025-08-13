export default async function BlogContent({ params }) {
  const { blog } = await params;
  return <h1>You Entered in a Blog page with blog: {blog} </h1>;
}
