'use client';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Link from 'next/link';
// import { useRouter } from 'next/';
import { Search } from './Types';
// import { useRouter } from 'next/';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  // const router = useRouter();
  // const search = () => {
    // router.push({
      // pathname: '/search',
      // query: {
        // location: searchInput,
        // startDate: startDate.toISOString(),
        // endDate: endDate.toISOString(),
        // noOfGuest: noOfGuest,
      // },
    // });
  // };
  const resetInput = () => {
    setSearchInput('');
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white py-5 px-5 shadow-sm md:px-10">
      <div className="">
        <Link href="/">
          <Image src="/logo.png" width={80} height={30} alt="jno" />
        </Link>
      </div>
      <div className="flex  items-center justify-between rounded-full py-2 px-3 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="mx-2 flex-grow rounded bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none "
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400  object-contain p-2 text-white md:inline-flex" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden font-medium md:inline ">Become a host</p>
        <GlobeAltIcon className="h-8 cursor-pointer" />
        <div className="flex  flex-grow-0 items-center space-x-2 rounded-full border-2 p-2 shadow-lg">
          <MenuIcon className="h-6 cursor-pointer" />

          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto mt-3 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-4 flex  items-center border-b">
            <h1 className="flex-grow  text-2xl font-semibold">
              Number of Guest
            </h1>
            <UserIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(+e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg text-[#FD5B61] outline-none"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-400" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-[#FD5B61]" >
              {/* <Link
                href={{
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuest,
                  },
                }}
              > */}
                Search
              {/* </Link> */}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
