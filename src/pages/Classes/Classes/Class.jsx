import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Class = ({ c }) => {
  const { instructor_name, class_name, class_photo_url, class_price, total_seats, enrolled_students, class_status, class_details } = c;
  const new_class_id = c?._id;
  const { user } = useAuth();
  const [userFromDB] = useUser();
  const { role, _id: userId } = userFromDB || {};
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not Logged in',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
        confirmButtonColor: '#3085d6',
      }).then(response => {
        if (response.isConfirmed) {
          navigate('/login', { state: { from: location.state } }, { replace: true });
        }
      })
    }
    else {
      console.log(userId, new_class_id)
      axiosSecure.post('/selected-class', {
        userId,
        new_class_id
      });
    }
  }


  return (
    <div className={`card card-side shadow-xl ${total_seats <= enrolled_students ? 'bg-red-100' : 'bg-base-100'}`}>

      <figure style={{ maxWidth: '25%' }}><img src={class_photo_url} alt={class_name} style={{ height: '100%', objectFit: 'cover' }} /></figure>

      <div className="card-body">
        <div className="card-title flex items-center justify-between">
          <h2>{class_name}</h2>
          <h2>${class_price}</h2>
        </div>
        <p>{instructor_name}</p>
        <p>Available seats <span className="text-xl font-extrabold">{total_seats - enrolled_students}</span> <br /> among <span className="font-extrabold">{total_seats}</span></p>
        <div className="card-actions justify-end">
          <button disabled={role === 'admin' || role === 'instructor' || total_seats <= enrolled_students} onClick={handleSelect} className="btn btn-sm btn-primary">Select</button>
        </div>
      </div>
    </div >
  );
};

export default Class;