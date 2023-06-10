import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const SelectedClass = ({ c, index }) => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  console.log(c);

  const { data: selectedClasses = [], refetch, isLoading: isselectedClassesLoading } = useQuery({
    queryKey: ['selectedClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected-class-from-array/${c}`);
      return res.data;
    }
  })

  console.log(selectedClasses);

  return (
    <tr></tr>
  );
};

export default SelectedClass;