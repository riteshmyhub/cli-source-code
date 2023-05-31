import { Navigate, Route, Routes, Outlet as RouterOutlet, useParams } from "react-router-dom";

export default function PageRoutes(): JSX.Element {
   return (
      <Routes>
         {/* home */}
         <Route path="/" element={<p>Home</p>} caseSensitive />

         {/* dashboard */}
         <Route path="dashboard" element={<RouterOutlet />} caseSensitive>
            <Route index element={<Navigate to="users" replace />} caseSensitive />
            <Route path="users" element={<p>users</p>} caseSensitive />
            <Route path="users/:id" element={<UsersInfo />} caseSensitive />
         </Route>

         {/* admin */}
         <Route path="admin" element={<p>admin</p>} caseSensitive />

         {/* 404 */}
         <Route path="*" element={<p>404</p>} caseSensitive />
      </Routes>
   );
}

function UsersInfo() {
   const { id } = useParams();
   return <p>User {id}</p>;
}
