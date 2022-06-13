import { LocationMarkerIcon } from '@heroicons/react/outline';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { job } from '../data';

export default function JobDetails() {
  return (
    <div className='mb-10'>
      {job.map((jb) => (
        <div key={jb.id}>
          <div className='px-10 mx-10 md:px-12 py-5 shadow-lg bg-white'>
            <div className='my-5'>
              <h2 className='text-blueColor font-bold text-2xl mt-2'>
                {jb.role}
              </h2>
              <div className='flex items-center mt-2 space-x-1'>
                <LocationMarkerIcon className='w-5 h-5 text-blue-500' />
                <p className='text-[#3E3E40]'>{jb.location}</p>
              </div>
              <button className='mt-2 rounded-md bg-blueColor px-5 py-2.5 text-white font-bold'>
                Apply for this job
              </button>
            </div>
          </div>
          <hr className='border-b border-red-400 mx-10' />

          <div className='px-10 mx-10 md:px-12 py-5 shadow-lg bg-white text-[#3E3E40]'>
            <div className='md:w-8/12 mt-5 text-sm md:text-base !leading-9'>
              <p>{jb.text}</p>
              {jb.qualification.map((qualification, index) => (
                <ul key={index} className='flex items-center space-x-2'>
                  <BsChevronDoubleRight className='text-black' />
                  <li>{qualification}</li>
                </ul>
              ))}

              <>
                <h4 className='my-5 font-bold'>{jb.title}</h4>
                {jb.requirements.map((requirement, index) => (
                  <ul key={index} className='flex items-center space-x-2'>
                    <BsChevronDoubleRight className='text-black' />
                    <li>{requirement}</li>
                  </ul>
                ))}
              </>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
