'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Compass,
  Calendar,
  MapPin,
  MessageSquare,
  Award,
  Package,
  Users,
  Hotel,
  Lightbulb,
  Car,
  Settings,
  BarChart3,
  FileText,
  DollarSign,
  Handshake,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import { useAuthStore } from '@/lib/stores/authStore'
import { cn } from '@/lib/utils/cn'
import type { UserRole } from '@/types'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
  roles: UserRole[]
}

const navigationItems: NavItem[] = [
  // VIAJERO
  {
    label: 'Inicio',
    href: '/dashboard/viajero',
    icon: Home,
    roles: ['viajero'],
  },
  {
    label: 'Explorar',
    href: '/explorar',
    icon: Compass,
    roles: ['viajero'],
  },
  {
    label: 'Mis Viajes',
    href: '/dashboard/viajero/viajes',
    icon: Calendar,
    roles: ['viajero'],
  },
  {
    label: 'Mapa',
    href: '/dashboard/viajero/mapa',
    icon: MapPin,
    roles: ['viajero'],
  },
  {
    label: 'Social',
    href: '/dashboard/viajero/social',
    icon: MessageSquare,
    roles: ['viajero'],
  },
  {
    label: 'Puntos',
    href: '/dashboard/viajero/puntos',
    icon: Award,
    roles: ['viajero'],
  },

  // AGENCIA
  {
    label: 'Inicio',
    href: '/dashboard/agencia',
    icon: Home,
    roles: ['agencia'],
  },
  {
    label: 'Productos',
    href: '/dashboard/agencia/productos',
    icon: Package,
    roles: ['agencia'],
  },
  {
    label: 'Reservas',
    href: '/dashboard/agencia/reservas',
    icon: Calendar,
    roles: ['agencia'],
  },
  {
    label: 'Alianzas B2B',
    href: '/dashboard/agencia/b2b',
    icon: Handshake,
    roles: ['agencia'],
  },
  {
    label: 'Clientes',
    href: '/dashboard/agencia/clientes',
    icon: Users,
    roles: ['agencia'],
  },
  {
    label: 'Finanzas',
    href: '/dashboard/agencia/finanzas',
    icon: DollarSign,
    roles: ['agencia'],
  },
  {
    label: 'Marketing',
    href: '/dashboard/agencia/marketing',
    icon: BarChart3,
    roles: ['agencia'],
  },

  // HOTEL
  {
    label: 'Inicio',
    href: '/dashboard/hotel',
    icon: Home,
    roles: ['hotel'],
  },
  {
    label: 'Habitaciones',
    href: '/dashboard/hotel/habitaciones',
    icon: Hotel,
    roles: ['hotel'],
  },
  {
    label: 'Reservas',
    href: '/dashboard/hotel/reservas',
    icon: Calendar,
    roles: ['hotel'],
  },
  {
    label: 'Calendario',
    href: '/dashboard/hotel/calendario',
    icon: Calendar,
    roles: ['hotel'],
  },
  {
    label: 'Alianzas B2B',
    href: '/dashboard/hotel/b2b',
    icon: Handshake,
    roles: ['hotel'],
  },
  {
    label: 'Finanzas',
    href: '/dashboard/hotel/finanzas',
    icon: DollarSign,
    roles: ['hotel'],
  },

  // GUÍA
  {
    label: 'Inicio',
    href: '/dashboard/guia',
    icon: Home,
    roles: ['guia'],
  },
  {
    label: 'Mis Servicios',
    href: '/dashboard/guia/servicios',
    icon: Lightbulb,
    roles: ['guia'],
  },
  {
    label: 'Agenda',
    href: '/dashboard/guia/agenda',
    icon: Calendar,
    roles: ['guia'],
  },
  {
    label: 'Alianzas B2B',
    href: '/dashboard/guia/b2b',
    icon: Handshake,
    roles: ['guia'],
  },
  {
    label: 'Finanzas',
    href: '/dashboard/guia/finanzas',
    icon: DollarSign,
    roles: ['guia'],
  },

  // CONDUCTOR
  {
    label: 'Inicio',
    href: '/dashboard/conductor',
    icon: Home,
    roles: ['conductor'],
  },
  {
    label: 'Mis Vehículos',
    href: '/dashboard/conductor/vehiculos',
    icon: Car,
    roles: ['conductor'],
  },
  {
    label: 'Servicios',
    href: '/dashboard/conductor/servicios',
    icon: Calendar,
    roles: ['conductor'],
  },
  {
    label: 'Alianzas B2B',
    href: '/dashboard/conductor/b2b',
    icon: Handshake,
    roles: ['conductor'],
  },
  {
    label: 'Finanzas',
    href: '/dashboard/conductor/finanzas',
    icon: DollarSign,
    roles: ['conductor'],
  },

  // ADMIN
  {
    label: 'Dashboard',
    href: '/dashboard/admin',
    icon: Home,
    roles: ['admin'],
  },
  {
    label: 'Usuarios',
    href: '/dashboard/admin/usuarios',
    icon: Users,
    roles: ['admin'],
  },
  {
    label: 'Proveedores',
    href: '/dashboard/admin/proveedores',
    icon: Shield,
    roles: ['admin'],
  },
  {
    label: 'Contenido',
    href: '/dashboard/admin/contenido',
    icon: MessageSquare,
    roles: ['admin'],
  },
  {
    label: 'Finanzas',
    href: '/dashboard/admin/finanzas',
    icon: DollarSign,
    roles: ['admin'],
  },
  {
    label: 'Reportes',
    href: '/dashboard/admin/reportes',
    icon: BarChart3,
    roles: ['admin'],
  },
  {
    label: 'Sistema',
    href: '/dashboard/admin/sistema',
    icon: Settings,
    roles: ['admin'],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useAuthStore()

  // Filtrar items según el rol del usuario
  const filteredItems = navigationItems.filter((item) =>
    item.roles.includes(user?.rol as UserRole)
  )

  return (
    <aside className="w-64 bg-white border-r border-compas-gray-200 min-h-screen sticky top-16">
      <nav className="p-4 space-y-1">
        {filteredItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
                isActive
                  ? 'bg-compas-blue text-white'
                  : 'text-compas-gray-700 hover:bg-compas-gray-50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-tino-orange text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}

        {/* Configuración siempre al final */}
        <div className="pt-4 mt-4 border-t border-compas-gray-200">
          <Link
            href="/configuracion"
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
              pathname === '/configuracion'
                ? 'bg-compas-blue text-white'
                : 'text-compas-gray-700 hover:bg-compas-gray-50'
            )}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Configuración</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
