import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserRole } from '@/types'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  updateUser: (user: Partial<User>) => void
  setLoading: (loading: boolean) => void
}

export interface RegisterData {
  email: string
  password: string
  nombre: string
  apellido?: string
  telefono?: string
  rol: UserRole
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Acciones
      login: async (email: string, password: string) => {
        set({ isLoading: true })

        try {
          // TODO: Llamar al API real
          // Por ahora simularemos la autenticación
          await new Promise(resolve => setTimeout(resolve, 1000))

          // Simular respuesta del servidor
          const mockUser: User = {
            id: '1',
            email,
            nombre: 'Usuario',
            apellido: 'Demo',
            rol: 'viajero',
            verificado: false,
            fechaRegistro: new Date(),
          }

          const mockToken = 'mock-jwt-token-' + Date.now()

          set({
            user: mockUser,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      register: async (data: RegisterData) => {
        set({ isLoading: true })

        try {
          // TODO: Llamar al API real
          await new Promise(resolve => setTimeout(resolve, 1000))

          // Simular creación de usuario
          const newUser: User = {
            id: Date.now().toString(),
            email: data.email,
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            rol: data.rol,
            verificado: false,
            fechaRegistro: new Date(),
          }

          const mockToken = 'mock-jwt-token-' + Date.now()

          set({
            user: newUser,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        })
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              ...userData,
            },
          })
        }
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },
    }),
    {
      name: 'compas-auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
