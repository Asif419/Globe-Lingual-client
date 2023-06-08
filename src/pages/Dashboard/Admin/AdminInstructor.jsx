
const AdminInstructor = ({ index, user }) => {
  const { user_name, user_email, role, user_photo_url } = user;
  console.log(user);
  return (
    <tr>
      <th>
        {index}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user_name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={user_photo_url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        {user_email}
        <br />
        <span className="badge badge-ghost badge-sm">{role === 'admin' ? 'Admin' : role === 'instructor' ? 'Instructor' : 'Student'}</span>
      </td>
      <td className="text-center">
        <button className="btn btn-ghost btn-xs">Make Admin</button>
        <button className="btn btn-ghost btn-xs">Make Instructor</button>
      </td>
    </tr>
  );
};

export default AdminInstructor;