const Modal = ({ children }) => {
  return (
    <div className='absolute top-0 left-0 bg-red-200 w-full h-screen grid place-content-center '>
      <div className='bg-green-100'>{children}</div>
    </div>
  );
};

export default Modal;
