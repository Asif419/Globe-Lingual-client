
const AdminInstructors = () => {
  return (
    <div>
      <div className="w-full">
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
            {/* row 1 */}
            <tr>
              <th>
                1
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">role</span>
              </td>
              <td className="text-center">
                <button className="btn btn-ghost btn-xs">Make Admin</button>
                <button className="btn btn-ghost btn-xs">Make Instructor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInstructors;