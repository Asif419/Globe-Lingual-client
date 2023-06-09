import useAllClasses from "../../../hooks/useAllClasses";
import InstructorClass from "./InstructorClass";

const InstructorClasses = () => {
  const [allClasses] = useAllClasses();
  console.log(allClasses);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr className="">
            <th>#</th>
            <th className="text-start">Class Name</th>
            <th>Class Image</th>
            <th>Price</th>
            <th>Max seat</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            allClasses.map((c, index) => <InstructorClass
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