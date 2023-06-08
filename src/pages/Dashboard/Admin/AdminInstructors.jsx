import useUsers from "../../../hooks/useUsers";
import AdminInstructor from "./AdminInstructor";

const AdminInstructors = () => {
  const [allUsers] = useUsers();
  console.log(allUsers);

  return (
    <div>
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
              ></AdminInstructor>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInstructors;