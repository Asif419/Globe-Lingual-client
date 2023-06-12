import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";
import EnrolledClass from "./EnrolledClass";
import Caption from "../../Shared/Caption";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const EnrolledClasses = () => {
  const { loading } = useAuth();
  const [userFromDB] = useUser();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ['enrolledClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled-classes/${userFromDB._id}`);
      return res.data;
    }
  })

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Enrolled</title>
      </Helmet>
      <div className="w-screen md:w-full">
        <Caption heading='Enrolled Classes'></Caption>
        <div className="overflow-x-auto w-full mt-5">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr className="">
                <th>#</th>
                <th className="text-start">Class Name</th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Enrolled Students</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                enrolledClasses.map((c, index) => <EnrolledClass
                  key={c._id}
                  c={c}
                  index={index + 1}
                // handleChangeRole={handleChangeRole}
                ></EnrolledClass>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EnrolledClasses;