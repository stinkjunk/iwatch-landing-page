// "use client";
// import { useState } from "react";


import DummyComponent from "@/components/DummyComponent";
import ProductShowcaseComponent from "@/components/ProductShowcase";
import Image from "next/image";

export default function Home() {

  // const [productColor, setProductColor] = useState("navy");

  return (
    //className for HTML klasse da class er reserveret i JS
    <>
      <main className="grid grid-cols-[3fr_2fr_0.2fr] grid-rows-[2fr_0.5fr_0.75fr] flex-grow mb-10">
        <h1 className="text-7xl/20 my-auto pr-40 font-normal">
          <span className="font-bold">The Perfect Moment</span> Between Past And
          Future.
        </h1>
        <div className="col-start-1 row-start-2 ">
          <button
            className="px-20 py-4 mb-10 border-2 border-white 
          rounded-full text-lg font-medium cursor-pointer"
          >
            Bye Now
          </button>
        </div>
        <ProductShowcaseComponent />
      </main>
    </>
  ); //Brug <Image /> komponenten i stedet for <img> elementet da
  //det har nogle fordele ift. performance i Next.js
}
