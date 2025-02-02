
import Header from "@/components/header"
import Carousel from "@/components/carousel"
import Image from "next/image"
import ProductsCarousel from "@/components/productsCarousel"
import Categories from "@/components/categories"
import { IPropsWithStatus } from "../lib/network"
import { isGoodProps } from "../lib/network"
interface IPayload {
  data: any,
  valid: IPropsWithStatus
}
async function getPageData(url: string) {

  const payload: IPayload = {
    data: [],
    valid: { error: null, isLoading: true }
  }

  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    payload.data = await response.json()
    payload.valid.isLoading = false
  } catch (error: any) {
    payload.valid.error = error
  }

  return payload
}


async function PartnershipPageData(filterKey: string, filterValue: string | number) {
  const res = await fetch(`http://localhost:1337/api/pages?filters[${filterKey}][$contains]=${filterValue}`, { cache: 'no-store' })
  const partnershipPageData = await res.json()

  return partnershipPageData
}

const CategoriesSkeleton = () => (
  <div className="grid grid-cols-4 grid-cols-autofit justify-self-center justify-center  justify-content-center gap-4 px-4 w-full animate-pulse">
            <div className="relative  col-span-2 row-span-2">
              <div className="absolute flex  bottom-0 right-0 bg-black/15 w-full w-full h-full  z-10">
                <span className="self-start h-8 bg-gray-300 rounded-full w-[50%] m-20 "></span>
              </div>
              <svg className="flex w-full h-full stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>

            </div>
            <div className="relative  h-52 ">
              <div className="absolute flex  bottom-0 right-0 bg-black/15 w-full h-full  z-10">
                <span className="self-start h-6 bg-gray-300 rounded-full w-[50%] m-8 "></span>
              </div>
              <svg className="flex w-full h-full stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
            </div>
            <div className="relative  h-52 ">
              <div className="absolute flex  bottom-0 right-0 bg-black/15 w-full  h-full  z-10">
                <span className="self-start h-6 bg-gray-300 rounded-full w-[50%] m-8 "></span>
              </div>
              <svg className="flex w-full h-full stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
            </div>
            <div className="relative  h-52">
              <div className="absolute flex  bottom-0 right-0 bg-black/15 w-full  h-full  z-10">
                <span className="self-start h-6 bg-gray-300 rounded-full w-[50%] m-8 "></span>
              </div>
              <svg className="flex w-full h-full stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
            </div>

  </div>
)

