import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorAnimation from '../../../assets/animation/error.json';

const Error = () => {
  const { error, status } = useRouteError();

  return (
    <section className='min-h-screen flex items-center bg-gray-100 text-gray-900 px-2 md:px-0'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
        <div>
          <Lottie
            className='h-[45vh] md:h-[55vh] w-[45vh] md:w-[55vh]'
            animationData={errorAnimation}
            loop={true}
          />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-3 font-extrabold text-8xl text-blue-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-lg text-blue-500 font-semibold md:text-3xl text-blue mb-3'>
            {error?.message}
          </p>
          <Link to='/' className='btn-gl mb-5'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;