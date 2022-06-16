import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import Search from '@/components/Search';
import SectionTitle from '@/components/SectionTitle';
import { API_URL } from '@/config/index';

export default function Home({ jobs }) {
  console.log(jobs);
  return (
    <div className='bg-[#F9FBFD]  h-fit'>
      <Header />
      <Hero />
      <Search />
      <SectionTitle title='Latest Jobs' />
      <Jobs jobs={jobs} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs`);
  const jobs = await res.json();

  return {
    props: { jobs: jobs.data },
  };
}
