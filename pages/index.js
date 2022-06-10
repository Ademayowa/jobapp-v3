import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import Search from '@/components/Search';

export default function Home() {
  return (
    <div className='bg-[#F9FBFD] h-fit'>
      <Header />
      <Hero />
      <Search />
      <Jobs />
    </div>
  );
}
