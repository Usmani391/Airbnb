import Image from "next/image"
import Link from "next/link"
import { SearchIcon ,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon } from '@heroicons/react/solid'

const Header = () => {
  const session=true;
  if (session) {
  }
  return (
    <header className="sticky top-0 z-50 bg-white items-center grid grid-cols-3 py-5 px-5 shadow-sm md:px-10">
        <div className="">
          <Image src="/logo.png"
          className=""
          width={80}
          height={30}
          alt="jno" />
        </div>
      <div className="flex  md:border-2 rounded-full py-2 px-3 md:shadow-sm items-center justify-between   ">
        <input type="text" className="outline-none bg-transparent rounded text-sm text-gray-600 placeholder-gray-400 flex-grow mx-2 " placeholder="Start your Search" />
        <SearchIcon className="object-contain hidden md:inline-flex h-8 bg-red-400  text-white rounded-full cursor-pointer p-2" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline font-medium ">Become a host</p>
        <GlobeAltIcon className="h-8 cursor-pointer" />
        <div className="flex  items-center space-x-2 border-2 rounded-full flex-grow-0 p-2 shadow-lg">
        <MenuIcon className="h-6 cursor-pointer"/>

        <UserCircleIcon className="h-6"/> 
        </div>
        {/* <UserIcon className="h-8" ></UserIcon> */}
      </div>
    </header>
  )
} 

export default Header