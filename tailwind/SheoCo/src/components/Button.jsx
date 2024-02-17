const Button = ({ iconURL, label }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 leading-none border-purple-500 border-2 bg-purple-400 rounded-full text-white '>
      {label}
      <img
        src={iconURL}
        alt='right-icon'
        className='ml-2 rounded-full w-5 h-5'
      />
    </button>
  );
};
export default Button;
