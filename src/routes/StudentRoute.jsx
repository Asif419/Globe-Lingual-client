import { Dna } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const [userFromDB, isUserFromDBLoading] = useUser();
  const { user, loading } = useAuth();
  const role = userFromDB?.role;

  if (loading || isUserFromDBLoading) {
    return <>
      <div className="flex items-center justify-center">
        <Dna
          visible={true}
          height="100vh"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  }

  if (user && role === 'student') {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default StudentRoute;