import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
export const metadata: Metadata = {
  title:
    'Android iOS Web Apps Bucuresti | Dezvoltare aplicatii mobile si web ieftine',
  description:
    'Dezvoltare de aplicații Android, iOS si web ieftine în București. Aplicații performante și orientate către utilizator, la prețuri accesibile.',
}
const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Android iOS Web Apps Bucuresti | Dezvoltare aplicatii mobile si web ieftine',
  description:
    'Dezvoltare de aplicații Android, iOS si web ieftine în București. Aplicații performante și orientate către utilizator, la prețuri accesibile.',
  url: 'http://www.terrakode.com',
  email: 'support@terrakode.com',
  telephone: '+407********',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bulevardul Bucureștii Noi, Nr. 136, Parter, Ap. 5',
    addressLocality: 'București',
    addressRegion: 'Sectorul 1',
    postalCode: '012352',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.4823,
    longitude: 26.0345,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '01:00',
      closes: '23:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/TerraKode',
    'https://www.twitter.com/terraKode',
    'https://www.instagram.com/terrakode',
  ],
  image: 'http://www.terrakode.com/logo.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
