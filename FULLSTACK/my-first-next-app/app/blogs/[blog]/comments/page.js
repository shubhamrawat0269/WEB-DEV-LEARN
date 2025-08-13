export default async function BlogContent({ params }) {
  const { blog } = await params;
  return <h1>All Comments on : {blog} page </h1>;
}
