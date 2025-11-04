"use client";
import { useState } from "react";

import Image from "next/image";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const browseItemStyling =
  "bg-contain bg-center bg-no-repeat browseItem relative cursor-pointer ";

const colorCircleStyling =
  "w-[40%] aspect-square rounded-full cursor-pointer border-2 border-white";
const colorCircleActive = " w-[60%] border-4 shadow-xl";
const dottedLine = "h-6 w-px border-1 border-white border-dashed my-1";
const browseArrowSize = 30;

const ProductShowcaseComponent = () => {
  const [productColor, setProductColor] = useState("navy");
  

  //for at browse productColor numerisk:
  let number;
  if (productColor === "navy") {
    number = 0;
  } else if (productColor === "mint") {
    number = 1;
  } else if (productColor === "ocean") {
    number = 2;
  }

  function updateNumber(operation) {
    if (operation === "+") {
      number = number + 1;
    } else {
      if (number === 0) {
        number = 2;
      } else {
        number = number - 1;
      }
    }
    if (number > 2) {
      number = 0;
    }
    if (number === 0) {
      setProductColor("navy");
    } else if (number === 1) {
      setProductColor("mint");
    } else if (number === 2) {
      setProductColor("ocean");
    }
  }

  //------------------------------------------------------------------------------

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
          className={
            "bg-[var(--navyCol)] " +
            colorCircleStyling +
            (productColor === "navy" ? colorCircleActive : "")
          }
          onClick={() => setProductColor("navy")}
        ></div>
        <div className={dottedLine}></div>
        <div
          className={
            "bg-[var(--mintCol)] " +
            colorCircleStyling +
            (productColor === "mint" ? colorCircleActive : "")
          }
          onClick={() => setProductColor("mint")}
        ></div>
        <div className={dottedLine}></div>
        <div
          className={
            "bg-[var(--oceanCol)] " +
            colorCircleStyling +
            (productColor === "ocean" ? colorCircleActive : "")
          }
          onClick={() => setProductColor("ocean")}
        ></div>
      </div>
      <div className="col-start-1 row-start-3 mb-10 mt-auto mr-auto">
        <div className="flex">
          <HiOutlineArrowNarrowLeft
            color="white"
            size={browseArrowSize}
            onClick={() => updateNumber()}
            className="cursor-pointer"
          ></HiOutlineArrowNarrowLeft>
          <p className="flex items-center justify-center mx-2">{number + 1}</p>
          <HiOutlineArrowNarrowRight
            color="white"
            size={browseArrowSize}
            onClick={() => updateNumber("+")}
            className="cursor-pointer"
          ></HiOutlineArrowNarrowRight>
        </div>
      </div>
    </>
  );
};

export default ProductShowcaseComponent;
