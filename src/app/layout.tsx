import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Quotify',
  description: `Transforme seu dia com frases inspiradoras e motivacionais escolhidas aleatoriamente.`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  )
}
