import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }: any) => {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative  h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          alt="image"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
      <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;