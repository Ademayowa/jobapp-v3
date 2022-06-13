import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import Search from '@/components/Search';
import { jobs } from '../data';

export default function Home({ job }) {
  return (
    <div className='bg-[#F9FBFD] h-fit'>
      <Header />
      <Hero />
      <Search />
      <Jobs job={job} />
    </div>
  );
}

export const getStaticProps = async () => {
  const job = jobs;

  return {
    props: { job },
  };
};
