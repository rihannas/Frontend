import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a
            href='/'
            className='flex'
          >
            <img
              src={headerLogo}
              alt='logo'
              width={22}
            />
            <h2 className='px-2 text-purple-300'>SheoCo</h2>
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            <img
              src={hamburger}
              alt='Hamburger'
              width={24}
              height={24}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