export default async function Home() {
  const url = `http://localhost:1337/api/partnership-section?populate[0]=Cards&populate[1]=Heading&populate[2]=Cards.Heading&populate[3]=Cards.Actions`
  const payload: IPayload = await getPageData(url)
  console.log(payload.data)
  // const payload: IPayload = {
  //   data: [],
  //   valid: { error: null, isLoading: true }
  // }
  // const pageData = await getPageData()
  return (
    <div>
      <Header valid={isGoodProps(payload.valid)}/>
      
      <main className="flex justify-center justify-items-center items-center  py-16 flex-col gap-8 ">
        {isGoodProps(payload.valid) ?
          <Categories />
          : <CategoriesSkeleton /> }

        {isGoodProps(payload.valid) ?
          <div className="flex flex-col  items-center justify-center text-center gap-4 ">
            <div className="self-start p-2  text-7xl font-medium ">Заголовок</div>
            <span className=" text-2xl self-start text-start  p-2 w-3/4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc faucibus, iaculis enim sed, mattis mi. Aliquam ullamcorper porttitor mauris vitae rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras efficitur, est at mollis euismod, orci leo consequat nulla, in convallis tortor magna vitae odio. </span>
            <div className="flex gap-4">
              <div className="relative">
                <div className="absolute flex  bottom-0 right-0 bg-black/75 justify-center items-center w-full h-18  z-10">
                  <span className=" text-xl text-white self-center text-left z-20  p-2 ">Duis nibh dui, lobortis ut nisl id, blandit consectetur nisi. Pellentesque iaculis dapibus elit et lacinia. </span>
                </div>
                <Image
                  src="/images/bench-2.jpg" alt="img"
                  className="object-cover z-0"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  src="/images/bench-2.jpg" alt="img"
                  className="object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>


            <a href="#" className="btn btn-dark py-2 px-5 z-10 text-lg  w-fit h-fit">Посмотреть все работы</a>
          </div>
          :
          <div className="flex flex-col gap-4 w-full  items-center justify-center text-center animate-pulse">

            <span className="self-start m-2 h-16 bg-gray-300 rounded-full w-96 font-medium z-20"></span>
            <div className="flex flex-col h-full w-full">
              <span className="self-start m-2 h-4 bg-gray-300 rounded-full w-[45vw] font-medium z-20"></span>
              <span className="self-start m-2 h-4 bg-gray-300 rounded-full w-[45vw] font-medium z-20"></span>
              <span className="self-start m-2 h-4 bg-gray-300 rounded-full w-[30vw] font-medium z-20"></span>
            </div>

            <div className="grid grid-cols-autofit  gap-4 self-center justify-center items-center w-full ">
              <svg className="flex h-[200px] w-full  stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
              <svg className="flex h-[200px] w-full  stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
              <svg className="flex h-[200px] w-full  stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
            </div>
            {/* <span className="h-8 bg-gray-300 rounded-full w-56 font-medium z-20"></span> */}
            <span className="  m-2 h-8 bg-gray-300 rounded-full w-52 font-medium z-20"></span>
          </div>}

        {isGoodProps(payload.valid) ?
          <ProductsCarousel />
          :
          <div className="relative  h-80  w-full bg-gray-300 animate-pulse" > </div>
        }

        {isGoodProps(payload.valid) ?
          <Carousel />
          :
          <span className="h-[720px] w-[70vw] bg-gray-300 rounded-[16px] animate-pulse"></span>
        }

        {isGoodProps(payload.valid) ?
          <div>
            <h1 className="self-center" >{payload.data.data.Heading.Caption}</h1>
            <aside id="gallery" className="grid grid-cols-autofit self-center justify-center w-full lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%]" data-featherlight-gallery
              data-featherlight-filter="a">
              {/* {payload.data.data.Cards.map(async (el: any) => {
                console.log(el.Point)
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
                  return (
                    <div key={el.Key} className="relative"
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

                    </div>)
                }

              })} */}

              <div className="h-full w-auto flex flex-col justify-between">
                <span className="text-lg p-4">xxxxx</span>
                {/* <button className="bg-amber-700 text-white font-semibold p-4 self-end text-lg">Связаться</button> */}
                <a href="#" className=" border-amber-700 border-4 border-4 border-solid py-3 px-5 z-10 self-end text-lg font-medium no-underline">Связаться</a>
              </div>

            </aside>
          </div>
          :
          <div className="flex flex-col w-full  animate-pulse">
            <h1 className='self-center h-12 w-96 bg-gray-300 rounded-full   mb-4'></h1>
            <aside id="gallery" className="grid grid-cols-autofit self-center justify-center w-full lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%]" >
              {[0, 1, 2, 3, 4].map(async (el: any) => {

                return <div key={el} className="relative"
                  data-wow-delay="0.9s">
                  <div className="absolute flex bottom-0 right-0 p-2 bg-white/75 justify-end items-center w-full h-18  z-10">
                    {/* <span className=" text-2xl text-amber-700  text-end font-medium  z-20">CCCC</span> */}
                    <span className="h-6 bg-gray-300 rounded-full w-32  text-end font-medium z-20"></span>

                  </div>

                  <svg className="flex h-full w-full stroke-gray-400 justify-center center self-center  bg-gray-300" fill="none"></svg>
                </div>
              }

              )}
              <div className="h-full w-auto flex flex-col justify-between">
                <span className="h-4 m-4 bg-gray-300 rounded-full w-54  font-medium z-20"></span>
                <span className="h-6 bg-gray-300 rounded-full w-48 self-end font-medium z-20"></span>
              </div>

            </aside>
          </div>}


        {isGoodProps(payload.valid) ?
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
          :
          <div className="small w-100 overflow-hidden  animate-pulse">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 border-end">
                  <div className="d-flex">

                    <div className="col-md-9 flex-fill">
                      <div className="flex flex-col h-full w-full">
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-[20%] font-medium z-20"></span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-lg-6 border-end">
                  <div className="d-flex">

                    <div className="col-md-9 flex-fill">
                      <div className="flex flex-col h-full w-full">
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-[20%] font-medium z-20"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3" >
                  <div className="d-flex">

                    <div className="col-md-9 flex-fill">
                      <div className="flex flex-col h-full w-full">
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-fill font-medium z-20"></span>
                        <span className=" m-2 h-4 bg-gray-300 rounded-full w-[20%] font-medium z-20"></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        }
        {/* 
          =============================================================================
        */}
        {isGoodProps(payload.valid) ?
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
                        <a href="#" className="h-full btn btn-dark py-3 px-5 z-10 text-lg">Subscribe</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          :
          <div className="flex border-top justify-content-center  animate-pulse" >
            <div className="w-screen backdrop-blur-sm bg-black/30 absolute z-10 h-48">

            </div>
            <div className="w-screen absolute z-0 h-48 object-cover bg-gray-300"></div>

            <div className="flex flex-column z-10 justify-content-center gap-4 py-2 my-3.5" >
              <div className="flex flex-column z-10 justify-content-center z-10 text-center">
                <span className=" m-2 h-8 bg-gray-200 rounded-full z-10 self-center w-[60%]"></span>
              </div>
              <div className="flex flex-column z-10 justify-content-center text-center w-[50vw]">
                <span className=" m-2 h-16 w-full bg-gray-200 rounded-full z-10 self-center"></span>
              </div>
            </div>
          </div>
        }
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
