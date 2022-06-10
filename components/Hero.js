export default function Hero() {
  return (
    <div className='pl-10 md:pl-12 bg-[#0F4A7B] pt-10 h-80'>
      <div className='relative'>
        <h1 className='text-3xl md:text-4xl text-white font-bold'>
          Find your dream job
        </h1>

        <div>
          <div className='absolute -top-10 right-0'>
            <img src={'/images/shape1.png'} alt='' />
          </div>

          <div className='absolute top-20 right-14'>
            <img src={'/images/shape2.png'} alt='' />
          </div>

          <div className='absolute top-40 right-24'>
            <img src={'/images/shape3.png'} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
