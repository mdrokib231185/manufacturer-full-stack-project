import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebaseinit";
import useAdmin from "../Hooks/useAdmin";
import Loading from "./Shared/Loading";

const RequireAdmin = ({ children }) => {
      const location = useLocation();
      
     

  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  
  if (loading || adminLoading) {
    return <Loading></Loading>;
      }
      
      if (admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
        
      }
  
  return children;
};

export default RequireAdmin;
