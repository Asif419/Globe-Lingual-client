import Swal from "sweetalert2";
import useAdminClasses from "../../../hooks/useAdminClasses";
import AdminClass from "./AdminClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminClasses = () => {
  const [adminClasses, refetch] = useAdminClasses();
  const [axiosSecure] = useAxiosSecure();

  const handleChangeStatus = (id, status, clName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes change ${clName} class status`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          input: 'textarea',
          inputLabel: 'Review',
          confirmButtonText: `${status === 'approved' ? 'Approve' : 'Reject'}`,
          inputPlaceholder: 'Type your class review here...',
          inputAttributes: {
            'aria-label': 'Type your Message here'
          },
          showCancelButton: true
        }).then((result) => {
          console.log(result);
          if (result.isConfirmed) {
            const review = result.value;
            axiosSecure.patch(`/class?id=${id}`, {
              status, review
            }).then(response => {
              if (response.data.modifiedCount > 0) {
                refetch();
                Swal.fire(
                  'Done!',
                  `Class ${clName} updated`,
                  'success'
                )
              }
              else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                })
              }
            })
          }
        });
      }
    });

  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="text-center">
          <tr className="">
            <th>#</th>
            <th className="text-start">Class Name</th>
            <th>Class Image</th>
            <th>Price $</th>
            <th>Max seat</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            adminClasses.map((c, index) => <AdminClass
              key={c._id}
              c={c}
              index={index + 1}
              handleChangeStatus={handleChangeStatus}
            ></AdminClass>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AdminClasses;