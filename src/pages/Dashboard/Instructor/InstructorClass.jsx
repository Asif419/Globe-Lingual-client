
const InstructorClass = ({ c, index }) => {
  const { class_name, class_photo_url, class_price, total_seats, enrolled_students, class_status, class_details, admin_review } = c;
  return (
    <tr>
      <th>
        {index}
      </th>
      {/* <td>
        {class_name}
        <br />
        <span className="badge badge-ghost badge-sm">{class_status === 'pending' ? 'Pending' : class_status === 'approved' ? 'Approved' : 'Denied'}</span>
      </td> */}
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
            <div className="font-bold">{class_status}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 justify-center">
          <div>
            <button className="btn btn-xs">Admin Review</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default InstructorClass;