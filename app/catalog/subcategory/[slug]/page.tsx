import Image from "next/image"
import Link from 'next/link'

async function getCategory(filterKey:string, filterValue:string|number) {
  const res = await fetch(`http://localhost:1337/api/categories?filters[${filterKey}][$contains]=${filterValue}`, { cache: 'no-store' })
  const category = await res.json()

  return category
}
export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  
  const categories = await getCategory('Category', (await params).slug)
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <ul>
      

          {categories.data.map((category: any) => {{
            if(category.Slug == category.Category){
              return(<h1 className="text-2xl">{category.Title}</h1>)
            }else{
              return(<li key={category.Slug}><Link href={"/categories/"+category.Slug}>{category.Title}</Link></li>)
            }
            
            }})}
        </ul>
        <hr />
        <pre>{JSON.stringify(categories, null, '    ')}</pre>
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
