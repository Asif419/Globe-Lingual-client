import { Link } from "react-router-dom";

const HeadLineFour = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center">
        <div className="place-self-center md:place-self-start">
          <p className="text-slate-400 text-center md:text-start">#Trainers</p>
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">Popular Instructors</h1>
        </div>
        <div className="text-center text-xs md:text-base">
          <p>Discover how to anticipate and adapt to the latest trends and digital</p>
        </div>
        <div className="place-self-center md:place-self-end">
          <Link to="/instructors">
            <button className="btn btn-primary rounded-3xl">Instructors</button>
          </Link>
        </div>
      </div>
      <hr className="my-5 md:my-8" />
    </div>
  );
};

export default HeadLineFour; 