import useAllClasses from "../../../hooks/useAllClasses";
import Class from "./Class";

const Classes = () => {
  const [allClasses] = useAllClasses();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {
        allClasses.map(c => <Class
        key={c._id}
        c={c}
        ></Class>)
      }
    </div>
  );
};

export default Classes;