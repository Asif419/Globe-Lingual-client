import { Slide } from "react-awesome-reveal";

const Caption = ({ heading }) => {
  return (
    <Slide duration='1500' direction='down'>
      <div className="card mt-5 w-11/12 mx-auto bg-base-100 border border-base-300 shadow-md">
        <div className="p-5 text-center">
          <p className="font-extrabold">{heading}</p>
        </div>
      </div>
    </Slide>

  );
};

export default Caption;