import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { loading } = useAuth();
  const [userFromDB] = useUser();
  const [axiosSecure] = useAxiosSecure();
  console.log(userFromDB._id);

  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ['enrolledClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled-classes/${userFromDB._id}`);
      return res.data;
    }
  })

  console.log(2, enrolledClasses);

  return (
    <div>
      <h2>Enrolled Classes</h2>
    </div>
  );
};

export default EnrolledClasses;