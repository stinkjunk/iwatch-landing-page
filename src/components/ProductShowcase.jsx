"use client";
import { useState } from "react";

import Image from "next/image";

const browseItemStyling =
  "bg-contain bg-center bg-no-repeat browseItem relative cursor-pointer ";

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
    </>
  );
};

export default ProductShowcaseComponent;
