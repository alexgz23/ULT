'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Compass,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react'
import { useAuthStore } from '@/lib/stores/authStore'
import { Badge } from '@/components/ui'

export function Navbar() {
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <nav className="bg-white border-b border-compas-gray-200 sticky top-0 z-50">
      <div className="container-compas">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Compass className="w-8 h-8 text-compas-blue" />
            <span className="text-2xl font-bold font-display text-compas-blue">COMPAS</span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notificaciones */}
            <button className="relative p-2 hover:bg-compas-gray-50 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-compas-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-tino-orange rounded-full"></span>
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 hover:bg-compas-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-compas-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-compas-blue" />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium text-compas-gray-900">
                    {user?.nombre} {user?.apellido}
                  </p>
                  <p className="text-xs text-compas-gray-500 capitalize">{user?.rol}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-compas-gray-600" />
              </button>

              {/* Dropdown menu */}
              {showUserMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowUserMenu(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-compas-gray-200 py-2 z-20">
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-compas-gray-200">
                      <p className="font-medium text-compas-gray-900">
                        {user?.nombre} {user?.apellido}
                      </p>
                      <p className="text-sm text-compas-gray-500">{user?.email}</p>
                      <div className="mt-2">
                        <Badge variant="blue" size="sm">
                          {user?.rol}
                        </Badge>
                        {user?.verificado && (
                          <Badge variant="green" size="sm" className="ml-2">
                            Verificado
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Menu items */}
                    <Link
                      href={`/dashboard/${user?.rol}`}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-compas-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4 text-compas-gray-600" />
                      <span className="text-sm text-compas-gray-700">Mi perfil</span>
                    </Link>

                    <Link
                      href="/configuracion"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-compas-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4 text-compas-gray-600" />
                      <span className="text-sm text-compas-gray-700">Configuración</span>
                    </Link>

                    <div className="border-t border-compas-gray-200 my-2"></div>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-red-50 transition-colors text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Cerrar sesión</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
