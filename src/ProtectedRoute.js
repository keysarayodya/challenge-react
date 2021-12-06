import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  let location = useLocation();

  if (!isAuth) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};

export default ProtectedRoute;
