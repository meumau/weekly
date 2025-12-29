import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  //If a user is not logged in, navigating to log in
  if (!user) return <Navigate to="/" replace />;

  return children;
}