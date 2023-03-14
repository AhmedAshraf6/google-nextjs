import Link from 'next/link';
import React from 'react';
import { TbGridDots } from 'react-icons/tb';
export default function HomeHeader() {
  return (
    <header className='w-full py-4 px-3 '>
      <div className='flex justify-end gap-x-5 items-center'>
        <Link
          href='https://www.google.com/gmail/about/'
          className='hover:underline cursor-pointer'
        >
          Gmail
        </Link>
        <Link
          href='https://images.google.com/'
          className='hover:underline cursor-pointer'
        >
          Images
        </Link>
        <div className='hover:bg-gray-400 rounded-full transition-colors duration-200 p-1'>
          <TbGridDots className=' text-2xl  ' />
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow duration-200'>
          Sign In
        </button>
      </div>
    </header>
  );
}
