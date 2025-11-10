'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Button, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import {
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Compass,
  Camera,
} from 'lucide-react'

export default function ViajeroPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['viajero']}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-compas-blue to-aventura-green rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            ¡Bienvenido de vuelta, {user?.nombre}! 👋
          </h1>
          <p className="text-compas-blue-50 text-lg">
            ¿Listo para tu próxima aventura?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">12</p>
                <p className="text-sm text-compas-gray-600">Países visitados</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">3</p>
                <p className="text-sm text-compas-gray-600">Viajes activos</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">1,240</p>
                <p className="text-sm text-compas-gray-600">Puntos COMPAS</p>
              </div>
            </div>
          </Card>

          <Card padding="sm" hover>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold text-compas-gray-900">Experto</p>
                <p className="text-sm text-compas-gray-600">Nivel actual</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Próximo viaje */}
          <Card className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 font-display">
              Tu próximo viaje
            </h2>
            <div className="bg-gradient-to-r from-compas-blue-50 to-aventura-green-50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="green" className="mb-2">
                    Confirmado
                  </Badge>
                  <h3 className="text-2xl font-bold mb-1">
                    Eje Cafetero - 5 días
                  </h3>
                  <p className="text-compas-gray-600">
                    Salento, Valle de Cocora, Filandia
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-compas-gray-600">Fecha</p>
                  <p className="font-bold">15 - 20 Dic</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-compas-blue" />
                  <span>Quindío, Colombia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-compas-blue" />
                  <span>5 días, 4 noches</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="primary">Ver detalles</Button>
                <Button variant="outline">Descargar voucher</Button>
              </div>
            </div>
          </Card>

          {/* Recomendaciones */}
          <Card>
            <h2 className="text-xl font-bold mb-4 font-display">
              Recomendaciones
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-compas-blue to-aventura-green rounded-lg flex items-center justify-center text-2xl">
                  🏖️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">
                    San Andrés Islas
                  </h4>
                  <p className="text-xs text-compas-gray-600 mb-1">
                    Desde $890,000 COP
                  </p>
                  <Badge variant="blue" size="sm">
                    Popular
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-aventura-green to-mostacho-yellow rounded-lg flex items-center justify-center text-2xl">
                  🏔️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">
                    Sierra Nevada
                  </h4>
                  <p className="text-xs text-compas-gray-600 mb-1">
                    Desde $1,200,000 COP
                  </p>
                  <Badge variant="orange" size="sm">
                    Aventura
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-compas-gray-50 rounded-lg hover:bg-compas-gray-100 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-tino-orange to-compas-blue rounded-lg flex items-center justify-center text-2xl">
                  🌴
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">
                    Amazonas
                  </h4>
                  <p className="text-xs text-compas-gray-600 mb-1">
                    Desde $1,500,000 COP
                  </p>
                  <Badge variant="green" size="sm">
                    Naturaleza
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Los Guardianes te hablan */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* RÍO */}
          <Card className="border-l-4 border-aventura-green" hover>
            <div className="flex items-start gap-3">
              <div className="text-4xl">🦦</div>
              <div>
                <h3 className="font-bold text-aventura-green mb-1">RÍO dice:</h3>
                <p className="text-sm text-compas-gray-600">
                  &quot;3 viajeros de tu balsa están en Cartagena ahora. ¡Conéctate!&quot;
                </p>
              </div>
            </div>
          </Card>

          {/* MOSTACHO */}
          <Card className="border-l-4 border-mostacho-yellow" hover>
            <div className="flex items-start gap-3">
              <div className="text-4xl">🐒</div>
              <div>
                <h3 className="font-bold text-mostacho-yellow mb-1">MOSTACHO dice:</h3>
                <p className="text-sm text-compas-gray-600">
                  &quot;Psst... Te tengo un secreto sobre Salento. ¿Quieres saberlo?&quot;
                </p>
              </div>
            </div>
          </Card>

          {/* TINO */}
          <Card className="border-l-4 border-tino-orange" hover>
            <div className="flex items-start gap-3">
              <div className="text-4xl">🎒</div>
              <div>
                <h3 className="font-bold text-tino-orange mb-1">TINO dice:</h3>
                <p className="text-sm text-compas-gray-600">
                  &quot;¡Reto de la semana! Sube 3 fotos de paisajes. +100 puntos&quot;
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold mb-4 font-display">
            Acciones rápidas
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            <button className="p-4 bg-compas-blue-50 hover:bg-compas-blue-100 rounded-lg transition-colors text-center">
              <Compass className="w-8 h-8 text-compas-blue mx-auto mb-2" />
              <p className="font-medium text-sm">Explorar destinos</p>
            </button>

            <button className="p-4 bg-aventura-green-50 hover:bg-aventura-green-100 rounded-lg transition-colors text-center">
              <Calendar className="w-8 h-8 text-aventura-green mx-auto mb-2" />
              <p className="font-medium text-sm">Ver mis viajes</p>
            </button>

            <button className="p-4 bg-mostacho-yellow-50 hover:bg-mostacho-yellow-100 rounded-lg transition-colors text-center">
              <Camera className="w-8 h-8 text-mostacho-yellow mx-auto mb-2" />
              <p className="font-medium text-sm">Subir foto</p>
            </button>

            <button className="p-4 bg-tino-orange-50 hover:bg-tino-orange-100 rounded-lg transition-colors text-center">
              <Award className="w-8 h-8 text-tino-orange mx-auto mb-2" />
              <p className="font-medium text-sm">Mis puntos</p>
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
