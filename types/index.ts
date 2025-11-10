/**
 * Tipos principales del ecosistema COMPAS
 */

// ============================================
// TIPOS DE USUARIOS
// ============================================

export type UserRole =
  | 'viajero'
  | 'agencia'
  | 'hotel'
  | 'guia'
  | 'conductor'
  | 'admin'

export interface User {
  id: string
  email: string
  nombre: string
  apellido?: string
  telefono?: string
  foto?: string
  rol: UserRole
  verificado: boolean
  fechaRegistro: Date
  ultimoAcceso?: Date
}

// ============================================
// VIAJERO
// ============================================

export type EstiloViaje =
  | 'aventura'
  | 'naturaleza'
  | 'urbano'
  | 'lujo'
  | 'mochilero'
  | 'familiar'

export type NivelViajero =
  | 'explorador'
  | 'caminante'
  | 'viajero-activo'
  | 'viajero-experto'
  | 'embajador'

export interface Viajero extends User {
  rol: 'viajero'
  estilosViaje: EstiloViaje[]
  presupuestoPromedio?: number
  idiomas: string[]
  paisesVisitados: string[]
  ciudadesVisitadas: string[]
  nivel: NivelViajero
  puntos: number
  bio?: string
  redesSociales?: {
    instagram?: string
    twitter?: string
    facebook?: string
  }
}

// ============================================
// AGENCIA
// ============================================

export type EstadoVerificacion =
  | 'pendiente'
  | 'en-revision'
  | 'verificada'
  | 'rechazada'
  | 'suspendida'

export interface Agencia extends User {
  rol: 'agencia'
  nombreEmpresa: string
  nit: string
  licenciaTurismo?: string
  direccion: string
  ciudad: string
  pais: string
  telefono: string
  sitioWeb?: string
  descripcion: string
  destinos: string[]
  especialidades: string[]
  estadoVerificacion: EstadoVerificacion
  esPremium: boolean
  rating: number
  totalReservas: number
}

// ============================================
// HOTEL
// ============================================

export interface Hotel extends User {
  rol: 'hotel'
  nombreEstablecimiento: string
  tipo: 'hotel' | 'hostal' | 'glamping' | 'finca' | 'apartamento' | 'otro'
  categoria?: number // Estrellas (1-5)
  direccion: string
  ciudad: string
  pais: string
  latitud: number
  longitud: number
  descripcion: string
  servicios: string[]
  politicas: {
    checkIn: string
    checkOut: string
    cancelacion: string
    ninos?: string
    mascotas?: boolean
  }
  estadoVerificacion: EstadoVerificacion
  esPremium: boolean
  rating: number
  totalReservas: number
}

// ============================================
// GUÍA TURÍSTICO
// ============================================

export interface Guia extends User {
  rol: 'guia'
  aniosExperiencia: number
  idiomas: string[]
  especialidades: string[]
  zonasOperacion: string[]
  certificaciones: string[]
  descripcion: string
  estadoVerificacion: EstadoVerificacion
  esPremium: boolean
  rating: number
  totalServicios: number
}

// ============================================
// CONDUCTOR / TRANSPORTE
// ============================================

export interface Conductor extends User {
  rol: 'conductor'
  tipoTransporte: 'auto' | 'van' | 'bus' | 'otro'
  capacidad: number
  caracteristicas: string[]
  licencia: string
  zonaOperacion: string[]
  descripcion: string
  estadoVerificacion: EstadoVerificacion
  rating: number
  totalServicios: number
}

// ============================================
// EXPERIENCIAS / PRODUCTOS
// ============================================

export type TipoProducto =
  | 'tour'
  | 'paquete'
  | 'escapada'
  | 'experiencia'
  | 'alojamiento'
  | 'transporte'

export type EstadoProducto =
  | 'borrador'
  | 'publicado'
  | 'pausado'
  | 'agotado'

export interface Producto {
  id: string
  tipo: TipoProducto
  titulo: string
  slug: string
  descripcion: string
  descripcionCorta: string
  proveedorId: string
  proveedorTipo: UserRole
  destino: {
    pais: string
    ciudad: string
    zona?: string
  }
  duracion: {
    dias?: number
    horas?: number
  }
  incluye: string[]
  noIncluye: string[]
  requisitos?: string[]
  recomendaciones?: string[]
  itinerario?: {
    dia: number
    titulo: string
    descripcion: string
    actividades: string[]
  }[]
  precio: {
    base: number
    moneda: string
    porPersona: boolean
    porGrupo?: boolean
    tarifas?: {
      tipo: string // adulto, niño, senior
      precio: number
    }[]
  }
  imagenes: string[]
  videos?: string[]
  capacidad: {
    minima?: number
    maxima: number
  }
  disponibilidad: {
    fechas?: Date[]
    diasSemana?: number[]
    temporadas?: {
      nombre: string
      fechaInicio: Date
      fechaFin: Date
      precioAjuste?: number
    }[]
  }
  estado: EstadoProducto
  rating: number
  totalReservas: number
  etiquetas: string[]
  createdAt: Date
  updatedAt: Date
}

