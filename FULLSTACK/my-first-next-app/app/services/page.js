import Link from "next/link";

export default async function Services({params}) {
  console.log(await params)
  return (
    <div>
      <h1 className="text-5xl font-bold">Welcome To All Services Page</h1>

      <div className="flex gap-4">
        <Link href={`/services/web-dev`}>Web Development</Link>
        <Link href={`/services/app-dev`}>App Development</Link>
        <Link href={`/services/app-design`}>Web/App Design</Link>
        <Link href={`/services/seo`}>SEO Services</Link>
      </div>
    </div>
  );
}
