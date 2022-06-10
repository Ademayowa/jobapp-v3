import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export default function Search() {
  return (
    <div className='bg-white -mt-10 shadow-lg rounded-lg mx-12 flex justify-between p-5'>
      <div className='flex items-center space-x-2'>
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input
          type='text'
          placeholder='Front end developer'
          className='bg-transparent outline-none'
        />
      </div>

      <div className='flex items-center space-x-2 border-l-4 border-blue-200'>
        <LocationMarkerIcon className='h-5 w-5 text-sky-500 ml-4' />
        <input
          type='text'
          placeholder='Lagos, Nigeria'
          className='bg-transparent outline-none'
        />
      </div>

      <div className='flex items-center'>
        <button className='rounded-lg bg-red-500 px-4 py-2 text-white font-light'>
          Search
        </button>
      </div>
    </div>
  );
}
