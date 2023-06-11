
const SinglePayment = ({ payment, index }) => {
  const { class_name, class_photo_url, class_price, instructor_name, transaction_id, date } = payment;

  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString();

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
            <img src={class_photo_url} alt={class_name} />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div>
            <div className="font-bold">{instructor_name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 justify-center">
          <div>
            <div className="font-bold">{class_price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 justify-center">
          <div>
            <div className="font-bold">{transaction_id}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3 justify-center">
          <div>
            <div className="font-bold">{formattedDate}</div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SinglePayment;