
const AdminInstructor = ({ index, user, handleChangeRole }) => {
  const { _id, user_name, user_email, role, user_photo_url } = user;
  return (
    <tr>
      <th>
        {index}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user_name}</div>
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
      <td className="flex flex-col gap-2 items-center justify-center text-center">
        <button onClick={() => handleChangeRole(_id, 'admin')} disabled={role === 'admin'} className="btn btn-xs">Make Admin</button>
        <button onClick={() => handleChangeRole(_id, 'instructor')} disabled={role === 'instructor'} className="btn btn-xs">Make Instructor</button>
      </td>
    </tr>
  );
};

export default AdminInstructor;