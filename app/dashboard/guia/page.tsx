'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Button, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import {
  Lightbulb,
  Calendar,
  DollarSign,
  Star,
  Users,
  MapPin,
  Globe,
  Award,
  Clock,
  CheckCircle,
  Plus,
  Edit,
  Eye,
  Handshake,
  TrendingUp,
  Image as ImageIcon,
  MessageSquare,
} from 'lucide-react'

export default function GuiaPage() {
  const { user } = useAuthStore()

  const stats = {
    totalServices: 15,
    completedThisMonth: 28,
    monthlyRevenue: 5400000,
    avgRating: 4.9,
    totalReviews: 142,
    repeatClients: 34,
  }

  const services = [
    {
      id: 1,
      name: 'City Tour Bogotá Histórica',
      type: 'Walking tour',
      duration: '4 horas',
      maxGroup: 12,
      languages: ['Español', 'Inglés'],
      priceB2C: 80000,
      priceB2B: 60000,
      bookings: 45,
      rating: 4.9,
      status: 'active',
    },
    {
      id: 2,
      name: 'Tour Gastronómico La Candelaria',
      type: 'Food tour',
      duration: '3 horas',
      maxGroup: 8,
      languages: ['Español', 'Inglés', 'Francés'],
      priceB2C: 120000,
      priceB2B: 90000,
      bookings: 38,
      rating: 5.0,
      status: 'active',
    },
    {
      id: 3,
      name: 'Tour de Grafiti y Arte Urbano',
      type: 'Cultural tour',
      duration: '3 horas',
      maxGroup: 10,
      languages: ['Español', 'Inglés'],
      priceB2C: 70000,
      priceB2B: 50000,
      bookings: 32,
      rating: 4.8,
      status: 'active',
    },
  ]

  const upcomingSchedule = [
    {
      id: 1,
      date: '15 Dic',
      time: '09:00 AM',
      service: 'City Tour Bogotá Histórica',
      client: 'María González',
      type: 'B2C',
      groupSize: 4,
      meetingPoint: 'Plaza de Bolívar',
      status: 'confirmed',
    },
    {
      id: 2,
      date: '15 Dic',
      time: '03:00 PM',
      service: 'Tour Gastronómico',
      client: 'Viajes Colombia',
      type: 'B2B',
      groupSize: 8,
      meetingPoint: 'Chorro de Quevedo',
      status: 'confirmed',
    },
    {
      id: 3,
      date: '16 Dic',
      time: '10:00 AM',
      service: 'Tour de Grafiti',
      client: 'John Smith',
      type: 'B2C',
      groupSize: 2,
      meetingPoint: 'Museo Botero',
      status: 'pending',
    },
  ]

  const b2bPartners = [
    {
      name: 'Viajes Colombia',
      services: 42,
      revenue: 2520000,
      rating: 4.9,
      nextBooking: '2 días',
    },
    {
      name: 'Tours Caribe',
      services: 28,
      revenue: 1680000,
      rating: 4.8,
      nextBooking: '5 días',
    },
    {
      name: 'Aventura Total',
      services: 15,
      revenue: 900000,
      rating: 5.0,
      nextBooking: '1 semana',
    },
  ]

  const specializations = [
    'Historia Colonial',
    'Gastronomía Local',
    'Arte Urbano',
    'Cultura Cafetera',
    'Naturaleza y Ecoturismo',
  ]

  const certifications = [
    { name: 'Guía Oficial de Turismo', issuer: 'MinComercio', year: 2019 },
    { name: 'Primeros Auxilios', issuer: 'Cruz Roja', year: 2023 },
    { name: 'TOEFL Inglés Avanzado', issuer: 'ETS', year: 2020 },
  ]

  return (
    <DashboardLayout allowedRoles={['guia']}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display mb-2">
              ¡Hola, {user?.nombre}! 🗺️
            </h1>
            <p className="text-compas-gray-600">
              Comparte tu conocimiento y experiencia
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4" />
              Editar perfil
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4" />
              Nuevo servicio
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">{stats.totalServices}</p>
                <p className="text-sm text-compas-gray-600">Tours activos</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">{stats.completedThisMonth}</p>
                <p className="text-sm text-compas-gray-600">Servicios este mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-aventura-green" />
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
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">{stats.avgRating}</p>
                <p className="text-sm text-compas-gray-600">{stats.totalReviews} reseñas</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mis Servicios */}
          <Card className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-display">Mis Servicios</h2>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4" />
                Agregar servicio
              </Button>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-4 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{service.name}</h3>
                        <Badge variant="green" size="sm">
                          {service.status === 'active' ? 'Activo' : 'Pausado'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-compas-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Max {service.maxGroup} personas
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-mostacho-yellow text-mostacho-yellow" />
                          {service.rating}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.languages.map((lang, idx) => (
                          <Badge key={idx} variant="blue" size="sm">
                            <Globe className="w-3 h-3" />
                            {lang}
                          </Badge>
                        ))}
                        <Badge variant="gray" size="sm">
                          {service.bookings} reservas
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="mb-2">
                        <p className="text-sm text-compas-gray-600">B2C</p>
                        <p className="font-bold">
                          ${service.priceB2C.toLocaleString('es-CO')}
                        </p>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-compas-gray-600">B2B</p>
                        <p className="font-bold text-aventura-green">
                          ${service.priceB2B.toLocaleString('es-CO')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Perfil profesional */}
            <Card>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-tino-orange" />
                Perfil Profesional
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-compas-gray-600 mb-1">Experiencia</p>
                  <p className="font-medium">8 años como guía</p>
                </div>
                <div>
                  <p className="text-sm text-compas-gray-600 mb-2">Especializaciones</p>
                  <div className="flex flex-wrap gap-2">
                    {specializations.slice(0, 3).map((spec, idx) => (
                      <Badge key={idx} variant="orange" size="sm">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-compas-gray-600 mb-2">Zonas</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-compas-blue" />
                    <span>Bogotá, Cundinamarca</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" fullWidth>
                  Ver perfil público
                </Button>
              </div>
            </Card>

            {/* Certificaciones */}
            <Card>
              <h3 className="font-semibold mb-3">Certificaciones</h3>
              <div className="space-y-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-2 bg-aventura-green-50 rounded text-sm">
                    <p className="font-medium text-aventura-green-700">{cert.name}</p>
                    <p className="text-xs text-compas-gray-600">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
                <Button variant="outline" size="sm" fullWidth className="mt-3">
                  <Plus className="w-4 h-4" />
                  Agregar certificación
                </Button>
              </div>
            </Card>

            {/* Reputación */}
            <Card>
              <h3 className="font-semibold mb-3">Tu Reputación</h3>
              <div className="text-center mb-4">
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
                <p className="text-sm text-compas-gray-600 mb-1">
                  {stats.totalReviews} reseñas
                </p>
                <Badge variant="green" className="mt-2">
                  Top Guía Bogotá
                </Badge>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-compas-gray-600">Clientes recurrentes</span>
                  <span className="font-bold text-aventura-green">{stats.repeatClients}</span>
                </div>
                <Button variant="outline" size="sm" fullWidth>
                  <MessageSquare className="w-4 h-4" />
                  Ver reseñas
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Próximos Servicios */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-display">Próximos Servicios</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4" />
                Ver agenda completa
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {upcomingSchedule.map((booking) => (
              <div
                key={booking.id}
                className="p-4 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-center">
                        <p className="text-xs text-compas-gray-600">Fecha</p>
                        <p className="font-bold">{booking.date}</p>
                        <p className="text-sm text-compas-gray-700">{booking.time}</p>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{booking.service}</h4>
                        <div className="flex items-center gap-4 text-sm text-compas-gray-600">
                          <span className="flex items-center gap-1">
                            {booking.type === 'B2C' ? (
                              <Users className="w-4 h-4" />
                            ) : (
                              <Handshake className="w-4 h-4" />
                            )}
                            {booking.client}
                          </span>
                          <Badge
                            variant={booking.type === 'B2C' ? 'blue' : 'green'}
                            size="sm"
                          >
                            {booking.type}
                          </Badge>
                          <span>{booking.groupSize} personas</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-compas-gray-600 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Punto de encuentro: {booking.meetingPoint}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {booking.status === 'confirmed' ? (
                      <Badge variant="green">
                        <CheckCircle className="w-3 h-3" />
                        Confirmado
                      </Badge>
                    ) : (
                      <Badge variant="yellow">
                        <Clock className="w-3 h-3" />
                        Pendiente
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alianzas B2B */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-display flex items-center gap-2">
              <Handshake className="w-6 h-6 text-aventura-green" />
              Alianzas B2B
            </h2>
            <Button variant="outline" size="sm">
              Buscar nuevas agencias
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {b2bPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 bg-aventura-green-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{partner.name}</h4>
                  <Badge variant="green" size="sm">
                    {partner.rating} ⭐
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-compas-gray-600">Servicios</span>
                    <span className="font-medium">{partner.services}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-compas-gray-600">Ingresos</span>
                    <span className="font-medium text-aventura-green">
                      ${(partner.revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-compas-gray-600">Próxima reserva</span>
                    <span className="font-medium">{partner.nextBooking}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" fullWidth className="mt-3">
                  Ver detalles
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold mb-4 font-display">Acciones rápidas</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <button className="p-4 bg-tino-orange-50 hover:bg-tino-orange-100 rounded-lg transition-colors text-center">
              <Plus className="w-8 h-8 text-tino-orange mx-auto mb-2" />
              <p className="font-medium text-sm">Crear servicio</p>
            </button>

            <button className="p-4 bg-compas-blue-50 hover:bg-compas-blue-100 rounded-lg transition-colors text-center">
              <Calendar className="w-8 h-8 text-compas-blue mx-auto mb-2" />
              <p className="font-medium text-sm">Gestionar agenda</p>
            </button>

            <button className="p-4 bg-aventura-green-50 hover:bg-aventura-green-100 rounded-lg transition-colors text-center">
              <ImageIcon className="w-8 h-8 text-aventura-green mx-auto mb-2" />
              <p className="font-medium text-sm">Subir fotos</p>
            </button>

            <button className="p-4 bg-mostacho-yellow-50 hover:bg-mostacho-yellow-100 rounded-lg transition-colors text-center">
              <TrendingUp className="w-8 h-8 text-mostacho-yellow mx-auto mb-2" />
              <p className="font-medium text-sm">Ver estadísticas</p>
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
