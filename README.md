# COMPAS 🧭

**Tu brújula, tus compas**

Ecosistema completo de turismo que conecta viajeros, agencias, hoteles, guías y conductores en una sola plataforma.

## 🌍 ¿Qué es COMPAS?

COMPAS es más que una plataforma de reservas. Es un ecosistema donde:

- **Viajeros** descubren, reservan y comparten experiencias auténticas
- **Agencias** venden paquetes y contratan servicios B2B
- **Hoteles** ofrecen alojamiento en canales B2C y B2B
- **Guías** ofrecen experiencias únicas
- **Conductores** proveen transporte seguro
- **Todos** se conectan en una red social de viajes

### Diferenciadores Únicos

✅ **Marketplace + Red Social + B2B** integrados
✅ **Gamificación** con 3 guardianes carismáticos (RÍO, MOSTACHO, TINO)
✅ **Sistema B2B** para alianzas entre proveedores
✅ **Sistema de puntos** que recompensa comportamientos valiosos
✅ **Mapa de experiencias** personalizado por viajero

## 🎯 Los Tres Guardianes

### RÍO 🦦 - La Conectora
- **Color**: Verde Aventura (#00875A)
- **Rol**: Guía de la red social y comunidad
- **Filosofía**: "Los ríos no viajan solos. ¿Por qué tú sí?"

### MOSTACHO 🐒 - El Guía Experto
- **Color**: Amarillo (#FFAB00)
- **Rol**: Guardián del conocimiento y secretos locales
- **Filosofía**: "Psst... Mostacho aquí. Te voy a contar un secreto..."

### TINO 🎒 - El Aventurero
- **Color**: Naranja (#FF5630)
- **Rol**: Retador y motivador de aventuras
- **Filosofía**: "¿Te atreves? Yo sé que puedes"

## 🚀 Tech Stack

### Frontend Web
- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Forms**: React Hook Form
- **Maps**: Mapbox GL JS
- **Charts**: Recharts
- **Icons**: Lucide React

### Backend (Próximo)
- **API**: Node.js + Express/NestJS
- **DB**: PostgreSQL + PostGIS
- **Cache**: Redis
- **Search**: Elasticsearch
- **Files**: AWS S3

## 📁 Estructura del Proyecto

```
/app                    # Next.js App Router
  /dashboard
    /viajero           # Dashboard de viajeros
    /agencia           # Dashboard de agencias
    /hotel             # Dashboard de hoteles
    /guia              # Dashboard de guías
    /conductor         # Dashboard de conductores
    /admin             # Dashboard de administradores
  /api                 # API Routes
  /auth                # Autenticación
  /(public)            # Rutas públicas (landing, explorar)

/components            # Componentes reutilizables
  /ui                  # Componentes base
  /dashboard           # Componentes de dashboards
  /social              # Componentes de red social
  /maps                # Componentes de mapas

/lib                   # Utilidades y configuraciones
  /stores              # Zustand stores
  /hooks               # Custom hooks
  /utils               # Funciones helper

/types                 # TypeScript types
/public                # Assets estáticos
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Azul COMPAS** | #0052CC | Color principal, navegación |
| **Verde Aventura** | #00875A | Secundario, acciones positivas |
| **Naranja TINO** | #FF5630 | Retos, urgencia, CTAs |
| **Amarillo MOSTACHO** | #FFAB00 | Tips, secretos, destacados |

## 🏗️ Desarrollo

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build

```bash
npm run build
npm start
```

### Type Check

```bash
npm run type-check
```

## 📊 Roadmap

### Fase 1: MVP (Meses 1-4) ✅ En desarrollo
- [x] Setup del proyecto
- [ ] Landing page pública
- [ ] Sistema de autenticación
- [ ] Dashboard viajero básico
- [ ] Dashboard agencia básico
- [ ] Motor de reservas simple
- [ ] Integración de pagos

### Fase 2: Beta Pública (Meses 5-8)
- [ ] Red social completa
- [ ] Sistema de puntos v1.0
- [ ] Los 3 personajes integrados
- [ ] Mapa personal básico

### Fase 3: Sistema B2B (Meses 9-12)
- [ ] Dashboards Hotel, Guía, Conductor
- [ ] Directorio B2B
- [ ] Sistema de alianzas
- [ ] Órdenes B2B

## 🌎 Mercado

**Inicio**: Colombia (2025)
**Expansión Año 2**: México, Perú, Argentina
**Expansión Año 3+**: Resto de LATAM y global

**TAM**: $1.5 trillones USD/año (turismo global)

## 📄 Licencia

Propietario - COMPAS © 2025

---

**COMPAS** - Tu brújula, tus compas 🧭🦦🐒🎒
