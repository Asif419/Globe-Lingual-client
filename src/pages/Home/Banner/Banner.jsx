import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Lottie from "lottie-react";
import animation from '../../../assets/animation/education.json'


const Banner = () => {
  const { darkTheme } = useAuth();
  console.log(darkTheme);

  return (
    <div className={`text-center py-10 md:py-16 lg:py-20 tracking-wider rounded-3xl`}>
      <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold">We Take Languages to New Height</h1>
      <p className="py-5 text-xs md:text-base lg:text-xl">We believe everyone has the capacity to be creative. <br /> Globe Lingual is a place where people develop their own potential.</p>
      <div className="flex gap-5 justify-center">
        <Link to="/classes">
          <button className="btn btn-primary rounded-3xl">+ALL COURSES</button>
        </Link>
        <Link to="/instructors">
          <button className="btn btn-primary btn-outline rounded-3xl">ALL TUTORS</button>
        </Link>
      </div>
      <div className="flex justify-center items-center py-0 md:py-10">
        <Lottie
          animationData={animation}
          className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]"
          // TODO: make true instead false
          loop={false}
        ></Lottie>
      </div>
    </div>
  );
};

export default Banner;