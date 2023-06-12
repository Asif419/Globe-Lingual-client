import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Instructor from "./Instructor";

const Instructors = () => {
  const [baseAxios] = useAxios();

  const { data: popularInstructors = [] } = useQuery({
    queryKey: ['popularInstructors'],
    queryFn: async () => {
      const res = await baseAxios.get('/popular-instructors');
      return res.data;
    }
  })


  return (
    <div className="pt-3 md:pt-5 lg:pt-10 pb-10 md:pb-20 lg:pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        popularInstructors.map(instructor => <Instructor
          key={instructor._id}
          instructor={instructor}
        ></Instructor>)
      }
    </div>
  );
};

export default Instructors;