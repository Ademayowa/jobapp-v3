import { LocationMarkerIcon } from '@heroicons/react/outline';

export default function JobDetails() {
  return (
    <div className='mb-10'>
      <div className='px-10 mx-10 md:px-12 py-5 shadow-lg bg-white'>
        <div className='my-5'>
          <h2 className='text-blueColor font-bold text-2xl mt-2'>
            Frontend developer
          </h2>
          <div className='flex items-center mt-2 space-x-1'>
            <LocationMarkerIcon className='w-5 h-5 text-blue-500' />
            <p className='text-[#3E3E40]'>England UK</p>
          </div>
          <button className='mt-2 rounded-md bg-blueColor px-5 py-2.5 text-white font-bold'>
            Apply for this job
          </button>
        </div>
      </div>

      <div className=''>
        <hr className='border-b border-red-400 mx-10' />
      </div>

      <div className='px-10 mx-10 md:px-12 py-5 shadow-lg bg-white text-[#3E3E40]'>
        <div className='md:w-8/12 mt-5 text-sm md:text-base !leading-9'>
          <p>
            In this role, you will be responsible for developing and
            implementing user interface components using React.js concepts and
            workflow such as Redux, Flux, and Webpack. You will also be
            responsible for profiling and improving front-end performance and
            documenting our front-end codebase.
          </p>

          <ul>
            <li>Minimum Qualification: Degree</li>
            <li>Experience Level: Senior level</li>
            <li> Experience Length: 5 years</li>
          </ul>

          <div>
            <h4 className='my-5 font-bold'>Job Description/Requirements</h4>
            <ul>
              <li>
                5+ years experience of front-end related (HTML5 + JS + CSS3)
                development work experience, familiar with mobile application
                development;
              </li>
              <li>
                Proficient in JavaScript / Typescript, mastering technologies
                such as HTML, CSS, DOM, AJAX, etc., can quickly complete the
                established interactive design functions; At least 4 years
                experience is required.
              </li>
              <li>
                Thorough understanding of React.js and its core principles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
