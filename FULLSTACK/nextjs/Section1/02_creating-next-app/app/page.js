'use client'

export default function Home() {
  console.log("Running Next.js code");
  return (
    <div onClick={() => console.log('Hii')} className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      Hii Subham
    </div>
  );
}
