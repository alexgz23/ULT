import { Compass, MapPin, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-compas-blue via-compas-blue-600 to-aventura-green text-white">
        <div className="container-compas py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Compass className="w-20 h-20 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              COMPAS
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-display">
              Tu brújula, tus compas
            </p>
            <p className="text-lg md:text-xl mb-10 text-compas-blue-50 max-w-2xl mx-auto">
              Descubre, reserva y comparte experiencias auténticas. Conecta con viajeros,
              agencias, hoteles y guías en el ecosistema de turismo más completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/registro" className="btn btn-primary bg-white text-compas-blue hover:bg-compas-gray-50 text-lg px-8 py-3">
                Crear cuenta gratis
              </Link>
              <Link href="/explorar" className="btn btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                Explorar destinos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-compas-gray-50">
        <div className="container-compas">
          <h2 className="text-4xl font-bold text-center mb-4 font-display">
            ¿Qué hace único a COMPAS?
          </h2>
          <p className="text-center text-compas-gray-600 mb-12 max-w-2xl mx-auto">
            No somos solo reservas, ni solo red social. Somos un ecosistema completo
            donde todo está conectado.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center card-hover">
              <div className="w-16 h-16 bg-compas-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-compas-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Todo en un lugar</h3>
              <p className="text-compas-gray-600">
                Tours, hoteles, transporte y guías. No necesitas 5 apps diferentes.
              </p>
            </div>

            <div className="card text-center card-hover">
              <div className="w-16 h-16 bg-aventura-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-aventura-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Red Social de Viajes</h3>
              <p className="text-compas-gray-600">
                Comparte experiencias reales y descubre destinos auténticos.
              </p>
            </div>

            <div className="card text-center card-hover">
              <div className="w-16 h-16 bg-mostacho-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-mostacho-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sistema de Puntos</h3>
              <p className="text-compas-gray-600">
                Gana puntos viajando, compartiendo y recomendando. Canjéalos por recompensas.
              </p>
            </div>

            <div className="card text-center card-hover">
              <div className="w-16 h-16 bg-tino-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-tino-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3 Guardianes</h3>
              <p className="text-compas-gray-600">
                RÍO, MOSTACHO y TINO te guían en cada aventura con consejos y retos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guardianes Section */}
      <section className="py-20">
        <div className="container-compas">
          <h2 className="text-4xl font-bold text-center mb-4 font-display">
            Conoce a los Guardianes
          </h2>
          <p className="text-center text-compas-gray-600 mb-12 max-w-2xl mx-auto">
            Tres compañeros carismáticos que transforman cada viaje en una aventura única.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* RÍO */}
            <div className="card card-hover border-l-4 border-aventura-green">
              <div className="text-6xl mb-4">🦦</div>
              <h3 className="text-2xl font-bold mb-2 text-aventura-green font-display">RÍO</h3>
              <p className="text-sm font-semibold text-aventura-green-600 mb-3">La Conectora</p>
              <p className="text-compas-gray-600 mb-4">
                Nutria gigante amazónica que te conecta con tu comunidad de viajeros.
              </p>
              <p className="text-sm italic text-aventura-green-700">
                &quot;Los ríos no viajan solos. ¿Por qué tú sí?&quot;
              </p>
            </div>

            {/* MOSTACHO */}
            <div className="card card-hover border-l-4 border-mostacho-yellow">
              <div className="text-6xl mb-4">🐒</div>
              <h3 className="text-2xl font-bold mb-2 text-mostacho-yellow font-display">MOSTACHO</h3>
              <p className="text-sm font-semibold text-mostacho-yellow-600 mb-3">El Guía Experto</p>
              <p className="text-compas-gray-600 mb-4">
                Tití emperador que guarda los secretos de cada destino.
              </p>
              <p className="text-sm italic text-mostacho-yellow-700">
                &quot;Psst... Te voy a contar un secreto...&quot;
              </p>
            </div>

            {/* TINO */}
            <div className="card card-hover border-l-4 border-tino-orange">
              <div className="text-6xl mb-4">🎒</div>
              <h3 className="text-2xl font-bold mb-2 text-tino-orange font-display">TINO</h3>
              <p className="text-sm font-semibold text-tino-orange-600 mb-3">El Aventurero</p>
              <p className="text-compas-gray-600 mb-4">
                Tití cabeciblanco que te reta a vivir aventuras únicas.
              </p>
              <p className="text-sm italic text-tino-orange-700">
                &quot;¿Te atreves? Yo sé que puedes&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-compas-blue to-aventura-green text-white">
        <div className="container-compas text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de viajeros que ya encontraron su brújula y sus compas.
          </p>
          <Link href="/auth/registro" className="btn btn-primary bg-white text-compas-blue hover:bg-compas-gray-50 text-lg px-8 py-3">
            Comenzar ahora - Es gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-compas-gray-900 text-white py-12">
        <div className="container-compas">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-8 h-8" />
                <span className="text-2xl font-bold font-display">COMPAS</span>
              </div>
              <p className="text-compas-gray-400">
                Tu brújula, tus compas
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Viajeros</h4>
              <ul className="space-y-2 text-compas-gray-400">
                <li><Link href="/explorar" className="hover:text-white">Explorar</Link></li>
                <li><Link href="/destinos" className="hover:text-white">Destinos</Link></li>
                <li><Link href="/como-funciona" className="hover:text-white">Cómo funciona</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Proveedores</h4>
              <ul className="space-y-2 text-compas-gray-400">
                <li><Link href="/agencias" className="hover:text-white">Agencias</Link></li>
                <li><Link href="/hoteles" className="hover:text-white">Hoteles</Link></li>
                <li><Link href="/guias" className="hover:text-white">Guías</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-compas-gray-400">
                <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
                <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
                <li><Link href="/ayuda" className="hover:text-white">Ayuda</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-compas-gray-800 mt-8 pt-8 text-center text-compas-gray-400">
            <p>&copy; 2025 COMPAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
