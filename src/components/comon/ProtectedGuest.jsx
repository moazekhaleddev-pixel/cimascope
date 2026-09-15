import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Loader from "./Loader"; 
export default function ProtectedGuest({ children }) {
  const { isLoading, isAuthenticated } = useAuth(); 

  if (isLoading) return <Loader />;

  if (isAuthenticated) return <Navigate to="/cimascope" replace />;

  return children;
}
