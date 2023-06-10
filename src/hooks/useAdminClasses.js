import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdminClasses = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: adminClasses = [], refetch, isLoading: isAdminClassesLoading } = useQuery({
    queryKey: ['adminClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get('/classes');
      return res.data;
    }
  })
  return [adminClasses, refetch, isAdminClassesLoading];
};

export default useAdminClasses;