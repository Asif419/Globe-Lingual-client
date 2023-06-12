import useInstructors from "../../../hooks/useInstructors";
import Caption from "../../Shared/Caption";
import Loading from "../../Shared/Loading/Loading";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors, isInstructorsLoading] = useInstructors();

  if (isInstructorsLoading) {
    return <Loading></Loading>
  }

  return (
    <>
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