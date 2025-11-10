'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Button, Badge, Input } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import {
  Hotel,
  Calendar,
  DollarSign,
  TrendingUp,
  Bed,
  Users,
  Star,
  Plus,
  Edit,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Handshake,
  BarChart3,
  Settings,
} from 'lucide-react'
import { useState } from 'react'

export default function HotelPage() {
  const { user } = useAuthStore()
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  // Mock data
  const stats = {
    totalRooms: 32,
    occupiedRooms: 27,
    occupancyRate: 85,
    monthlyRevenue: 18200000,
    growth: 15,
    avgRating: 4.7,
    totalReviews: 234,
  }

  const roomTypes = [
    {
      id: 1,
      name: 'Habitación Estándar',
      total: 15,
      available: 3,
      capacity: '2 adultos',
      price: 150000,
      amenities: ['WiFi', 'TV', 'Baño privado', 'AC'],
    },
    {
      id: 2,
      name: 'Suite Junior',
      total: 10,
      available: 2,
      capacity: '2 adultos + 1 niño',
      price: 250000,
      amenities: ['WiFi', 'TV', 'Baño privado', 'AC', 'Balcón', 'Mini bar'],
    },
    {
      id: 3,
      name: 'Suite Familiar',
      total: 5,
      available: 0,
      capacity: '4 adultos',
      price: 380000,
      amenities: ['WiFi', 'TV', 'Baño privado', 'AC', 'Balcón', 'Mini bar', 'Cocina'],
    },
    {
      id: 4,
      name: 'Suite Presidencial',
      total: 2,
      available: 1,
      capacity: '2 adultos + 2 niños',
      price: 650000,
      amenities: ['WiFi', 'TV', 'Baño privado', 'AC', 'Balcón', 'Mini bar', 'Jacuzzi', 'Sala'],
    },
  ]

  const recentBookings = [
    {
      id: 1,
      guest: 'María Rodríguez',
      room: 'Suite Junior',
      checkIn: '15 Dic',
      checkOut: '18 Dic',
      nights: 3,
      total: 750000,
      status: 'confirmed',
      source: 'B2C',
    },
    {
      id: 2,
      guest: 'Carlos Martínez',
      room: 'Habitación Estándar',
      checkIn: '16 Dic',
      checkOut: '20 Dic',
      nights: 4,
      total: 600000,
      status: 'pending',
      source: 'B2B',
      agency: 'Viajes Colombia',
    },
    {
      id: 3,
      guest: 'Ana García',
      room: 'Suite Familiar',
      checkIn: '18 Dic',
      checkOut: '22 Dic',
      nights: 4,
      total: 1520000,
      status: 'confirmed',
      source: 'B2C',
    },
  ]

  const b2bPartnerships = [
    { name: 'Viajes Colombia', bookings: 24, revenue: 12500000, rating: 4.8 },
    { name: 'Tours Caribe', bookings: 18, revenue: 9200000, rating: 4.9 },
    { name: 'Aventura Total', bookings: 12, revenue: 6800000, rating: 4.6 },
  ]

  return (
    <DashboardLayout allowedRoles={['hotel']}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display mb-2">
              Bienvenido, {user?.nombre}! 🏨
            </h1>
            <p className="text-compas-gray-600">
              Gestiona tu alojamiento de forma eficiente
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
              Configuración
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4" />
              Nueva Reserva
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <Hotel className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">
                  {stats.occupiedRooms}/{stats.totalRooms}
                </p>
                <p className="text-sm text-compas-gray-600">Habitaciones</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">{stats.occupancyRate}%</p>
                <p className="text-sm text-compas-gray-600">Ocupación</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">
                  ${(stats.monthlyRevenue / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-compas-gray-600">Ingresos mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">{stats.avgRating}</p>
                <p className="text-sm text-compas-gray-600">{stats.totalReviews} reseñas</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Tipos de Habitaciones */}
          <Card className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-display">Tipos de Habitación</h2>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4" />
                Agregar tipo
              </Button>
            </div>

            <div className="space-y-3">
              {roomTypes.map((room) => (
                <div
                  key={room.id}
                  className="p-4 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{room.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-compas-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {room.capacity}
                        </span>
                        <span>Total: {room.total}</span>
                        <span className={room.available > 0 ? 'text-aventura-green' : 'text-red-600'}>
                          Disponibles: {room.available}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <Badge key={idx} variant="gray" size="sm">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-lg">
                        ${room.price.toLocaleString('es-CO')}
                      </p>
                      <p className="text-xs text-compas-gray-600">por noche</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Availability bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-compas-gray-600">Ocupación</span>
                      <span className="font-medium">
                        {((room.total - room.available) / room.total * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-compas-gray-200 rounded-full h-2">
                      <div
                        className="bg-aventura-green h-2 rounded-full transition-all"
                        style={{
                          width: `${((room.total - room.available) / room.total * 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions & Calendar */}
          <div className="space-y-4">
            {/* Calendario ocupación */}
            <Card>
              <h3 className="font-semibold mb-3">Calendario de Ocupación</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" fullWidth>
                  <Calendar className="w-4 h-4" />
                  Ver calendario completo
                </Button>
                <div className="text-sm space-y-2 mt-4">
                  <div className="flex items-center justify-between p-2 bg-aventura-green-50 rounded">
                    <span className="font-medium">Hoy</span>
                    <Badge variant="green">{stats.occupancyRate}%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-compas-gray-50 rounded">
                    <span>Mañana</span>
                    <Badge variant="blue">90%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-compas-gray-50 rounded">
                    <span>Próxima semana</span>
                    <Badge variant="yellow">72%</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Alianzas B2B */}
            <Card>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Alianzas B2B</h3>
                <Handshake className="w-5 h-5 text-compas-blue" />
              </div>
              <div className="space-y-2">
                {b2bPartnerships.map((partner, idx) => (
                  <div key={idx} className="text-sm p-2 bg-compas-gray-50 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{partner.name}</span>
                      <Badge variant="green" size="sm">
                        {partner.rating} ⭐
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-compas-gray-600">
                      <span>{partner.bookings} reservas</span>
                      <span>${(partner.revenue / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" fullWidth className="mt-3">
                  Ver todas las alianzas
                </Button>
              </div>
            </Card>

            {/* Rating resumen */}
            <Card>
              <h3 className="font-semibold mb-3">Reputación</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-mostacho-yellow mb-2">
                  {stats.avgRating}
                </div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-mostacho-yellow text-mostacho-yellow"
                    />
                  ))}
                </div>
                <p className="text-sm text-compas-gray-600 mb-3">
                  {stats.totalReviews} reseñas totales
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Ver reseñas
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Reservas Recientes */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-display">Reservas Recientes</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Todas las reservas
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4" />
                Calendario
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-compas-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Huésped</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Habitación</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Check-in</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Check-out</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Noches</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Total</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Canal</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Estado</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-compas-gray-100 hover:bg-compas-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{booking.guest}</p>
                        {booking.agency && (
                          <p className="text-xs text-compas-gray-600">vía {booking.agency}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{booking.room}</td>
                    <td className="py-3 px-4 text-sm">{booking.checkIn}</td>
                    <td className="py-3 px-4 text-sm">{booking.checkOut}</td>
                    <td className="py-3 px-4 text-sm">{booking.nights}</td>
                    <td className="py-3 px-4 font-medium">
                      ${booking.total.toLocaleString('es-CO')}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={booking.source === 'B2C' ? 'blue' : 'green'}
                        size="sm"
                      >
                        {booking.source}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {booking.status === 'confirmed' ? (
                        <Badge variant="green" size="sm">
                          <CheckCircle className="w-3 h-3" />
                          Confirmada
                        </Badge>
                      ) : (
                        <Badge variant="yellow" size="sm">
                          <Clock className="w-3 h-3" />
                          Pendiente
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                        {booking.status === 'pending' && (
                          <Button variant="secondary" size="sm">
                            Confirmar
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold mb-4 font-display">Acciones rápidas</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <button className="p-4 bg-mostacho-yellow-50 hover:bg-mostacho-yellow-100 rounded-lg transition-colors text-center">
              <Plus className="w-8 h-8 text-mostacho-yellow mx-auto mb-2" />
              <p className="font-medium text-sm">Nueva reserva</p>
            </button>

            <button className="p-4 bg-compas-blue-50 hover:bg-compas-blue-100 rounded-lg transition-colors text-center">
              <Calendar className="w-8 h-8 text-compas-blue mx-auto mb-2" />
              <p className="font-medium text-sm">Gestionar tarifas</p>
            </button>

            <button className="p-4 bg-aventura-green-50 hover:bg-aventura-green-100 rounded-lg transition-colors text-center">
              <Handshake className="w-8 h-8 text-aventura-green mx-auto mb-2" />
              <p className="font-medium text-sm">Buscar agencias</p>
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
