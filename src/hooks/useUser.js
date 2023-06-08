import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const { user, loading } = useAuth();
  const [baseAxios] = useAxios();

  const { data: userFromDB } = useQuery({
    queryKey: ['users', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await baseAxios.get(`/users/${user?.email}`);
      return res.data;
    }
  })
  return [userFromDB]
};

export default useUser;