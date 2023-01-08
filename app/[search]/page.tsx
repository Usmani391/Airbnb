import Footer from "components/Footer";
import Header from "components/Header";
// import { useRouter } from "next/router";

const search = () => {
  // const router=useRouter()
  // console.log(router.query)
  return (
<div>
  <Header/>
  <main className="flex">
    <section className="flex-grow px-6 pt-14">
      <p className="text-xs">300+ Stays for 5 number of guest</p>
      <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays on Mars</h1>
      <div className="mb-5 hidden space-x-3 whitespace-nowrap px-2 text-gray-800 md:inline-flex">
        <p className="button">Cancellation Flexibility</p>
        <p className="button">Type of place</p>
        <p className="button">Price</p>
        <p className="button">Rooms and Beds</p>
        <p className="button">More filters</p>
      </div>
<p className="py-10 px-10 text-4xl text-red-700 font-bold">we are working on this page .....</p>      
    </section>
  </main>
  <Footer/>
</div>
  );
};

export default search;
