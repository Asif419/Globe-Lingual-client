import { Link } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

const HeadLineTwo = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center">
        <div className="place-self-center md:place-self-start">
          <Slide direction='left'>
            <p className="text-slate-400 text-center md:text-start">#Students loved</p>
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">Popular Courses</h1>
          </Slide>
        </div>
        <Zoom>
          <div className="text-center text-xs md:text-base">
            <p>Online learning offers a new way to explore <br /> subjects you’re passionate about.</p>
          </div>
        </Zoom>
        <div className="place-self-center md:place-self-end">
          <Slide direction='right'>
            <Link to="/classes">
              <button className="btn btn-primary rounded-3xl">+ALL COURSES</button>
            </Link>
          </Slide>
        </div>
      </div>
      <hr className="mt-3 md:mt-5" />
    </div >
  );
};

export default HeadLineTwo; 