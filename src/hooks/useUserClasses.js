import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";

const useUserClasses = () => {
  const { loading } = useAuth();
  const [userFromDB] = useUser();
  const id = userFromDB?._id;
  const [axiosSecure] = useAxiosSecure();

  const { data: userClasses = [], refetch, isLoading: isUserClassesLoading } = useQuery({
    queryKey: ['userClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-classes/${id}`);
      console.log(res);
      return res.data;
    }
  })
  return [userClasses, refetch, isUserClassesLoading];
};

export default useUserClasses;