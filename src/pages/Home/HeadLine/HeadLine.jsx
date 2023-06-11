import { Link } from "react-router-dom";

const HeadLine = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center">
        <div className="place-self-center md:place-self-start">
          <p className="text-slate-400 text-center md:text-start">#Our Services</p>
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">Learn languages</h1>
        </div>
        <div className="text-center text-xs md:text-base">
          <p>Online learning offers a new way to explore subjects <br /> you’re passionate about.</p>
        </div>
        <div className="place-self-center md:place-self-end">
          <Link to="/login">
            <button className="btn btn-primary rounded-3xl">Login</button>
          </Link>
        </div>
      </div>
      <hr className="mt-3 md:mt-5" />
    </div>
  );
};

export default HeadLine; 