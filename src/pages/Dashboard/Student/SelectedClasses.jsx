import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useUserClasses from "../../../hooks/useUserClasses";
import Loading from "../../Shared/Loading/Loading";
import SelectedClass from "./SelectedClass";

const SelectedClasses = () => {
  const [userClasses, refetch, isUserClassesLoading] = useUserClasses();
  const [userFromDB] = useUser();
  const user_id = userFromDB?._id;
  const [axiosSecure] = useAxiosSecure();

  if (isUserClassesLoading) {
    return <Loading></Loading>
  }

  const handleDelete = async (class_id,) => {
    console.log(user_id, class_id);
    axiosSecure.delete(`/delete-class-from-array/${class_id}`, {
      class_id
    })
    refetch();
  }

  console.log(userClasses)

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
            <th>Instructor Name</th>
            <th>Max seat</th>
            <th>Enrolled Students</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            userClasses.map((c, index) => <SelectedClass
              key={index}
              c={c}
              index={index + 1}
              handleDelete={handleDelete}
            ></SelectedClass>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;