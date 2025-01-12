import Image from "next/image"
import { Metadata } from "next"

type Props = {
  params:{
    slug: string
  }
}


async function getPageData(filterKey:string, filterValue:string|number) {
  const res = await fetch(`http://localhost:1337/api/pages?filters[${filterKey}][$contains]=${filterValue}&populate[0]=Header`, { cache: 'no-store' })
  const data = await res.json()

  return data
}
export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  
  const about = await getPageData('slug', 'about')
  return(<h1> {about.data[0].Header.Caption}</h1>)
}
