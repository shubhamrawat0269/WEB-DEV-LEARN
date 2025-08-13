import Link from "next/link";

export default async function Home({ params, searchParams }) {
  console.log(await params);
  console.log(await searchParams);

  return (
    <div>
      <div className="flex gap-4">
        <Link href={`/`}>Home</Link>
        <Link href={`/services`}>Services</Link>
        <Link href={`/about`}>About</Link>
      </div>
      <h1>Welcome To Home Page</h1>
    </div>
  );
}
