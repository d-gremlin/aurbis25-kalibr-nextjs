import Image from "next/image"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const res = await fetch(`http://localhost:1337/api/portfolio-works?filters[Slug][$contains]=${(await params).slug}`, { cache: 'no-store' })
  const portfolioWorks = await res.json()
  return {
    title: portfolioWorks.data[0].title
  }
}
async function getPortfolio(filterKey: string, filterValue: string | number) {
  const res = await fetch(`http://localhost:1337/api/portfolio-works?filters[${filterKey}][$contains]=${filterValue}`, { cache: 'no-store' })
  const category = await res.json()

  return category
}
export default async function Page({ params }: { params: Promise<{ Slug: string }> }) {

  const portfolioWorks = await getPortfolio('Slug', (await params).Slug)
  if ((await params).Slug) {
    return (<h1> {portfolioWorks.data[0].title}</h1>)
  } else {

    notFound()
  }
}
