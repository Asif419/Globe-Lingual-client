import useInstructors from "../../../hooks/useInstructors";
import Loading from "../../Shared/Loading/Loading";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors, isInstructorsLoading] = useInstructors();

  if (isInstructorsLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="shadow-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5 md:my-10 lg:my-20">
      {
        instructors.map(instructor => <Instructor
          key={instructor._id}
          instructor={instructor}
        ></Instructor>)
      }
    </div>
  );
};

export default Instructors;