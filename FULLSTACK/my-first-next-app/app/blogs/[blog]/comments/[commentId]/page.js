export default async function Comment({ params }) {
  const { blog, commentId } = await params;
  return (
    <h1>
      Comment : {commentId} for {blog} page
    </h1>
  );
}
