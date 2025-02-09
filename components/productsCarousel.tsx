'use client'
import Image from "next/image"
import Head from 'next/head'
import { useState } from "react";
import Link from "next/link";




export default function ProductsCarousel() {
  return (

    <div id="draggable" data-carousel='{ "loadingClasses": "opacity-0","dotsItemClasses": "carousel-dot", "slidesQty": { "xs": 1, "lg": 6 }, "isDraggable": true, "isAutoPlay": false, "speed": 2000  }' className="relative w-full bg-[#f6f6f9]" >
      <div className="carousel rounded-none h-80 py-8">
        <div className="carousel-body h-full carousel-dragging:transition-none carousel-dragging:cursor-grabbing cursor-grab opacity-0 " >

          {/* <div className="carousel-slide flex justify-center py-4  px-2 w-full">
            <div className="flex flex-col text-center gap-2  px-2 justify-center px-2w-fit shadow-[10px_10px_15px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover"
                width={300}
                height={300}
              />
              <span className=" text-lg font-medium no-underline">Text Image</span>
            </div>

          </div>
          <div className="carousel-slide flex justify-center  py-4  px-2  w-full">
            <div className="flex flex-col text-center gap-2  px-2 justify-center  w-fit shadow-[10px_10px_15px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover"
                width={300}
                height={300}
              />
              <span className=" text-lg font-medium no-underline">Text Image</span>
            </div>

          </div> */}
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
          <div className="carousel-slide flex justify-center h-full px-2 w-full ">
            <div className="flex flex-col text-center justify-center w-fit  bg-white">
              <Image
                src="/images/bench-2.jpg" alt="img"
                className="object-cover w-full object-cover"
                width={300}
                height={150}
              />
              <span className=" text-lg font-medium self-center no-underline  py-4  h-full  ">Text Image</span>
            </div>
          </div>
        
        </div>
      </div>
      <div className="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
    </div>
  );
}
