import { jobs } from '../../data';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { BsChevronDoubleRight, BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';

export default function SingleJob({ job }) {
  return (
    <div className='my-10 shadow-lg bg-white rounded-lg'>
      <div className='px-10 md:mx-10 md:px-12 py-5'>
        <div className='my-5'>
          <Link href='/'>
            <a>
              <BsArrowLeft className='w-5 h-5 my-5 cursor-pointer text-[#EF4444]' />
            </a>
          </Link>
          <h2 className='text-blueColor text-lg md:text-2xl font-bold mt-2'>
            {job.role}
          </h2>

          <div className='flex items-center mt-2 space-x-1'>
            <LocationMarkerIcon className='w-5 h-5 text-blue-500 -ml-1' />
            <p className='text-grayColor text-base md:text-lg'>
              {job.location}
            </p>
          </div>

          <div className='mt-5'>
            <a
              href={`${job.url}`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded bg-blueColor px-5 py-2.5 text-white font-bold'
            >
              Apply for this job
            </a>
          </div>
        </div>
      </div>
      <hr className='border-b border-red-400 mx-10' />

      <div className='px-10 md:mx-10 md:px-12 py-5 text-grayColor'>
        <div className='mt-5 text-sm md:text-base !leading-9'>
          <h4 className='my-4 font-bold'>{job.info}</h4>
          <p>{job.text}</p>
          {job.qualification.map((qualification, index) => (
            <ul key={index} className='flex items-center space-x-3'>
              <BsChevronDoubleRight className='text-black' />
              <li>{qualification}</li>
            </ul>
          ))}

          <>
            <h4 className='my-4 font-bold'>{job.title}</h4>
            {job.requirements.map((requirement, index) => (
              <ul key={index} className='flex items-center space-x-2'>
                <BsChevronDoubleRight className='text-black' />
                <li>{requirement}</li>
              </ul>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const job = jobs;
  const paths = job.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const job = jobs.filter((item) => item.slug === slug)[0];
  return {
    props: { job },
  };
};
