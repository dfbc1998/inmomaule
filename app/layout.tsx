import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Parcelas en Longaví | InmoMaule - Solo 3 Lotes Disponibles',
  description: 'Últimas 3 parcelas de 5.000m² en santuario natural en Longaví. Bosque nativo, estero natural, río Achibueno. Desde $18M con financiamiento hasta 24 meses.',
  openGraph: {
    title: 'Tu Refugio en la Precordillera - InmoMaule',
    description: 'Solo 3 lotes disponibles de 14 originales. 5.000m² de naturaleza pura en Longaví.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TU_PIXEL_ID_AQUI');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}