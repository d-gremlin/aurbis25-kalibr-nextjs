import Image from "next/image"
import Link from 'next/link'

export const metadata = {
  title: "Categories"
}

async function getCategories() {
  const res = await fetch(`http://localhost:1337/api/categories`, { cache: 'no-store' })
  const categories = await res.json()

  return categories
}

export default async function Categories() {
  const categories = await getCategories()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <ul>
          

          {categories.data.map((category: any, index: number) => {
            {
              if (category.Slug == category.Category) {
                return (<li key={category.Slug || `category_${index}`}><b><Link href={"/categories/subcategory/" + category.Category + "/"}>{category.Title}</Link></b></li>)
              } else {
                return (<li key={category.Slug || `category_${index}`}><Link href={"/categories/" + category.Slug}>{category.Title}</Link></li>)
              }

            }
          })}
          
        </ul>
          <hr />
          <pre>{JSON.stringify(categories, null, '    ')}</pre>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
