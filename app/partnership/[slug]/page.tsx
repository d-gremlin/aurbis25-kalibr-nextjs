import Image from "next/image"
import { Metadata } from "next"

type Props = {
  params:{
    slug: string
  }
}

export const generateMetadata = async ({params}:Props): Promise<Metadata>=>{
  const res = await fetch(`http://localhost:1337/api/pages?filters[slug][$contains]=${ (await params).slug}&populate[0]=Header`, { cache: 'no-store' })
  const category = await res.json()
  return {
    title: category.data[0].title
  }
}
async function getPageData(filterKey:string, filterValue:string|number) {
  const res = await fetch(`http://localhost:1337/api/pages?filters[${filterKey}][$contains]=${filterValue}&populate[0]=Header`, { cache: 'no-store' })
  const category = await res.json()

  return category
}
export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  
  const category = await getPageData('slug', (await params).slug)
  return(<h1> {category.data[0].Header.Caption}</h1>)
}
