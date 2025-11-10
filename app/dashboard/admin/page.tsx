'use client'

import { DashboardLayout } from '@/components/layout'
import { Card, Badge } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import { Users, Shield, DollarSign, TrendingUp } from 'lucide-react'

export default function AdminPage() {
  const { user } = useAuthStore()

  return (
    <DashboardLayout allowedRoles={['admin']}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-compas-gray-800 to-compas-gray-900 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2 font-display">
            Panel de Administración 🛡️
          </h1>
          <p className="text-compas-gray-300 text-lg">
            Gestiona todo el ecosistema COMPAS
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-compas-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-compas-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">10,234</p>
                <p className="text-sm text-compas-gray-600">Usuarios totales</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-aventura-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-aventura-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">340</p>
                <p className="text-sm text-compas-gray-600">Proveedores</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mostacho-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-mostacho-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold">$450M</p>
                <p className="text-sm text-compas-gray-600">GMV mes</p>
              </div>
            </div>
          </Card>

          <Card padding="sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tino-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-tino-orange" />
              </div>
              <div>
                <p className="text-2xl font-bold">+32%</p>
                <p className="text-sm text-compas-gray-600">Crecimiento</p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold mb-4">Panel de Administración</h2>
          <p className="text-compas-gray-600">
            Aquí podrás gestionar usuarios, proveedores, contenido, finanzas y reportes del ecosistema.
          </p>
          <Badge variant="yellow" className="mt-4">
            En desarrollo
          </Badge>
        </Card>
      </div>
    </DashboardLayout>
  )
}
