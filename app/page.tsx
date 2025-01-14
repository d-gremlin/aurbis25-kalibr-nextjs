
import Header from "@/components/header"
import Carousel from "@/components/carousel"
import Image from "next/image"
// import background from  "./background.jpg"
async function getPageData() {
  const res = await fetch(`http://localhost:1337/api/partnership-section?populate[0]=Cards&populate[1]=Heading&populate[2]=Cards.Point&populate[3]=Cards.Point.Image&populate[4]=Cards.Actions`, { cache: 'no-store' })
  const data = await res.json()

  return data
}
async function PartnershipPageData(filterKey: string, filterValue: string | number) {
  const res = await fetch(`http://localhost:1337/api/pages?filters[${filterKey}][$contains]=${filterValue}`, { cache: 'no-store' })
  const partnershipPageData = await res.json()

  return partnershipPageData
}
export default async function Home() {


  const pageData = await getPageData()
  return (
    <div>
      <Header />
      <main className="flex  py-16 flex-col gap-8 ">
      <Carousel />
      
        <h1 className="self-center" >{pageData.data.Heading.Caption}</h1>
        <aside id="gallery" className="grid grid-cols-autofit self-center justify-center w-full lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%]" data-featherlight-gallery
          data-featherlight-filter="a">
          {pageData.data.Cards.map(async (el: any) => {
            if (el.Actions[0].Enabled) {
              return <a key={el.Key} href={"partnership" + el.Actions[0].URL} className="relative"
                data-wow-delay="0.9s">
                <div className="absolute flex bottom-0 right-0 p-2 bg-white/75 justify-end items-center w-full h-18  z-10">
                  <span className=" text-2xl text-amber-700  text-end font-medium  z-20">{el.Point.Additional}</span>
                </div>
                <Image
                  src={el.Point.Image.url} alt={el.Point.Image.name}
                  className="h-full w-full"
                  width={el.Point.Image.width}
                  height={el.Point.Image.height}
                />
              </a>
            } else {
              return <div key={el.Key} className="relative"
                data-wow-delay="0.9s">
                <div className="absolute flex bottom-0 right-0 p-2 bg-white/75 justify-end items-center w-full h-18  z-10">
                  <span className=" text-2xl text-amber-700  text-end font-medium  z-20">{el.Point.Additional}</span>

                </div>

                <Image
                  src={el.Point.Image.url} alt={el.Point.Image.name}
                  className="h-full w-full"
                  width={el.Point.Image.width}
                  height={el.Point.Image.height}
                />

              </div>
            }

          })}

          <div className="h-full w-auto flex flex-col justify-between">
            <span className="text-lg p-4">{pageData.data.Content}</span>
            {/* <button className="bg-amber-700 text-white font-semibold p-4 self-end text-lg">Связаться</button> */}
            <a href="#" className=" border-amber-700 border-4 border-4 border-solid py-3 px-5 z-10 self-end text-lg font-medium no-underline">Связаться</a>
          </div>

        </aside>


        <div className="small w-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 border-end">
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Delivery Service</h3> */}
                    <p className="text-lg">Благодаря собственному производству,
                      <b> мы контролируем и поддерживаем качество
                        на каждом этапе изготовления продукции.</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-lg-6 border-end">
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Independently Checked</h3> */}
                    <p className="text-lg"><b>Ассортимент нашей продукции включает в себя весь спектр изделий, которые необходимы для организации паркового или дворового пространства:</b>
                      скамейки, урны, вазоны, столы, мангалы и поленницы, уличные трибуны, качели, декоративные панно, указатели, стенды, парковки для велосипедов, оборудование для Workout, оборудование для выгула собак и многое другое.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" >
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Online Support</h3> */}
                    <p className="text-lg">Наличие собственных производственных мощностей
                      позволяет предложить Вам
                      <b> производство по индивидуальным проектам!</b></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex border-top justify-content-center " >
          <div className="w-screen backdrop-blur-sm bg-black/30 absolute z-10 h-48">

          </div>
          <Image
            className="w-screen absolute z-0 h-48 object-cover"
            src="/background.jpg"
            alt="Bench background"
            width={180}
            height={38}
            priority
          />
          <div className="flex flex-column z-10 justify-content-center gap-4 py-2 my-3.5" >
            <div className="flex flex-column z-10 justify-content-center z-10 text-center">
              <h3 className="fs-2 fw-light z-10 text-white">Stay in touch with our <span className="fw-bold">
                monthly and free</span> newsletter!
              </h3></div>
            <div className="flex flex-column z-10 justify-content-center text-center">
              <div className="row">
                <div className="grouped-inputs border bg-light p-2">
                  <div className="row">
                    <div className="col">
                      <form className="form-floating">
                        <input type="email" className="form-control p-3" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                      </form>
                    </div>
                    <div className="z-10 col-auto">
                      <a href="#" className="btn btn-dark py-3 px-5 z-10 text-lg">Subscribe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
