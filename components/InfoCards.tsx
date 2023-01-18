import Image from 'next/image';
import { Info } from './Constants';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const InfoCards = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Info) => {
  return (
    <div className="flex  py-7 px-2 border-b cursor-pointer hover:opacity-80 pr-4 hover:shadow-lg flex-col md:flex-row transition duration-200 ease-out">
      <div className="relative h-52 w-80 flex-shrink-0  md:h-52 md:w-80 "> 
        <Image
          src={img}
          fill
          alt="img"
          className="absolute rounded-lg object-cover "
        />
      </div>
      <div className="flex flex-grow flex-col md:pl-5">
        <div className="flex  justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer bg-white" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2  " />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className='flex items-center '>
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>
          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight '>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
 