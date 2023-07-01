const Footer = () => {
  return (
    <footer className='bg-red-100  '>
      <div className='p-2   flex flex-wrap '>
        <p className='bg-red-500 md:w-1/2 w-full text-center'>
          Designed and Developed by{" "}
          <a
            className='underline '
            href='https://sneh-al.github.io/'
            target='_blank'
            rel='noopener noreferrer'>
            Sneh-al
          </a>
        </p>
        <p className='bg-red-400 md:w-1/2 w-full text-center '>
          Powered by{" "}
          <a
            className='underline'
            href='https://thecatapi.com/'
            target='_blank'
            rel='noopener noreferrer'>
            TheCatAPI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
