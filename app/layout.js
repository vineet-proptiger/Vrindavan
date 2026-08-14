import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://herohomesplotsvrindavan.co.in/'),
  title: '100% MVDA Approved Hero Homes Plots in Vrindavan, Mathura',
  description: 'Discover Hero Homes Plots in Vrindavan, Mathura. Premium freehold residential plots starting at 1.10 Cr* with world-class amenities and 80% open spaces.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '100% MVDA Approved Hero Homes Plots in Vrindavan, Mathura',
    description: 'Discover Hero Homes Plots in Vrindavan, Mathura. Premium freehold residential plots starting at 1.10 Cr* with world-class amenities and 80% open spaces.',
    url: 'https://herohomesplotsvrindavan.co.in/',
    siteName: 'Hero Homes Plots in Vrindavan',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 600,
        alt: 'Hero Homes Plots in Vrindavan Favicon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '100% MVDA Approved Hero Homes Plots in Vrindavan, Mathura',
    description: 'Discover Hero Homes Plots in Vrindavan, Mathura. Premium freehold residential plots starting at 1.10 Cr* with world-class amenities and 80% open spaces.',
    images: ['/favicon.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': 'Mathura' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
