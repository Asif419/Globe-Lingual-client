import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import SinglePayment from "./SinglePayment";
import Caption from "../../Shared/Caption";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PaymentHistory = () => {
  const { loading } = useAuth();
  const [userFromDB] = useUser();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['enrolledClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${userFromDB._id}`);
      return res.data;
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Payments</title>
      </Helmet>
      <div className="w-screen md:w-full">
        <Caption heading='Payment History'></Caption>
        <div className="overflow-x-auto w-full mt-5">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr className="">
                <th>#</th>
                <th className="text-start">Class Name</th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Price $</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                payments.map((payment, index) => <SinglePayment
                  key={payment._id}
                  payment={payment}
                  index={index + 1}
                ></SinglePayment>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;