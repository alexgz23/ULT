'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Button, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import {
  Package,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Star,
  Handshake,
  BarChart3,
} from 'lucide-react'

export default function AgenciaPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['agencia']}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-aventura-green to-compas-blue rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            ¡Hola, {user?.nombre}! 👋
          </h1>
          <p className="text-aventura-green-50 text-lg">
            Gestiona tu agencia desde un solo lugar
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">24</p>
                <p className="text-sm text-compas-gray-600">Productos activos</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">18</p>
                <p className="text-sm text-compas-gray-600">Reservas este mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">$12.5M</p>
                <p className="text-sm text-compas-gray-600">Ingresos del mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">+23%</p>
                <p className="text-sm text-compas-gray-600">vs mes anterior</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Reservas pendientes */}
          <Card className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-display">
                Reservas pendientes
              </h2>
              <Badge variant="orange">5 sin confirmar</Badge>
            </div>

            <div className="space-y-3">
              {[
                {
                  tour: 'Cartagena 3 días',
                  cliente: 'María García',
                  fecha: '15 Dic',
                  monto: '$1,200,000',
                  personas: 4,
                },
                {
                  tour: 'Eje Cafetero 5 días',
                  cliente: 'Carlos Rodríguez',
                  fecha: '20 Dic',
                  monto: '$2,400,000',
                  personas: 2,
                },
                {
                  tour: 'San Andrés Islas',
                  cliente: 'Ana Martínez',
                  fecha: '22 Dic',
                  monto: '$890,000',
                  personas: 1,
                },
              ].map((reserva, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{reserva.tour}</h4>
                    <div className="flex items-center gap-4 text-sm text-compas-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {reserva.cliente}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {reserva.fecha}
                      </span>
                      <Badge variant="blue" size="sm">
                        {reserva.personas} pax
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-bold">{reserva.monto}</p>
                    <p className="text-xs text-compas-gray-600">Total</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      Confirmar
                    </Button>
                    <Button size="sm" variant="outline">
                      Ver
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick stats */}
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold mb-3">Rating promedio</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-mostacho-yellow text-mostacho-yellow"
                    />
                  ))}
                </div>
                <span className="font-bold text-xl">4.8</span>
              </div>
              <p className="text-sm text-compas-gray-600">
                Basado en 127 reseñas
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold mb-3">Alianzas B2B</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Hoteles</span>
                  <Badge variant="green">12 activas</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Guías</span>
                  <Badge variant="green">8 activas</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Transporte</span>
                  <Badge variant="green">5 activas</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" fullWidth className="mt-3">
                <Handshake className="w-4 h-4" />
                Ver todas
              </Button>
            </Card>

            <Card>
              <h3 className="font-semibold mb-3">Visibilidad</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Vistas</span>
                  <span className="font-bold">2,340</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Clics</span>
                  <span className="font-bold">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-compas-gray-600">Conversión</span>
                  <Badge variant="green">19.5%</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold mb-4 font-display">
            Acciones rápidas
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            <button className="p-4 bg-aventura-green-50 hover:bg-aventura-green-100 rounded-lg transition-colors text-center">
              <Package className="w-8 h-8 text-aventura-green mx-auto mb-2" />
              <p className="font-medium text-sm">Crear producto</p>
            </button>

            <button className="p-4 bg-compas-blue-50 hover:bg-compas-blue-100 rounded-lg transition-colors text-center">
              <Calendar className="w-8 h-8 text-compas-blue mx-auto mb-2" />
              <p className="font-medium text-sm">Ver calendario</p>
            </button>

            <button className="p-4 bg-mostacho-yellow-50 hover:bg-mostacho-yellow-100 rounded-lg transition-colors text-center">
              <Handshake className="w-8 h-8 text-mostacho-yellow mx-auto mb-2" />
              <p className="font-medium text-sm">Buscar alianzas</p>
            </button>

            <button className="p-4 bg-tino-orange-50 hover:bg-tino-orange-100 rounded-lg transition-colors text-center">
              <BarChart3 className="w-8 h-8 text-tino-orange mx-auto mb-2" />
              <p className="font-medium text-sm">Ver reportes</p>
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
