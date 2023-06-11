import { Dna } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
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

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;