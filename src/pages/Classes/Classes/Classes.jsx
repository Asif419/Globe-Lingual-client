import { Helmet } from "react-helmet-async";
import useAllClasses from "../../../hooks/useAllClasses";
import Caption from "../../Shared/Caption";
import Loading from "../../Shared/Loading/Loading";
import Class from "./Class";
import { useEffect } from "react";

const Classes = () => {
  const [allClasses, , isAllClassesLoading] = useAllClasses();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (isAllClassesLoading) {
    return <Loading></Loading>
  }

  return (
    <>
      <Helmet>
        <title>GlobeLingual | Classes</title>
      </Helmet>

      <Caption heading='All Classes'></Caption>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5 md:my-10 lg:my-20">
        {
          allClasses.map(c => <Class
            key={c._id}
            c={c}
          ></Class>)
        }
      </div>
    </>
  );
};

export default Classes;