import ProtectedAdminRoute from '../../components/admin/ProtectedAdminRoute'
import AdminLayout from '../../components/admin/AdminLayout'

export const metadata = {
  title: 'Admin Dashboard | PatentLex',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminDashboardPage() {
  return (
    <ProtectedAdminRoute>
      <AdminLayout />
    </ProtectedAdminRoute>
  )
}
