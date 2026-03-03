export default function ProductLayout({ children }) {
  return (
    <>    
    <h1 className="text-3xl font-bold">Header</h1>
      {children}
    <h1 className="text-3xl font-bold">Footer</h1>
    </>
  );
}
