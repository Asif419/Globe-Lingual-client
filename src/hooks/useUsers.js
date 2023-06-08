import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: allUsers = [], refetch, isLoading: isAllUsersLoading } = useQuery({
    queryKey: ['users'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  })
  return [allUsers, refetch, isAllUsersLoading];
};

export default useUsers;