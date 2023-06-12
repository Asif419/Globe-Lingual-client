import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserClasses from "../../../hooks/useUserClasses";
import Loading from "../../Shared/Loading/Loading";
import SelectedClass from "./SelectedClass";
import Caption from "../../Shared/Caption";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SelectedClasses = () => {
  const [userClasses, refetch, isUserClassesLoading] = useUserClasses();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isUserClassesLoading) {
    return <Loading></Loading>
  }

  const handleDelete = async (class_id, class_name) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete ${class_name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-class-from-array/${class_id}`, {
          class_id
        }).then(response => {
          if (response.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              'Deleted!',
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
    })

  }

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Selections</title>
      </Helmet>

      <div className="w-screen md:w-full">
        <Caption heading='My Selected Classes'></Caption>
        <div className="overflow-x-auto w-full mt-5">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr className="">
                <th>#</th>
                <th className="text-start">Class Name</th>
                <th>Class Image</th>
                <th>Price $</th>
                <th>Instructor Name</th>
                <th>Max seat</th>
                <th>Enrolled Students</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                userClasses.map((c, index) => <SelectedClass
                  key={index}
                  c={c}
                  index={index + 1}
                  handleDelete={handleDelete}
                ></SelectedClass>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SelectedClasses;