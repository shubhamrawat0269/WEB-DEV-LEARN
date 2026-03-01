export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  return {
    title: `Blog ${id}`,
  };
};

const BlogsPage = async ({ params, searchParams }) => {
  console.log(await params);
  // console.log(await searchParams);

  return <h1>Blogs page</h1>;
};

export default BlogsPage;
