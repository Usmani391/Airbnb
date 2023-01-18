import Image from 'next/image';
import {Post} from './Constants'

const SmallCards = (props:Post) => {
  return (
    <div className="flex hover:bg-slate-100 cursor-pointer duration-200 transition   transform hover:scale-105 m-2 mt-5 rounded-xl  ease-out space-x-6  items-center " key={props.location}>
    <div className=' relative  h-16 w-16 rounded-lg '>
    <Image
      src={props.img}
      fill
      alt="image"
      className="rounded-xl"
      />
      </div>
    <div>
    <h1 className="font-semibold">{props.location}</h1>
    <p>{props.distance}</p>
    </div>
  </div>
  )
}

export default SmallCards