import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Salong EnglaKarin | Frisör i Bollnäs",
  description:
    "Välkommen till Salong EnglaKarin i Bollnäs. Vi erbjuder klippning, färgning, slingor, styling och hårförlängning. 4.9 betyg med över 1140 omdömen.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
