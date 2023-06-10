
const AdminClass = ({ c, index, handleChangeStatus, handleEditReview }) => {
  const { _id, class_name, class_photo_url, class_price, total_seats, enrolled_students, class_status, admin_review
  } = c;
  return (
    <tr>
      <th>
        {index}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{class_name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={class_photo_url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <div className="font-bold">{class_price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <div className="font-bold">{total_seats}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 justify-center">
          <div>
            <div className="font-bold">{enrolled_students}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <div className="font-bold">{class_status === 'pending' ? 'Pending' : class_status === 'approved' ? 'Approved' : 'Denied'}</div>
          </div>
        </div>
      </td>
      <td className="flex flex-col gap-2 items-center justify-center text-center">
        <button onClick={() => handleChangeStatus(_id, 'approved', class_name)} disabled={class_status === 'approved' || class_status === 'denied'} className="btn btn-xs bg-green-200">Approve</button>
        <button onClick={() => handleChangeStatus(_id, 'denied', class_name)} disabled={class_status === 'denied' || class_status === 'approved'} className="btn btn-xs bg-red-200">Reject</button>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <button onClick={() => handleEditReview(_id, admin_review, class_name)} className="btn btn-xs bg-blue-100">Write</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminClass;