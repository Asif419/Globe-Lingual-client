import useInstructors from "../../../hooks/useInstructors";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors] = useInstructors();
  console.log(instructors);

  return (
    <div>
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