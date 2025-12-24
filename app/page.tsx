'use client';

import { useState } from 'react';
import Image from 'next/image';

const lotesLosLaureles = [
  {
    id: 'lote-4',
    numero: 4,
    nombre: 'Lote 4',
    precio: '$25M',
    precioNumerico: 25000000,
    imagen: '/images/4.jpg',
    descripcion: 'Colinda con estero natural',
    badge: 'DISPONIBLE',
    badgeColor: 'bg-green-600 text-white',
    mensaje: 'Hola, me interesa el Lote 4 ($25M) que colinda con el estero natural. ¿Pueden darme más información?',
    disponible: true,
  },
  {
    id: 'lote-5',
    numero: 5,
    nombre: 'Lote 5',
    precio: '$25M',
    precioNumerico: 25000000,
    imagen: '/images/3.jpg',
    descripcion: 'Colinda con estero natural',
    badge: 'VENDIDO',
    badgeColor: 'bg-gray-400 text-white',
    mensaje: '',
    disponible: false,
  },
  {
    id: 'lote-14',
    numero: 14,
    nombre: 'Lote 14',
    precio: '$18M',
    precioNumerico: 18000000,
    imagen: '/images/1.jpg',
    descripcion: 'Bosque nativo',
    badge: 'DISPONIBLE',
    badgeColor: 'bg-green-600 text-white',
    destacado: true,
    mensaje: 'Hola, me interesa el Lote 14 ($18M) con bosque nativo. ¿Pueden darme más información?',
    disponible: true,
  }
];

