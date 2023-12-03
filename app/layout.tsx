import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BMset',
  description: 'Plateforme d’éducation en ligne personnalisée pour étudiants médecine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="https://www.bmset.com/wp-content/uploads/2023/06/cropped-BM-08-scaled-1-32x32.jpg" sizes="32x32" />
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
