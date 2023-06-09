import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ['users'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor-classes/${user?.email}`);
      return res.data;
    }
  })
  return [allClasses, refetch];
};

export default useAllClasses;