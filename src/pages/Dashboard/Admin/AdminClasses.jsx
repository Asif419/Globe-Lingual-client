import Swal from "sweetalert2";
import useAdminClasses from "../../../hooks/useAdminClasses";
import AdminClass from "./AdminClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";
import Caption from "../../Shared/Caption";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AdminClasses = () => {
  const [adminClasses, refetch, isAdminClassesLoading] = useAdminClasses();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isAdminClassesLoading) {
    return <Loading></Loading>
  }

  const handleChangeStatus = (id, status, clName) => {
    //TODO: change class;
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
          inputPlaceholder: 'You can skip to write it if you want',
          inputAttributes: {
            'aria-label': 'Type your Message here'
          },
          showCancelButton: true
        }).then((result) => {
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

  const handleEditReview = (id, adminReview, clName) => {
    Swal.fire({
      input: 'textarea',
      inputLabel: 'Review',
      confirmButtonText: `Send review`,
      inputPlaceholder: 'Type your class review here...',
      inputAttributes: {
        'aria-label': 'Type your Message here'
      },
      showCancelButton: true,
      inputValue: `${adminReview}`
    }).then((result) => {
      if (result.isConfirmed) {
        const newReview = result.value;
        axiosSecure.patch(`/edit-review?id=${id}`, {
          newReview
        }).then(response => {
          if (response.data.modifiedCount > 0) {
            refetch();
            Swal.fire(
              'Done!',
              `${clName}'s review updated`,
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

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Classes</title>
      </Helmet>

      <div className="w-screen md:w-full">
        <Caption heading='Classes List'></Caption>
        <div className="overflow-x-auto w-full mt-5">
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
                <th>Send Review</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                adminClasses.map((c, index) => <AdminClass
                  key={c._id}
                  c={c}
                  index={index + 1}
                  handleChangeStatus={handleChangeStatus}
                  handleEditReview={handleEditReview}
                ></AdminClass>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminClasses;