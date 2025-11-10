'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/stores/authStore'
import type { UserRole } from '@/types'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()

  useEffect(() => {
    // Si no está autenticado, redirigir a login
    if (!isAuthenticated || !user) {
      router.push('/auth/login')
      return
    }

    // Si hay roles permitidos y el usuario no tiene el rol correcto, redirigir
    if (allowedRoles && !allowedRoles.includes(user.rol)) {
      router.push(`/dashboard/${user.rol}`)
      return
    }
  }, [isAuthenticated, user, allowedRoles, router])

  // Si no está autenticado, mostrar loading
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-compas-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-compas-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  // Si el rol no es permitido, mostrar loading mientras redirige
  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-compas-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-compas-gray-600">Redirigiendo...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
