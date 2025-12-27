'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LinkItem {
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
    url: string;
    esWhatsApp?: boolean;
    destacado?: boolean;
}

export default function Linktree() {
    const [copiedLink, setCopiedLink] = useState<string | null>(null);

    const links: LinkItem[] = [
        {
            id: 'ver-parcelas',
            titulo: '¿Quieres conocer las parcelas?',
            descripcion: 'Explora nuestros proyectos disponibles',
            icono: '🏞️',
            url: 'https://inmomaule.com',
            destacado: true,
        },
        {
            id: 'comprar-propiedad',
            titulo: '¿Quieres vender tu propiedad?',
            descripcion: 'Compramos tu terreno al contado',
            icono: '💵',
            url: 'https://wa.me/56936979712?text=Hola,%20quiero%20vender%20mi%20propiedad,%20¿la%20compran%20ustedes?',
            esWhatsApp: true,
        },
        {
            id: 'consulta',
            titulo: 'Haz tu consulta',
            descripcion: 'Contáctanos por WhatsApp',
            icono: '💬',
            url: 'https://wa.me/56936979712?text=Hola,%20tengo%20una%20consulta',
            esWhatsApp: true,
        },
    ];

    const handleLinkClick = (link: LinkItem) => {
        // Meta Pixel tracking
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', {
                content_name: link.titulo,
                content_type: 'link',
            });
        }

        // Open link
        window.open(link.url, '_blank');
    };

    const handleCopyLink = (link: LinkItem, e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(link.url);
        setCopiedLink(link.id);
        setTimeout(() => setCopiedLink(null), 2000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Header con Logo */}
            <div className="bg-inmo-verde text-white py-8">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/logo.webp"
                            alt="InmoMaule"
                            width={200}
                            height={67}
                            className="drop-shadow-lg"
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">InmoMaule Inmobiliaria</h1>
                    <p className="text-inmo-dorado-claro text-sm">
                        Tu refugio en la precordillera • Región del Maule
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-2xl mx-auto px-4 -mt-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-inmo-verde">23</div>
                        <div className="text-xs text-gray-600 mt-1">Parcelas Totales</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                        <div className="text-3xl font-bold text-urgencia">10</div>
                        <div className="text-xs text-gray-600 mt-1">Ya Vendidas</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">13</div>
                        <div className="text-xs text-gray-600 mt-1">Disponibles</div>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="space-y-4">
                    {links.map((link) => (
                        <div
                            key={link.id}
                            onClick={() => handleLinkClick(link)}
                            className={`bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden ${link.destacado ? 'ring-2 ring-inmo-dorado' : ''
                                }`}
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    {/* Icono */}
                                    <div className="text-5xl flex-shrink-0">{link.icono}</div>

                                    {/* Contenido */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-xl text-inmo-verde leading-tight mb-2">
                                            {link.titulo}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {link.descripcion}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleLinkClick(link);
                                                }}
                                                className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 ${link.esWhatsApp
                                                    ? 'bg-[#25D366] hover:bg-[#20BA5A] text-white'
                                                    : 'bg-inmo-verde hover:bg-inmo-verde-claro text-white'
                                                    }`}
                                            >
                                                <span>
                                                    {link.esWhatsApp ? 'Abrir WhatsApp' : 'Visitar Página'}
                                                </span>
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={(e) => handleCopyLink(link, e)}
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors"
                                                title="Copiar enlace"
                                            >
                                                {copiedLink === link.id ? (
                                                    <svg
                                                        className="w-5 h-5 text-green-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Barra inferior decorativa para links destacados */}
                            {link.destacado && (
                                <div className="h-1 bg-gradient-to-r from-inmo-verde via-inmo-dorado to-inmo-verde" />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Bottom */}
                <div className="mt-8 bg-gradient-to-r from-inmo-verde to-inmo-verde-claro rounded-2xl p-6 text-white text-center shadow-xl">
                    <h3 className="text-xl font-bold mb-2">¿Listo para tu parcela?</h3>
                    <p className="text-sm mb-4 text-inmo-dorado-claro">
                        Agenda una visita y conoce tu futuro refugio
                    </p>
                    <a
                        href="https://wa.me/56936979712?text=Hola,%20quiero%20agendar%20una%20visita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-inmo-verde px-6 py-3 rounded-full font-bold hover:bg-inmo-dorado hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Agendar Visita por WhatsApp</span>
                    </a>
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
        </main>
    );
}