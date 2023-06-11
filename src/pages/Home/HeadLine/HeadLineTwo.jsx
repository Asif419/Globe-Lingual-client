import { Link } from "react-router-dom";

const HeadLineTwo = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center">
        <div className="place-self-center md:place-self-start">
          <p className="text-slate-400 text-center md:text-start">#Students loved</p>
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">Popular Courses</h1>
        </div>
        <div className="text-center text-xs md:text-base">
          <p>Online learning offers a new way to explore <br /> subjects you’re passionate about.</p>
        </div>
        <div className="place-self-center md:place-self-end">
          <Link to="/classes">
            <button className="btn btn-primary rounded-3xl">+ALL COURSES</button>
          </Link>
        </div>
      </div>
      <hr className="mt-3 md:mt-5" />
    </div>
  );
};

export default HeadLineTwo; 