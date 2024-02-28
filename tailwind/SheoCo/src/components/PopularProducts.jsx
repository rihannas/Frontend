import { products } from '../constants';
import PopularProductCard from './PopularProductCard';

const PopularProducts = () => {
  return (
    <section
      id='products'
      className='max-container max-sm:mt-12'
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Discover <span className='text-purple-600'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Top-notch quality and style with our sought-after selections. Discover
          a world of comfort, design and value{' '}
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
        {products.map((product) => {
          return (
            <PopularProductCard
              key={product.name}
              {...product}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
