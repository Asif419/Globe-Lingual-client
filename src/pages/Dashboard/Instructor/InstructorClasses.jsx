import useInstructorClasses from "../../../hooks/useInstructorClasses";
import Loading from "../../Shared/Loading/Loading";
import InstructorClass from "./InstructorClass";

const InstructorClasses = () => {
  const [instructorClasses, , isInstructorClassesLoading] = useInstructorClasses();

  if (isInstructorClassesLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr className="">
            <th>#</th>
            <th className="text-start">Class Name</th>
            <th>Class Image</th>
            <th>Price $</th>
            <th>Max seat</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            instructorClasses.map((c, index) => <InstructorClass
              key={c._id}
              c={c}
              index={index + 1}
            // handleChangeRole={handleChangeRole}
            ></InstructorClass>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default InstructorClasses;