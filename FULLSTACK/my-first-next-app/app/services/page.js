import Link from "next/link";

export default async function Services() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Welcome To All Services Page</h1>

      <div className="flex flex-col gap-2">
        <Link href={`/services/web-dev`}>Web Development</Link>
        <Link href={`/services/app-dev`}>App Development</Link>
      </div>
    </div>
  );
}
