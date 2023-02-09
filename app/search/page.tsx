'use client';
import { parseISO, format } from 'date-fns';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useSearchParams } from 'next/navigation';
import { PageData } from 'components/Constants';
import InfoCards from 'components/InfoCards';

const search =() => {
  const urlObj = useSearchParams();
  const location = urlObj.get('location');
  const startDate = String(urlObj.get('startDate'));
  const endDate = String(urlObj.get('endDate'));
  const noOfGuest = urlObj.get('noOfGuest');
  const ForDateStart = format(new Date(parseISO(startDate)), 'dd MMMM yy');
  const ForDateEnd = format(new Date(parseISO(endDate)), 'dd MMMM yy');
  const range = `${ForDateStart} - ${ForDateEnd}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays on Mars</h1>
          <h1 className="mt-2 mb-6 text-3xl font-semibold"></h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap px-2 text-gray-800 md:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className='flex flex-col'>
          {PageData?.map(({ img, location, title, description, star, price, total }) => (<InfoCards img={img} location={location} title={title} 
          description={description} star={star} price={price} total={total}  />))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;
