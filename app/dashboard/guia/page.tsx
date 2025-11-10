'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import { Lightbulb, Calendar, DollarSign, Star } from 'lucide-react'

export default function GuiaPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['guia']}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-tino-orange to-compas-blue rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            ¡Hola, {user?.nombre}! 🗺️
          </h1>
          <p className="text-tino-orange-50 text-lg">
            Comparte tu conocimiento y experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-compas-gray-600">Tours activos</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-compas-gray-600">Servicios mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">$5.4M</p>
                <p className="text-sm text-compas-gray-600">Ingresos mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-compas-gray-600">Rating</p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Dashboard de Guía</h2>
          <p className="text-compas-gray-600">
            Aquí podrás gestionar tus servicios, agenda, alianzas B2B y reputación.
          </p>
          <Badge variant="yellow" className="mt-4">
            En desarrollo
          </Badge>
        </Card>
      </div>
    </DashboardLayout>
  )
}
