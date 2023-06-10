import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const Class = ({ c }) => {
  const { instructor_name, class_name, class_photo_url, class_price, total_seats, enrolled_students, class_status, class_details } = c;
  const { user } = useAuth();
  const [userFromDB] = useUser();
  const role = userFromDB?.role;

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not Logged in',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }


  return (
    <div className="card card-side bg-base-100 shadow-xl">

      <figure style={{ maxWidth: '25%' }}><img src={class_photo_url} alt={class_name} style={{ height: '100%', objectFit: 'cover' }} /></figure>

      <div className="card-body">
        <h2 className="card-title">{class_name}</h2>
        <p>{instructor_name}</p>
        <div className="card-actions justify-end">
          <button  disabled={role === 'admin' || role === 'instructor'} onClick={handleSelect} className="btn btn-primary">Select</button>
        </div>
      </div>
    </div >
  );
};

export default Class;