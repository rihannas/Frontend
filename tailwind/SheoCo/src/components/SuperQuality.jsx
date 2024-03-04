import { shoe8 } from '../assets/images';
import Button from './Button';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className=''>
        <h2 className='font-palanquin text-4xl capitlize lg:max-w-lg font-bold'>
          <span className='md:bg-white md:whitespace-nowrap relative z-10 pr-10'>
            We Provide You
          </span>
          <br />
          <span className='text-purple-800 inline-block mt-3'>Super</span>{' '}
          Quality
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text'>
          The best perimum shoes made with comfort in mind without forgetting
          about the importance of self expression with style
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to details and excellence, and a touch of elegance will
          ensure your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='shoe'
          width={579}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
