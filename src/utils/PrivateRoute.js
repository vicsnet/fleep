import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  // const token = localStorage.getItem("token");
  const { token } = useSelector((state) => state.user);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
