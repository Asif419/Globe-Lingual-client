// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";
import AdminInstructor from "./AdminInstructor";
// import useAuth from "../../../hooks/useAuth";

const AdminInstructors = () => {
  // const { loading } = useAuth();
  const [allUsers, refetch] = useUsers();
  console.log(allUsers);
  const [axiosSecure] = useAxiosSecure();

  const handleChangeRole = (id, role) => {
    // const { data: updatedUser } = useQuery({
    //   queryKey: ['updatedUser'],
    //   enabled: !loading,
    //   queryFn: async () => {
    //     const res = await axiosSecure.patch(`/user?id=${id}&role=${role}`);
    //     return res.data;
    //   }
    // })
    console.log(role);
    axiosSecure.patch(`/user?id=${id}`, {
      role
    })
      .then(res => {
        refetch();
        console.log(res.data);
      })
    // console.log(updatedUser);
  }


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-center">
          <tr className="">
            <th>#</th>
            <th className="text-start">User</th>
            <th>Image</th>
            <th>Email and Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            allUsers.map((user, index) => <AdminInstructor
              key={user._id}
              index={index + 1}
              user={user}
              handleChangeRole={handleChangeRole}
            ></AdminInstructor>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AdminInstructors;