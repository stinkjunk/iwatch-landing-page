"use client";
import { useState } from "react";

import Image from "next/image";

const browseItemStyling =
  "bg-contain bg-center bg-no-repeat browseItem relative cursor-pointer ";

const colorCircleStyling = "w-[40%] aspect-square rounded-full cursor-pointer border-2 border-white";
const colorCircleActive = " w-[60%] border-4 shadow-xl";
const dottedLine = "h-6 w-px border-1 border-white border-dashed my-1"

const ProductShowcaseComponent = () => {
  const [productColor, setProductColor] = useState("navy");
  return (
    <>
      <div className="relative col-start-2 row-start-1 row-span-2 w-full mb-10">
        <Image
          src={`/images/${productColor}.png`}
          alt="iWatch Navy color"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="col-start-2 row-start-3 h-full grid grid-cols-3 gap-10">
        <div
          className={"bg-[url(/images/navy.png)] navy " + browseItemStyling}
          onClick={() => setProductColor("navy")}
        ></div>
        <div
          className={"bg-[url(/images/mint.png)] mint " + browseItemStyling}
          onClick={() => setProductColor("mint")}
        ></div>
        <div
          className={"bg-[url(/images/ocean.png)] ocean " + browseItemStyling}
          onClick={() => setProductColor("ocean")}
        ></div>
      </div>
      <div className="col-start-3 flex flex-col justify-center items-center">
        <div
          className={"bg-[var(--navyCol)] " + colorCircleStyling + (productColor === "navy" ? colorCircleActive : "")}
          onClick={() => setProductColor("navy")}
        ></div>
        <div
        className={dottedLine}></div>
        <div
          className={"bg-[var(--mintCol)] " + colorCircleStyling + (productColor === "mint" ? colorCircleActive : "")}
          onClick={() => setProductColor("mint")}
        ></div>
        <div
        className={dottedLine}></div>
        <div
          className={
            "bg-[var(--oceanCol)] " + colorCircleStyling + (productColor === "ocean" ? colorCircleActive : "")
          }
          onClick={() => setProductColor("ocean")}
        ></div>
      </div>
    </>
  );
};

export default ProductShowcaseComponent;
