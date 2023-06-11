import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import PopularClass from "./PopularClass";


const PopularClasses = () => {
  const [baseAxios] = useAxios();

  const { data: popularClasses = [] } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: async () => {
      const res = await baseAxios.get('/popular-classes');
      return res.data;
    }
  })

  return (
    <div className="pt-3 md:pt-5 lg:pt-10 pb-10 md:pb-20 lg:pb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      {
        popularClasses.map(c => <PopularClass
          key={c._id}
          c={c}
        ></PopularClass>)
      }
    </div>
  );
};

export default PopularClasses;