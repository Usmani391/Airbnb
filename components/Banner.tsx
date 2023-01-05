import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="background"
        className="h-32 object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className='text-sm sm:text-lg  '>Not sure where to go? Perfect.</p>
        <button className="bg-white rounded-full px-10 py-4 text-purple-500 shadow-md hover:shadow-xl active:scale-90  duration-150 font-bold my-3  ">I'm flexible</button>
      </div>
    </div>
  );
};
export default Banner;
