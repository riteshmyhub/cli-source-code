import { Navigate, Route, Routes, Outlet as RouterOutlet, useParams } from "react-router-dom";
import AuthGuard from "./guards/AuthGuard";

export default function PageRoutes() {
   return (
      <Routes>
         <Route path="login" element={<p>login</p>} caseSensitive />
         {/* home */}
         <Route path="/" element={<p>Home</p>} caseSensitive />

         {/* dashboard: (user) and also (user) */}
         <Route element={<AuthGuard allowedRoles={["user", "admin"]} />}>
            <Route path="dashboard" element={<RouterOutlet />} caseSensitive>
               <Route index element={<Navigate to="users" replace />} caseSensitive />
               <Route path="users" element={<p>users</p>} caseSensitive />
               <Route path="users/:id" element={<UsersInfo />} caseSensitive />
            </Route>
         </Route>

         {/* only for (admin) */}
         <Route element={<AuthGuard allowedRoles={["admin"]} />}>
            <Route path="admin" element={<p>admin page</p>} caseSensitive />
         </Route>

         {/* 404 */}
         <Route path="*" element={<p>404</p>} caseSensitive />
      </Routes>
   );
}

function UsersInfo() {
   const { id } = useParams();
   return <p>User {id}</p>;
}
