// import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";
import AdminInstructor from "./AdminInstructor";
import Loading from "../../Shared/Loading/Loading";
// import useAuth from "../../../hooks/useAuth";

const AdminInstructors = () => {
  // const { loading } = useAuth();
  const [allUsers, refetch, isAllUsersLoading] = useUsers();
  const [axiosSecure] = useAxiosSecure();

  if (isAllUsersLoading) {
    <Loading></Loading>
  }

  const handleChangeRole = (id, role, name) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Will ${name} get access of ${role}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes make ${role}`
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.patch(`/user?id=${id}`, {
          role
        })
          .then(response => {
            if (response.data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                'Done!',
                `You made ${name} ${role}`,
                'success'
              )
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            }
          })
      }
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