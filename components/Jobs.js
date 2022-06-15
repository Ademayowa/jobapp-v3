import { LocationMarkerIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { jobs } from '../data';

export default function Jobs({ job }) {
  const router = useRouter();

  return (
    <div className='grid grid-cols-8 gap-x-7 px-10 md:px-12 md:mx-10 mt-20'>
      {job.map((job) => (
        <div
          onClick={() => router.push(`/job/${job.slug}`)}
          key={job.id}
          className='col-span-10 lg:col-span-4 mx-auto rounded-lg shadow-md my-5 bg-white p-7 cursor-pointer'
        >
          <div className='flex items-center text-blueColor font-bold'>
            <h2 className='flex flex-1 text-blueColor text-lg md:text-2xl font-bold'>
              {job.role}
            </h2>
            <p>{job.salary}</p>
          </div>

          <div className='flex items-center space-x-1 mt-2.5'>
            <LocationMarkerIcon className='h-5 w-5 text-sky-500 -ml-1' />
            <p className='text-grayColor text-base md:text-lg'>
              {job.location}
            </p>
          </div>
          <p className='text-grayColor text-base mt-2.5 !w-full md:w-3/4 leading-8'>
            {job.description}
          </p>

          <div className='flex mt-2.5'>
            <button className='rounded bg-red-500 px-5 py-2 text-white font-light'>
              View job
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
