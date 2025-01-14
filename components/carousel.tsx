'use client'
import Image from "next/image"
import Head from 'next/head'
import { useState } from "react";
import Link from "next/link";

export default function Carousel() {
  return (

    <div id="horizontal-thumbnails" data-carousel='{ "loadingClasses": "opacity-0" }' className=" h-[600px] relative w-full lg:xl:px-[5%]  xl:2xl:px-[10%] 2xl:max-[6000px]:px-[15%]">
      <div className="carousel size-full ">
        <div className="carousel-body opacity-0  h-3/4">
          <div className="carousel-slide ">
            <div className="flex size-full  justify-center">
              <Image
                className="size-full object-cover object-center"
                aria-hidden
                src="/carousel/20220519_142952.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex size-full justify-center">
              <Image
                className="size-full object-cover object-center"
                aria-hidden
                src="/carousel/20220625_090350.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex size-full justify-center object-center">
              <Image
                className="size-full object-cover"
                aria-hidden
                src="/carousel/20220625_090408.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide ">
            <div className="flex size-full  justify-center object-center">
              <Image
                className="size-full object-cover"
                aria-hidden
                src="/carousel/20220625_090420.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide ">
            <div className="flex size-full  justify-center object-center">
              <Image
                className="size-full object-cover"
                aria-hidden
                src="/carousel/20220625_090852.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide ">
            <div className="flex size-full  justify-center object-center">
              <Image
                className="size-full object-cover"
                aria-hidden
                src="/carousel/20230516_155649.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
          <div className="carousel-slide ">
            <div className="flex size-full  justify-center object-center">
              <Image
                className="size-full object-cover"
                aria-hidden
                src="/carousel/20230517_143207.jpg"
                alt="File icon"
                width={2016}
                height={1512}
              />
            </div>
          </div>
        </div>
        <div className="carousel-pagination bg-base-100 absolute bottom-0 end-0 start-0 z-[1] h-1/4 gap-2 flex justify-center gap-2 overflow-x-auto pt-2" >
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20220519_142952.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20220625_090350.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20220625_090408.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20220625_090420.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20220625_090852.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20230516_155649.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
          <Image
            className="carousel-pagination-item carousel-active:opacity-100 grow object-cover opacity-30"
            aria-hidden
            src="/carousel/20230517_143207.jpg"
            alt="File icon"
            width={160}
            height={160}
          />
        </div>
        <button type="button" className="carousel-prev">
          <span className="mb-15" aria-hidden="true">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="mb-15" aria-hidden="true">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </span>
        </button>
      </div>
    </div>


  );
}
