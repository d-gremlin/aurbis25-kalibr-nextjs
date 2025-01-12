import Image from "next/image"
import { Metadata } from "next"

async function getPageData(filterKey:string, filterValue:string|number) {
  const res = await fetch(`http://localhost:1337/api/pages?filters[${filterKey}][$contains]=${filterValue}&populate[0]=Header`, { cache: 'no-store' })
  const data = await res.json()

  return data
}
export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  
  const contacts = await getPageData('slug', 'contacts')
  return(<h1> {contacts.data[0].Header.Caption}</h1>)
}
