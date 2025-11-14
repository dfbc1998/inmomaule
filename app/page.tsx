'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    presupuesto: '',
    lote: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Meta Pixel Lead Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const lotePrecios: Record<string, number> = {
        'Lote 4': 25000000,
        'Lote 5': 25000000,
        'Lote 14': 18000000,
      };

      (window as any).fbq('track', 'Lead', {
        content_name: 'Lead InmoMaule',
        lote_interes: formData.lote,
        presupuesto: formData.presupuesto,
        value: lotePrecios[formData.lote as keyof typeof lotePrecios] || 20000000,
        currency: 'CLP',
      });
    }

    // Redirigir a WhatsApp
    const mensaje = `Hola, soy ${formData.nombre}. Me interesa ${formData.lote}. Mi presupuesto es ${formData.presupuesto}. Mi teléfono: ${formData.telefono}`;
    window.location.href = `https://wa.me/56936979712?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Compacto */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/5.jpg"
            alt="Parcelas Los Laureles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        {/* Logo */}
        <div className="absolute top-6 left-6 z-20">
          <Image
            src="/images/logo.webp"
            alt="InmoMaule"
            width={180}
            height={60}
            className="drop-shadow-lg"
          />
        </div>

        {/* Badge Urgencia */}
        <div className="absolute top-6 right-6 z-20 bg-urgencia text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
          ⚠️ SOLO 3/14 LOTES
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display">
            Los Laureles - Santuario Natural
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-6">
            5.000m² • Estero Natural • Financiamiento 24 meses
          </p>
          <p className="text-3xl font-bold text-inmo-dorado mb-4">
            Desde $18.000.000
          </p>
        </div>
      </section>

      {/* Contenido Principal - Todo en una vista */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Columna Izquierda: Lotes */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
              3/14 Parcelas Disponibles
            </h2>

            <div className="space-y-4">
              {/* Lote A */}
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/4.jpg"
                      alt="Lote A"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Lote 4</h3>
                        <p className="text-sm text-gray-600">Colinda con estero natural</p>
                      </div>
                      <span className="bg-inmo-dorado/10 text-inmo-dorado text-xs font-bold px-2 py-1 rounded">
                        VISTAS
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-inmo-verde">$25M</p>
                  </div>
                </div>
              </div>

              {/* Lote B */}
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-2 border-inmo-dorado">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/estero-corriendo.jpg"
                      alt="Lote B"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Lote 5</h3>
                        <p className="text-sm text-gray-600">Colinda con estero natural</p>
                      </div>
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        POPULAR
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-inmo-verde">$25M</p>
                  </div>
                </div>
              </div>

              {/* Lote C */}
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/bosque-nativo.jpg"
                      alt="Lote C"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">Lote 14</h3>
                        <p className="text-sm text-gray-600">80% bosque nativo protegido</p>
                      </div>
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        PRECIO
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-inmo-verde">$18M</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Rápida */}
            <div className="mt-6 bg-inmo-verde/5 rounded-lg p-4 border border-inmo-verde/20">
              <h4 className="font-bold text-sm mb-3 text-inmo-verde">✓ Incluye:</h4>
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <li>• 5.000m² c/u</li>
                <li>• Estero natural</li>
                <li>• Bosque nativo</li>
                <li>• Sin contribuciones</li>
                <li>• Escritura legal</li>
                <li>• Financiamiento</li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Agenda tu Visita
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Completa y te contactamos en 2 horas
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp: +56 9 XXXX XXXX"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.presupuesto}
                    onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none"
                    required
                  >
                    <option value="">¿Cuál es tu presupuesto?</option>
                    <option value="15-20M">$15-20 millones</option>
                    <option value="20-25M">$20-25 millones</option>
                    <option value="25M+">Más de $25 millones</option>
                  </select>
                </div>

                <div>
                  <select
                    value={formData.lote}
                    onChange={(e) => setFormData({ ...formData, lote: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none"
                    required
                  >
                    <option value="">¿Qué lote te interesa?</option>
                    <option value="Lote A">Lote 4 ($25M)</option>
                    <option value="Lote B">Lote 5 ($25M)</option>
                    <option value="Lote C">Lote 14 ($18M)</option>
                    <option value="Todos">Quiero ver los 3</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-inmo-verde hover:bg-inmo-verde/90 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>AGENDAR VISITA</span>
                  <span>→</span>
                </button>

                <p className="text-xs text-center text-gray-500">
                  🔒 Al enviar serás redirigido a WhatsApp
                </p>
              </form>

              {/* WhatsApp Directo */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/56936979712?text=Hola,%20vi%20las%20parcelas%20Los%20Laureles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  💬 Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Minimalista */}
      <footer className="bg-inmo-verde text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            InmoMaule • Parcelas Los Laureles, Longaví • Región del Maule
          </p>
        </div>
      </footer>

      {/* WhatsApp Flotante */}
      <a
        href="https://wa.me/56936979712?text=Hola,%20vengo%20desde%20la%20web"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  );
}
