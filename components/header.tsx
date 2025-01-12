'use client'
import Image from "next/image"
import Head from 'next/head'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState(false)
  return (

    <div>

      <header id="mobile-header" className="flex flex-col  lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%]  w-full shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex justify-center py-4   justify-self-center justify-items-center items-center content-center relative">
          <span onClick={() => setVisible(!visible)} className="flex absolute text-5xl  text-center font-extrabold self-center justify-self-center px-4 left-0 top-2">
            =
          </span>
          {/* justify-center items-center content-center */}

          <span className="text-3xl text-center self-center justify-self-center font-extrabold items-center content-center ">
            Калибр СТ
          </span>
        </div>
        {visible ? <div className="flex flex-col">
          <div className="flex gap-4 w-full pb-4  justify-center items-center content-center">

            <Image
              className=""
              src="/images/icon-telephone.png"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />
            <Image
              className=""
              src="/images/icon-telegram.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />
            <Image
              className=""
              src="/images/icon-vk.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />
            <Image
              className=""
              src="/images/icon-whatsapp.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />

          </div>

          <div className="flex flex-col text-lg  font-medium justify-center">
          <Link href={"/contacts"} className="text-center  border-t-2 border-grey-500  p-2 no-underline">Контакты</Link>
          <Link href={"/partnership"} className="text-center border-t-2 border-grey-500  p-2 no-underline">Сотрудничество</Link>
          <Link href={"/about"} className="text-center border-t-2 border-grey-500  p-2 no-underline">О компании</Link>
          <Link href={"/services"} className="text-center border-t-2 border-grey-500   p-2  no-underline">Услуги</Link>
          </div>
        </div> : null}


      </header>
      <header id="pc-header" className="flex gap-4  lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%] py-2 w-full shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)]">

        <span className="text-5xl text-center font-extrabold items-center content-center  w-1/4  ">
          Калибр СТ
        </span>
        <div className="flex w-3/4 flex-col">
          <div className="flex gap-4 w-full p-2 justify-end items-center content-center">
            <span className="text-end  text-lg">+7 (987) 654-32-10</span>
            {/* <Image
                  className=""
                  src="/images/icon-telephone.png"
                  alt="Bench background"
                  width={40}
                  height={40}
                  priority
                /> */}
            <Image
              className=""
              src="/images/icon-telegram.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />
            <Image
              className=""
              src="/images/icon-vk.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />
            <Image
              className=""
              src="/images/icon-whatsapp.svg"
              alt="Bench background"
              width={40}
              height={40}
              priority
            />

          </div>

          <div className="grid grid-cols-4 p-2 border-t-2 border-grey-500 text-lg  font-medium justify-center">
          <Link href={"/contacts"} className="text-center no-underline">Контакты</Link>
          <Link href={"/partnership"}   className="text-center no-underline">Сотрудничество</Link>
          <Link href={"/about"} className="text-center no-underline">О компании</Link>
          <Link href={"/services"}  className="text-center no-underline">Услуги</Link>
          </div>
        </div>

      </header>
    </div>
  );
}
