import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const RequireAuth = () => {
  const {user} = UserAuth()
  const location = useLocation()
  console.log('auth.user',user)
  return (
    (user)
      ? <Outlet />
      : <Navigate to="/" state={{from: location}} replace />
  );
}

export default RequireAuth;
