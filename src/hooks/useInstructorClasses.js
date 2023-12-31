import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: instructorClasses = [], refetch, isLoading: isInstructorClassesLoading } = useQuery({
    queryKey: ['instructorClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor-classes/${user?.email}`);
      return res.data;
    }
  })
  return [instructorClasses, refetch, isInstructorClassesLoading];
};

export default useInstructorClasses;