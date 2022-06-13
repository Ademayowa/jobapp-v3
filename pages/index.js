import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JobDetails from '@/components/JobDetails';
import Jobs from '@/components/Jobs';
import Search from '@/components/Search';
import { job, jobs } from '../data';

export default function Home({ services }) {
  console.log(services);

  return (
    <div className='bg-[#F9FBFD] h-fit'>
      <Header />
      <Hero />
      <Search />
      <Jobs services={services} />
      <JobDetails />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = jobs;

  return {
    props: { services },
  };
};
