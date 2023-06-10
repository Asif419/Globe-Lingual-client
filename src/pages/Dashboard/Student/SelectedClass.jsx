import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const SelectedClass = ({ c, index, handleDelete }) => {
  console.log(c);
  const { selected_classes_id } = c;
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [] } = useQuery({
    queryKey: ['selectedClass', selected_classes_id],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected-class-user/${selected_classes_id}`);
      return res.data;
    }
  })

  console.log(selectedClass);

  const { class_name, instructor_name, class_photo_url, class_price, total_seats, enrolled_students } = selectedClass;

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
            <div className="font-bold">{instructor_name}</div>
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
      <td className="flex flex-col gap-2 items-center justify-center text-center">
        <button onClick={() => handleDelete(c?._id)} className="btn btn-xs bg-red-200">Delete</button>
        <button className="btn btn-xs bg-green-200">Enroll</button>
      </td>
    </tr>
  );
};

export default SelectedClass;