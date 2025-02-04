import Image from "next/image"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const res = await fetch(`http://localhost:1337/api/product-lines?filters[Slug][$contains]=${(await params).slug}`, { cache: 'no-store' })
  const productLines = await res.json()
  return {
    title: productLines.data[0].title
  }
}
async function getProductLines(filterKey: string, filterValue: string | number) {
  const res = await fetch(`http://localhost:1337/api/product-lines?filters[${filterKey}][$contains]=${filterValue}`, { cache: 'no-store' })
  const productLines = await res.json()

  return productLines
}
export default async function Page({ params }: { params: Promise<{ Slug: string }> }) {

  const productLines = await getProductLines('Slug', (await params).Slug)
  if ((await params).Slug) {
    return (<h1> {productLines.data[0].title}</h1>)
  } else {

    notFound()
  }
}
