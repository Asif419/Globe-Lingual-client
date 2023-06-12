import { useEffect } from "react";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import Caption from "../../Shared/Caption";
import Loading from "../../Shared/Loading/Loading";
import InstructorClass from "./InstructorClass";
import { Helmet } from "react-helmet-async";

const InstructorClasses = () => {
  const [instructorClasses, , isInstructorClassesLoading] = useInstructorClasses();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isInstructorClassesLoading) {
    return <Loading></Loading>
  }

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Classes</title>
      </Helmet>

      <div className="w-screen md:w-full">
        <Caption heading='My Class List'></Caption>
        <div className="overflow-x-auto w-full mt-5">
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
      </div>
    </>
  );
};

export default InstructorClasses;