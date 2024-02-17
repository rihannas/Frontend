import { headerLogo } from '../assets/images';

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
          <ul className='flex-1 flex justify-center items-center gap-16 maxlg:hidden'></ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
