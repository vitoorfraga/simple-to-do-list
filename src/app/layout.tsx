import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '../components/header'
import { AuthProvider } from '@/providers/auth'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple To Do List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${inter.className} flex h-full flex-col min-h-screen`}
        >
          <Header />
          <main className="flex-1 p-4 mt-2">{children}</main>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  )
}
