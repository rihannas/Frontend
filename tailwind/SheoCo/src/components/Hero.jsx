import Button from './Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants/index';
import { bigShoe1 } from '../assets/images';
import ShoeCard from './ShoeCard';
import { useState } from 'react';
const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 mr-20'>
        <p className='text-xl font-montserrat text-purple-800'>
          Our Spring Collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='md:bg-white md:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-purple-800 inline-block mt-3'>Sheoco</span>{' '}
          Sheos
        </h1>
        <p className='font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14'>
          Discover our stylish collection, where comfort meets stylish and
          colorful shoes
        </p>
        <Button
          label='Shop Now'
          iconURL={arrowRight}
        />

        <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {stat.value}
                </p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center md:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImage}
          alt=''
          width={610}
          height={500}
          className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imageURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
