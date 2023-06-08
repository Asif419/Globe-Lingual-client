import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: userFromDB, isLoading: isUserFromDBLoading } = useQuery({
    queryKey: ['user', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    }
  })
  return [userFromDB, isUserFromDBLoading];
};

export default useUser;