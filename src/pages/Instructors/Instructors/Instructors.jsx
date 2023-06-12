import { Helmet } from "react-helmet-async";
import useInstructors from "../../../hooks/useInstructors";
import Caption from "../../Shared/Caption";
import Loading from "../../Shared/Loading/Loading";
import Instructor from "./Instructor";
import { useEffect } from "react";

const Instructors = () => {
  const [instructors, isInstructorsLoading] = useInstructors();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isInstructorsLoading) {
    return <Loading></Loading>
  }


  return (
    <>
      <Helmet>
        <title>GlobeLingual | Home</title>
      </Helmet>

      <Caption heading='Instructors'></Caption>
      <div className="shadow-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-1 md:mt-2 lg:mt-3 mb-5 md:mb-10 lg:mb-20">
        {
          instructors.map(instructor => <Instructor
            key={instructor._id}
            instructor={instructor}
          ></Instructor>)
        }
      </div>
    </>
  );
};

export default Instructors;