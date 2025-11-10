'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Compass, Eye, EyeOff } from 'lucide-react'
import { Card, Button, Input } from '@/components/ui'
import { useAuthStore } from '@/lib/stores/authStore'

interface LoginFormData {
  email: string
  password: string
  recordarme: boolean
}

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password)

      // Obtener el usuario para redirigir al dashboard correcto
      const user = useAuthStore.getState().user
      if (user) {
        router.push(`/dashboard/${user.rol}`)
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      alert('Credenciales incorrectas. Intenta de nuevo.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-compas-blue-50 via-white to-aventura-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Compass className="w-16 h-16 text-compas-blue" />
          </div>
          <h1 className="text-4xl font-bold mb-2 font-display">
            Bienvenido a COMPAS
          </h1>
          <p className="text-compas-gray-600">
            Inicia sesión para continuar tu aventura
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <Input
              label="Correo electrónico"
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
              autoComplete="email"
            />

            {/* Contraseña */}
            <div className="relative">
              <Input
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'La contraseña es requerida',
                })}
                error={errors.password?.message}
                placeholder="Tu contraseña"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-compas-gray-500 hover:text-compas-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Recordarme y Olvidé contraseña */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="recordarme"
                  {...register('recordarme')}
                  className="rounded"
                />
                <label htmlFor="recordarme" className="text-sm text-compas-gray-600">
                  Recordarme
                </label>
              </div>
              <a
                href="/auth/recuperar-password"
                className="text-sm text-compas-blue hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
            >
              Iniciar sesión
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-compas-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-compas-gray-500">o</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full btn btn-outline flex items-center justify-center gap-2"
              onClick={() => alert('Login con Google próximamente')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar con Google
            </button>

            <button
              type="button"
              className="w-full btn btn-outline flex items-center justify-center gap-2"
              onClick={() => alert('Login con Facebook próximamente')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continuar con Facebook
            </button>
          </div>

          {/* Registro link */}
          <p className="mt-6 text-center text-compas-gray-600">
            ¿No tienes una cuenta?{' '}
            <a
              href="/auth/seleccionar-rol"
              className="text-compas-blue hover:underline font-medium"
            >
              Créala gratis
            </a>
          </p>
        </Card>
      </div>
    </div>
  )
}
