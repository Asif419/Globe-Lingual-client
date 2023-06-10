import useUser from "../../../hooks/useUser";
import useUserClasses from "../../../hooks/useUserClasses";
import Loading from "../../Shared/Loading/Loading";
import SelectedClass from "./SelectedClass";

const SelectedClasses = () => {
  const [userClasses, , isUserClassesLoading] = useUserClasses();
  const classes = userClasses?.selected_classes_id || [];
  
  console.log(userClasses);

  if (isUserClassesLoading) {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            classes.map((c, index) => <SelectedClass
              key={c._id}
              c={c}
              index={index + 1}
            // handleChangeRole={handleChangeRole}
            ></SelectedClass>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;