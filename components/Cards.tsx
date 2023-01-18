import Image from "next/image"
import { CardsType } from "./Constants"

const Cards = ({img,title}:CardsType) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
    <div className=" relative h-80 w-80 ">
      <Image src={img} alt='images' fill  className="rounded-xl"/>
    </div>
      <h1 className="font-bold text-xl mt-3">{title} </h1>
    </div>
  )
}

export default Cards


