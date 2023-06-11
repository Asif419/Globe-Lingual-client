import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";

const PaymentHistory = () => {
  const { loading } = useAuth();
  const [userFromDB] = useUser();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentList = [], refetch } = useQuery({
    queryKey: ['enrolledClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${userFromDB._id}`);
      return res.data;
    }
  })

  console.log(paymentList);

  return (
    <div>
      <h2>Payment History</h2>
    </div>
  );
};

export default PaymentHistory;