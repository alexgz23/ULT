import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'COMPAS - Tu brújula, tus compas',
  description: 'Ecosistema completo de turismo que conecta viajeros, agencias, hoteles, guías y conductores en una sola plataforma.',
  keywords: ['turismo', 'viajes', 'colombia', 'agencias', 'hoteles', 'tours', 'experiencias', 'guías turísticos'],
  authors: [{ name: 'COMPAS' }],
  openGraph: {
    title: 'COMPAS - Tu brújula, tus compas',
    description: 'Ecosistema completo de turismo que conecta viajeros, agencias, hoteles, guías y conductores.',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
