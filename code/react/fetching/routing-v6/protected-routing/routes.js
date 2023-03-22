import React from "react";
import { Navigate, Route, Routes, useNavigate, useParams, Outlet as RouterOutlet } from "react-router-dom";
import AuthGuard from "./AuthGuard";

/* Todo: 1  index.js
import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
    <App />
 </BrowserRouter>
*/

/* Todo: 2  App.jsx */
export default function App() {
   const navigate = useNavigate();
    return (
        <>
           <button onClick={()=>navigate('/admin/users',{ replace : true })}>
            all users
           </button>
           <PageRoutes />
        </>
     );
 }

 /* Todo: 3  routes.js */
function PageRoutes() {
   return (
      <Routes>
         {/* home */}
         <Route path="/" element={<p>Home</p>} caseSensitive />

         {/* auth protected users Route */}
         <Route element={<AuthGuard allowedRoles={["user", "admin"]} />}>
            <Route path="cart" element={<p>cart</p>} caseSensitive />
         </Route>

         {/* admin level protected users child Route */}
         <Route element={<AuthGuard allowedRoles={["admin"]} />}>
            <Route
               path="admin"
               element={
                  <div>
                     <p>admin root component</p>
                     <RouterOutlet />
                  </div>
               }
               caseSensitive>
               <Route index element={<Navigate to="profile" replace />} caseSensitive />
               <Route path="users" element={<p>users</p>} />
               {/* route parameter */}
               <Route path="users/:id" element={<Component />} />
            </Route>
         </Route>

         {/* 404 */}
         <Route path="*" element={<p>404</p>} caseSensitive />
      </Routes>
   );
}
/* Todo: 4  component */
export default function Component() {
   const { id } = useParams();

   useEffect(() => {
      if (id) {
         console.log(id);
      }
      return () => {};
   }, [id]);

   return <div>user id : {id}</div>;
}
