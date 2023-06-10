import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllClasses = () => {
  const [baseAxios] = useAxios();

  const { data: allClasses = [], refetch, isLoading: isAllClassesLoading } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const res = await baseAxios.get('/classes');
      return res.data;
    }
  })
  return [allClasses, refetch, isAllClassesLoading];
};

export default useAllClasses;