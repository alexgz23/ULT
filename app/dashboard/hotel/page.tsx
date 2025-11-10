'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import { Hotel, Calendar, DollarSign, TrendingUp } from 'lucide-react'

export default function HotelPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['hotel']}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-mostacho-yellow to-aventura-green rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            Bienvenido, {user?.nombre}! 🏨
          </h1>
          <p className="text-mostacho-yellow-50 text-lg">
            Gestiona tu alojamiento de forma eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-hotel-100 rounded-lg flex items-center justify-center">
                <Hotel className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold">32</p>
                <p className="text-sm text-compas-gray-600">Habitaciones</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-compas-gray-600">Ocupación</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">$18.2M</p>
                <p className="text-sm text-compas-gray-600">Ingresos mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold">+15%</p>
                <p className="text-sm text-compas-gray-600">vs mes anterior</p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Dashboard de Hotel</h2>
          <p className="text-compas-gray-600">
            Aquí podrás gestionar tus habitaciones, reservas, calendario y alianzas B2B.
          </p>
          <Badge variant="yellow" className="mt-4">
            En desarrollo
          </Badge>
        </Card>
      </div>
    </DashboardLayout>
  )
}
