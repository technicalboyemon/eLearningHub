import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateOutlet() {
  const { user } = useAuth();
  const location = useLocation();
  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
