'use client'

import { ProtectedRoute } from './ProtectedRoute'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import type { UserRole } from '@/types'

interface DashboardLayoutProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export function DashboardLayout({ children, allowedRoles }: DashboardLayoutProps) {
  return (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <div className="min-h-screen bg-compas-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
