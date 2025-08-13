export default async function WebDevService({params}) {
  console.log(await params)
  return <h1>You Entered in a Web dev Service</h1>;
}
