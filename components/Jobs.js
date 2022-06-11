import { LocationMarkerIcon } from '@heroicons/react/outline';
import { jobs } from '../data';

export default function Jobs() {
  return (
    <div className='grid grid-cols-8 gap-x-7 px-10 md:px-12 mx-10 mt-20'>
      {jobs.map((job) => (
        <div
          key={job.id}
          className='col-span-10 lg:col-span-4 mx-auto rounded-lg shadow-md my-5 bg-white p-7'
        >
          <div className='flex items-center text-blueColor font-bold'>
            <h2 className='flex flex-1 text-blueColor text-2xl font-bold'>
              {job.role}
            </h2>
            <p>{job.salary}</p>
          </div>

          <div className='flex items-center mt-2.5'>
            <LocationMarkerIcon className='h-5 w-5 text-sky-500' />
            <p className='text-[#3E3E40] text-lg'>{job.location}</p>
          </div>
          <p className='text-[#3E3E40] text-sm mt-2.5 w-3/4'>
            {job.description}
          </p>

          <div className='flex justify-end mt-2.5'>
            <button className='rounded-lg bg-red-500 px-4 py-2 text-white font-light'>
              View job
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
