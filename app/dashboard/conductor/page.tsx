'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import { Car, Calendar, DollarSign, MapPin } from 'lucide-react'

export default function ConductorPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['conductor']}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-compas-blue to-aventura-green rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            Bienvenido, {user?.nombre}! 🚗
          </h1>
          <p className="text-compas-blue-50 text-lg">
            Gestiona tus servicios de transporte
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-compas-gray-600">Vehículos</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-sm text-compas-gray-600">Servicios mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold">$6.8M</p>
                <p className="text-sm text-compas-gray-600">Ingresos mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,240</p>
                <p className="text-sm text-compas-gray-600">Km recorridos</p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Dashboard de Conductor</h2>
          <p className="text-compas-gray-600">
            Aquí podrás gestionar tus vehículos, servicios, agenda y alianzas B2B.
          </p>
          <Badge variant="yellow" className="mt-4">
            En desarrollo
          </Badge>
        </Card>
      </div>
    </DashboardLayout>
  )
}
