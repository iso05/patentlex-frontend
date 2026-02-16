import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminLayout from "../pages/admin/AdminLayout";
import ProtectedAdminRoute from "../pages/admin/ProtectedAdminRoute";


export default function Router() {
  return (
    <Routes>
      {/* MAIN SITE */}
      <Route path="/*" element={<App />} />

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ADMIN DASHBOARD (PROTECTED) */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h1 style={{color:"white",textAlign:"center",marginTop:"50px"}}>404 | Page Not Found</h1>} />
    </Routes>
  );
}
