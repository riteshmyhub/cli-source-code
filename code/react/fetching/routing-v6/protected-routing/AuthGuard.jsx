import React, { useEffect } from "react";
import { useLocation, Outlet as RouterOutlet, Navigate } from "react-router-dom";

const api = {
   loading: false,
   isAuthenticate: true,
   user: {
      profile: { name: "testuser" },
      allowRoles: ["user", "admin"],
   },
};

export default function AuthGuard({ allowedRoles }) {
   const { location } = useLocation();
   const token = localStorage.getItem("token");
   const { loading, isAuthenticate, user } = api;

   useEffect(() => {
      return () => {};
   }, []);

   if (loading) {
      return <div>auth checking....</div>;
   } else {
      if (token && isAuthenticate && user) {
         const { allowRoles, profile } = user;
         if (allowRoles.find((role) => allowedRoles?.includes(role))) {
            if (profile?.name) {
               return <RouterOutlet />;
            } else {
               return "pleace create profile";
            }
         } else {
            return <p>page 404</p>;
         }
      } else {
         return <Navigate to="/auth" state={{ form: location }} replace />;
      }
   }
}