const proyectosNuevos = [
  {
    id: 'parcelas-precordillera',
    nombre: 'Parcelas Precordillera Longaví',
    descripcion: 'Zona exclusiva de precordillera',
    parcelas: 14,
    tamaño: '5.000m²',
    desde: '$20M',
    imagen: '/images/5.jpg',
    caracteristicas: ['Bosque nativo', 'Acceso consolidado', 'Cerca del estero'],
    estado: 'Preventa',
    mensaje: 'Hola, me interesa el nuevo proyecto Los Laureles II (14 parcelas de 5.000m²). ¿Pueden darme más información?',
  },
  {
    id: 'proyecto-esperanza',
    nombre: 'Proyecto Esperanza',
    descripcion: 'Entorno natural privilegiado',
    parcelas: 7,
    tamaño: '5.000m²',
    desde: 'Consultar',
    imagen: '/images/2.jpg',
    caracteristicas: ['Factibilidad de Luz', 'Ubicación privilegiada', 'Entorno natural'],
    estado: 'Próximamente',
    mensaje: 'Hola, me interesa el proyecto Ribera del Achibueno (7 parcelas). ¿Pueden darme más información?',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    presupuesto: '',
    proyecto: '',
  });

  const isFormValid = formData.nombre.trim() !== '' &&
    formData.telefono.trim() !== '' &&
    formData.presupuesto !== '' &&
    formData.proyecto !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Lead InmoMaule',
        proyecto_interes: formData.proyecto,
        presupuesto: formData.presupuesto,
        value: 20000000,
        currency: 'CLP',
      });
    }

    const mensaje = `Hola, soy ${formData.nombre}. Me interesa ${formData.proyecto}. Mi presupuesto es ${formData.presupuesto}. Mi teléfono: ${formData.telefono}`;
    window.location.href = `https://wa.me/56936979712?text=${encodeURIComponent(mensaje)}`;
  };

  const handleLoteClick = (lote: typeof lotesLosLaureles[0]) => {
    if (!lote.disponible) return;

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: lote.nombre,
        content_type: 'product',
        value: lote.precioNumerico,
        currency: 'CLP',
      });
    }

    window.location.href = `https://wa.me/56936979712?text=${encodeURIComponent(lote.mensaje)}`;
  };

  const handleProyectoClick = (proyecto: typeof proyectosNuevos[0]) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: proyecto.nombre,
        content_type: 'project',
      });
    }

    window.location.href = `https://wa.me/56936979712?text=${encodeURIComponent(proyecto.mensaje)}`;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/5.jpg"
            alt="Parcelas en Longaví - InmoMaule"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        </div>

        <div className="absolute top-6 left-6 z-20">
          <Image
            src="/images/logo.webp"
            alt="InmoMaule"
            width={180}
            height={60}
            className="drop-shadow-2xl"
          />
        </div>

        <div className="absolute top-6 right-6 z-20 bg-urgencia text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl animate-pulse">
          🔥 2 LOTES + 2 PROYECTOS NUEVOS
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display drop-shadow-2xl">
            Tu Refugio en la Precordillera
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg">
            5.000m² • Estero Natural • Financiamiento 24 meses
          </p>
          <p className="text-3xl font-bold text-inmo-dorado mb-4 drop-shadow-lg">
            Desde $18.000.000
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-3xl font-bold text-inmo-verde">23</div>
            <div className="text-sm text-gray-600">Total Parcelas</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-3xl font-bold text-urgencia">10</div>
            <div className="text-sm text-gray-600">Ya Vendidas</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600">13</div>
            <div className="text-sm text-gray-600">Disponibles</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Columna Izquierda */}
          <div>
            {/* Los Laureles Original - Solo 2 Lotes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-inmo-verde">
                Proyecto Precordillera Longaví
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                ⚠️ Solo 2 de 14 lotes disponibles
              </p>

              <div className="space-y-4">
                {lotesLosLaureles.map((lote) => (
                  <button
                    key={lote.id}
                    onClick={() => handleLoteClick(lote)}
                    disabled={!lote.disponible}
                    className={`w-full bg-white rounded-lg shadow-md p-4 transition-all duration-300 text-left ${lote.disponible
                      ? 'hover:shadow-2xl transform hover:scale-[1.02] cursor-pointer border border-gray-200 hover:border-inmo-dorado'
                      : 'opacity-60 cursor-not-allowed border-2 border-gray-300'
                      } ${lote.destacado && lote.disponible ? 'border-2 border-inmo-dorado' : ''}`}
                  >
                    <div className="flex gap-4">
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={lote.imagen}
                          alt={lote.nombre}
                          fill
                          className={`object-cover ${lote.disponible ? 'transition-transform duration-300 hover:scale-110' : 'grayscale'}`}
                        />
                        {!lote.disponible && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">VENDIDO</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-inmo-verde">{lote.nombre}</h3>
                            <p className="text-sm text-gray-600">{lote.descripcion}</p>
                          </div>
                          <span className={`${lote.badgeColor} text-xs font-bold px-2 py-1 rounded whitespace-nowrap`}>
                            {lote.badge}
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-inmo-verde mb-2">{lote.precio}</p>
                        {lote.disponible && (
                          <div className="flex items-center gap-2 text-sm text-inmo-verde">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="font-medium">Consultar por WhatsApp</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nuevos Proyectos */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-inmo-verde">
                🆕 Nuevos Proyectos
              </h2>

              <div className="space-y-4">
                {proyectosNuevos.map((proyecto) => (
                  <div
                    key={proyecto.id}
                    onClick={() => handleProyectoClick(proyecto)}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border-2 border-inmo-dorado/30 hover:border-inmo-dorado overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={proyecto.imagen}
                        alt={proyecto.nombre}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {proyecto.nombre}
                            </h3>
                            <p className="text-sm text-white/90">{proyecto.descripcion}</p>
                          </div>
                          <span className="bg-inmo-dorado text-white text-xs font-bold px-3 py-1 rounded-full">
                            {proyecto.estado}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center bg-inmo-verde/5 rounded-lg p-2">
                          <div className="text-2xl font-bold text-inmo-verde">{proyecto.parcelas}</div>
                          <div className="text-xs text-gray-600">Parcelas</div>
                        </div>
                        <div className="text-center bg-inmo-verde/5 rounded-lg p-2">
                          <div className="text-2xl font-bold text-inmo-verde">{proyecto.tamaño}</div>
                          <div className="text-xs text-gray-600">Cada una</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {proyecto.caracteristicas.map((carac, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{carac}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div>
                          <div className="text-xs text-gray-600">Desde</div>
                          <div className="text-xl font-bold text-inmo-verde">{proyecto.desde}</div>
                        </div>
                        <button className="bg-inmo-verde hover:bg-inmo-verde-claro text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
                          <span>Más información</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4 border-t-4 border-inmo-dorado">
              <h2 className="text-2xl font-bold mb-2 text-center text-inmo-verde">
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
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp: +56 9 XXXX XXXX"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.presupuesto}
                    onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none transition-colors"
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
                    value={formData.proyecto}
                    onChange={(e) => setFormData({ ...formData, proyecto: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-inmo-dorado focus:outline-none transition-colors"
                    required
                  >
                    <option value="">¿Qué proyecto te interesa?</option>
                    <optgroup label="Los Laureles Original">
                      <option value="Lote 4">Lote 4 ($25M)</option>
                      <option value="Lote 14">Lote 14 ($18M)</option>
                    </optgroup>
                    <optgroup label="Nuevos Proyectos">
                      <option value="Los Laureles II">Parcelas Precordillera de Longaví (14 parcelas)</option>
                      <option value="Ribera del Achibueno">Proyecto Esperanza (7 parcelas)</option>
                    </optgroup>
                    <option value="Todos">Quiero ver todos</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${isFormValid
                    ? 'bg-inmo-verde hover:bg-inmo-verde-claro text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  <span>{isFormValid ? 'AGENDAR VISITA' : 'COMPLETA EL FORMULARIO'}</span>
                  {isFormValid && <span>→</span>}
                </button>

                <p className="text-xs text-center text-gray-500">
                  🔒 Al enviar serás redirigido a WhatsApp
                </p>
              </form>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/56936979712?text=Hola,%20vi%20las%20parcelas%20en%20la%20precordillera"
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

      {/* Footer */}
      <footer className="bg-inmo-verde text-white py-8 mt-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://wa.me/56936979712"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-inmo-dorado transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/inmomaule"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-inmo-dorado transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="text-sm opacity-80">
            InmoMaule Inmobiliaria • Longaví, Región del Maule
          </p>
          <p className="text-xs opacity-60 mt-4">
            Desarrollado por{' '}
            <a
              href="https://ascendweb.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold opacity-100 hover:text-inmo-dorado transition-colors"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.05em' }}
            >
              ASCEND
            </a>
          </p>
        </div>
      </footer>
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