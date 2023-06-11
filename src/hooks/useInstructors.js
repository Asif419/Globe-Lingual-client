import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useInstructors = () => {
  const [baseAxios] = useAxios();

  const { data: instructors = [], isLoading: isInstructorsLoading } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await baseAxios.get('/instructors');
      return res.data;
    }
  })

  return [instructors, isInstructorsLoading];
};

export default useInstructors;