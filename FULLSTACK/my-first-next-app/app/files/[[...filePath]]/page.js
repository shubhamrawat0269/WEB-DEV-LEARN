export default async function FilePath({ params }) {
  console.log(await params);

  const { filePath } = await params;

  return (
    <div>
      <h1>File : {filePath?.join("/")}</h1>
    </div>
  );
}
