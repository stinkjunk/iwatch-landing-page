import DummyComponent from "@/components/DummyComponent";
import Image from "next/image";

export default function Home() {
  return (
    //className for HTML klasse da class er reserveret i JS
    <div className="grid-container"> 
      <p>Projekt</p>
      <DummyComponent />
      <Image />
      <p>success</p>
    </div>
  ); //Brug <Image /> komponenten i stedet for <img> elementet da
     //det har nogle fordele ift. performance i Next.js
}
