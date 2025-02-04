import Image from "next/image"
import Link from 'next/link'

export const metadata = {
  title: "ProductLines"
}

async function getProductLines() {
  const res = await fetch(`http://localhost:1337/api/product-lines`, { cache: 'no-store' })
  const productLines = await res.json()

  return productLines
}

export default async function ProductLines() {
  const productLines = await getProductLines()
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <ul>

          { productLines.data ? 
          productLines.data.map((productLine: any) => {
            {
              return (<li key={productLine.Slug}><Link href={"/product-lines/" + productLine.Slug}>{productLine.Slug}</Link></li>)
    
            }
          }): null}
        </ul>
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