// ============================================
// RESERVAS
// ============================================

export type EstadoReserva =
  | 'pendiente'
  | 'confirmada'
  | 'en-viaje'
  | 'completada'
  | 'cancelada'
  | 'reembolsada'

export interface Reserva {
  id: string
  productoId: string
  viajeroId: string
  proveedorId: string
  fechaReserva: Date
  fechaInicio: Date
  fechaFin?: Date
  numeroPersonas: {
    adultos: number
    ninos?: number
    infantes?: number
  }
  precioTotal: number
  moneda: string
  estado: EstadoReserva
  pagos: {
    id: string
    monto: number
    fecha: Date
    metodo: string
    estado: 'pendiente' | 'completado' | 'fallido' | 'reembolsado'
  }[]
  acompanantes?: {
    nombre: string
    apellido: string
    documento: string
    edad?: number
  }[]
  notasEspeciales?: string
  createdAt: Date
  updatedAt: Date
}

// ============================================
// RED SOCIAL
// ============================================

export type TipoPublicacion =
  | 'post'
  | 'historia'
  | 'resena'
  | 'pregunta'

export interface Publicacion {
  id: string
  autorId: string
  tipo: TipoPublicacion
  contenido: string
  imagenes?: string[]
  videos?: string[]
  destinoEtiquetado?: {
    pais: string
    ciudad: string
  }
  productoEtiquetado?: string
  proveedorEtiquetado?: string
  hashtags: string[]
  likes: number
  comentarios: number
  compartidos: number
  guardados: number
  esPublico: boolean
  createdAt: Date
  expiraEn?: Date // Para historias
}

export interface Comentario {
  id: string
  publicacionId: string
  autorId: string
  contenido: string
  likes: number
  respuestas?: Comentario[]
  createdAt: Date
}

// ============================================
// SISTEMA DE PUNTOS
// ============================================

export type TipoAccionPuntos =
  | 'viajar'
  | 'resenar'
  | 'publicar'
  | 'referir'
  | 'primer-viaje'
  | 'completar-perfil'

export interface MovimientoPuntos {
  id: string
  viajeroId: string
  tipo: TipoAccionPuntos
  puntos: number
  descripcion: string
  referenciaId?: string // ID de la reserva, publicación, etc.
  createdAt: Date
}

export interface Recompensa {
  id: string
  nombre: string
  descripcion: string
  puntosNecesarios: number
  tipo: 'descuento' | 'upgrade' | 'producto' | 'experiencia'
  valor?: number
  stock?: number
  vigencia?: {
    desde: Date
    hasta: Date
  }
  imagenes: string[]
}

// ============================================
// ALIANZAS B2B
// ============================================

export type EstadoAlianza =
  | 'propuesta'
  | 'negociacion'
  | 'activa'
  | 'pausada'
  | 'finalizada'

export interface AlianzaB2B {
  id: string
  agenciaId: string
  proveedorId: string
  proveedorTipo: 'hotel' | 'guia' | 'conductor'
  tarifasNetas: {
    productoId: string
    tarifaNeta: number
    comision: number
  }[]
  condiciones: string
  cupos?: number
  vigencia: {
    desde: Date
    hasta?: Date
  }
  estado: EstadoAlianza
  createdAt: Date
  updatedAt: Date
}

export interface OrdenB2B {
  id: string
  alianzaId: string
  agenciaId: string
  proveedorId: string
  servicios: {
    productoId: string
    cantidad: number
    fechas: Date[]
    precioUnitario: number
  }[]
  total: number
  estado: 'propuesta' | 'confirmada' | 'en-operacion' | 'cerrada' | 'cancelada'
  notas?: string
  createdAt: Date
  updatedAt: Date
}

// ============================================
// MAPA DE VIAJES
// ============================================

export interface MapaViajero {
  viajeroId: string
  paisesVisitados: {
    codigo: string
    nombre: string
    ciudades: string[]
    fechas: Date[]
  }[]
  lugaresWishlist: {
    pais: string
    ciudad: string
    razon?: string
  }[]
  estadisticas: {
    totalPaises: number
    totalCiudades: number
    continentes: string[]
    porcentajeMundoVisitado: number
  }
}
