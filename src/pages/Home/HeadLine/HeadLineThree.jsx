import { Slide } from "react-awesome-reveal";

const HeadLineThree = () => {
  return (
    <div className="">
      <div className="sm:flex-row md:flex justify-center items-center">
        <div className="text-center">
          <Slide direction='left'>
            <p className="text-slate-400 text-center md:text-start">#Students review</p>
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">What Students say</h1>
          </Slide>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="text-center text-xs md:text-base">
          <Slide direction='right'>
            <p>Discover how to anticipate and adapt to the latest trends and digital</p>
          </Slide>
        </div>
      </div>
      <hr className="my-5 md:my-8" />
    </div >
  );
};

export default HeadLineThree; 