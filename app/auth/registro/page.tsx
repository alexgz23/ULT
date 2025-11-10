'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Compass, ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Card, Button, Input } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'
import type { UserRole } from '@/types'

interface RegisterFormData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  password: string
  confirmPassword: string
  aceptaTerminos: boolean
}

function RegistroForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const rol = searchParams.get('rol') as UserRole
  const { register: registerUser, isLoading } = useAuthStore()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const password = watch('password')

  useEffect(() => {
    if (!rol) {
      router.push('/auth/seleccionar-rol')
    }
  }, [rol, router])

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        rol: rol,
      })

      // Redirigir al dashboard correspondiente
      router.push(`/dashboard/${rol}`)
    } catch (error) {
      console.error('Error al registrarse:', error)
      alert('Hubo un error al crear tu cuenta. Intenta de nuevo.')
    }
  }

  if (!rol) {
    return null
  }

  const roleNames: Record<UserRole, string> = {
    viajero: 'Viajero',
    agencia: 'Agencia de Viajes',
    hotel: 'Hotel / Alojamiento',
    guia: 'Guía Turístico',
    conductor: 'Conductor / Transporte',
    admin: 'Administrador',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-compas-blue-50 via-white to-aventura-green-50 py-12">
      <div className="container-compas max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Compass className="w-12 h-12 text-compas-blue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Crear cuenta de {roleNames[rol]}
          </h1>
          <p className="text-compas-gray-600">
            Completa tus datos para unirte a COMPAS
          </p>
        </div>

        <Card>
          {/* Back button */}
          <button
            onClick={() => router.push('/auth/seleccionar-rol')}
            className="flex items-center gap-2 text-compas-gray-600 hover:text-compas-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Cambiar tipo de cuenta
          </button>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Nombre */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Nombre *"
                {...register('nombre', {
                  required: 'El nombre es requerido',
                  minLength: {
                    value: 2,
                    message: 'Mínimo 2 caracteres',
                  },
                })}
                error={errors.nombre?.message}
                placeholder="Tu nombre"
              />

              <Input
                label="Apellido *"
                {...register('apellido', {
                  required: 'El apellido es requerido',
                  minLength: {
                    value: 2,
                    message: 'Mínimo 2 caracteres',
                  },
                })}
                error={errors.apellido?.message}
                placeholder="Tu apellido"
              />
            </div>

            {/* Email */}
            <Input
              label="Correo electrónico *"
              type="email"
              {...register('email', {
                required: 'El correo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Correo inválido',
                },
              })}
              error={errors.email?.message}
              placeholder="tu@email.com"
            />

            {/* Teléfono */}
            <Input
              label="Teléfono *"
              type="tel"
              {...register('telefono', {
                required: 'El teléfono es requerido',
                pattern: {
                  value: /^[0-9+\s()-]+$/,
                  message: 'Teléfono inválido',
                },
              })}
              error={errors.telefono?.message}
              placeholder="+57 300 123 4567"
            />

            {/* Contraseña */}
            <div className="relative">
              <Input
                label="Contraseña *"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'La contraseña es requerida',
                  minLength: {
                    value: 8,
                    message: 'Mínimo 8 caracteres',
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Debe incluir mayúscula, minúscula y número',
                  },
                })}
                error={errors.password?.message}
                placeholder="Mínimo 8 caracteres"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-compas-gray-500 hover:text-compas-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirmar Contraseña */}
            <div className="relative">
              <Input
                label="Confirmar contraseña *"
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', {
                  required: 'Confirma tu contraseña',
                  validate: (value) =>
                    value === password || 'Las contraseñas no coinciden',
                })}
                error={errors.confirmPassword?.message}
                placeholder="Repite tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-compas-gray-500 hover:text-compas-gray-700"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Términos y condiciones */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terminos"
                {...register('aceptaTerminos', {
                  required: 'Debes aceptar los términos y condiciones',
                })}
                className="mt-1"
              />
              <label htmlFor="terminos" className="text-sm text-compas-gray-600">
                Acepto los{' '}
                <a href="/terminos" className="text-compas-blue hover:underline">
                  términos y condiciones
                </a>{' '}
                y la{' '}
                <a href="/privacidad" className="text-compas-blue hover:underline">
                  política de privacidad
                </a>
              </label>
            </div>
            {errors.aceptaTerminos && (
              <p className="text-sm text-red-600">{errors.aceptaTerminos.message}</p>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
            >
              Crear cuenta
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-6 text-center text-compas-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/auth/login" className="text-compas-blue hover:underline font-medium">
              Inicia sesión
            </a>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default function RegistroPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RegistroForm />
    </Suspense>
  )
}
