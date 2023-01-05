import SmallCards from 'components/SmallCards';
import Banner from '../components/Banner';
import { CardsType, Post } from 'components/Types';
import Cards from 'components/Cards';
import LargeCard from 'components/LargeCard';
import Footer from 'components/Footer';

const Page = async () => {
  const data = await DataFetching();
  const CardsData = await CardsApi();
  return (
    <div>
      {/* FIRST DIV */}
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        {/* SMALL CARDS DIV */}
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map(({ img, location, distance }: Post) => (
              <SmallCards
                key={location}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>
        {/* SLIDE PICS DIV */}
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex  space-x-3 overflow-x-scroll p-5 scrollbar-hide">
            {CardsData.map(({ title, img }: CardsType) => (
              <Cards key={title} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* LARGE SINGLE CARD DIV */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};
export default Page;

// ======> DATA FETCHING FROM API'S
// ======> DATA FETCHING FROM API'S

export async function DataFetching() {
  const DataApi = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) =>
    res.json(),
  );

  return DataApi;
}
export async function CardsApi() {
  const cards = await fetch('https://jsonkeeper.com/b/VHHT')
    .then((res) => res.json())
    .catch((err) => [
      { img: 'https://links.papareact.com/2io', title: 'Outdoor getaways' },
      { img: 'https://links.papareact.com/q7j', title: 'Unique stays' },
      { img: 'https://links.papareact.com/s03', title: 'Entire homes' },
      { img: 'https://links.papareact.com/8ix', title: 'Pet allowed' },
    ]);
  return cards;
}
