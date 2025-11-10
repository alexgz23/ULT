'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Compass, Users, Hotel, Lightbulb, Car, UserCircle } from 'lucide-react'
import { Card, Button } from '@/components/ui'
import type { UserRole } from '@/types'

interface RoleOption {
  role: UserRole
  title: string
  description: string
  icon: React.ElementType
  color: string
  benefits: string[]
}

const roleOptions: RoleOption[] = [
  {
    role: 'viajero',
    title: 'Viajero',
    description: 'Descubre, reserva y comparte experiencias increíbles',
    icon: Compass,
    color: 'compas-blue',
    benefits: [
      'Reserva tours y experiencias',
      'Comparte en la red social',
      'Gana puntos y recompensas',
      'Crea tu mapa de viajes',
    ],
  },
  {
    role: 'agencia',
    title: 'Agencia de Viajes',
    description: 'Vende tours y crea paquetes increíbles',
    icon: Users,
    color: 'aventura-green',
    benefits: [
      'Publica tus tours y paquetes',
      'Contrata servicios B2B',
      'Gestiona reservas',
      'Promociona en red social',
    ],
  },
  {
    role: 'hotel',
    title: 'Hotel / Alojamiento',
    description: 'Ofrece tus habitaciones a viajeros y agencias',
    icon: Hotel,
    color: 'mostacho-yellow',
    benefits: [
      'Vende habitaciones directamente',
      'Trabaja con agencias (B2B)',
      'Gestiona disponibilidad',
      'Aumenta ocupación',
    ],
  },
  {
    role: 'guia',
    title: 'Guía Turístico',
    description: 'Comparte tu conocimiento y experiencia',
    icon: Lightbulb,
    color: 'tino-orange',
    benefits: [
      'Ofrece tours especializados',
      'Trabaja con agencias',
      'Construye tu reputación',
      'Gana más clientes',
    ],
  },
  {
    role: 'conductor',
    title: 'Conductor / Transporte',
    description: 'Provee transporte seguro y confiable',
    icon: Car,
    color: 'compas-blue',
    benefits: [
      'Ofrece servicios de transporte',
      'Trabaja con agencias y hoteles',
      'Gestiona tu flota',
      'Ingresos estables',
    ],
  },
]

export default function SeleccionarRolPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/auth/registro?rol=${selectedRole}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-compas-blue-50 via-white to-aventura-green-50 py-12">
      <div className="container-compas">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Compass className="w-16 h-16 text-compas-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Únete a COMPAS
          </h1>
          <p className="text-xl text-compas-gray-600 max-w-2xl mx-auto">
            ¿Cómo quieres ser parte del ecosistema de turismo más completo?
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {roleOptions.map((option) => {
            const Icon = option.icon
            const isSelected = selectedRole === option.role

            return (
              <Card
                key={option.role}
                className={`cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'ring-4 ring-compas-blue shadow-xl scale-105'
                    : 'hover:shadow-lg hover:-translate-y-1'
                }`}
                onClick={() => setSelectedRole(option.role)}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-${option.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-8 h-8 text-${option.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">
                    {option.title}
                  </h3>
                  <p className="text-sm text-compas-gray-600 mb-4">
                    {option.description}
                  </p>

                  <div className="text-left space-y-2">
                    {option.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-aventura-green mt-0.5">✓</span>
                        <span className="text-compas-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selectedRole}
            className="px-8"
          >
            Continuar con {selectedRole ? roleOptions.find(r => r.role === selectedRole)?.title : 'rol seleccionado'}
          </Button>

          <p className="mt-6 text-compas-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/auth/login" className="text-compas-blue hover:underline font-medium">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
