import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateOutlet() {
  const {user} = useAuth();
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
}
