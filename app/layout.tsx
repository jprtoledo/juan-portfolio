import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Toledo - Engenheiro Fullstack Sênior & Consultor SaaS",
  description:
    "Especialista em sistemas de pagamento, arquitetura serverless e desenvolvimento SaaS. Ajudo empresas a escalar produtos digitais com performance e segurança.",
  keywords:
    "Juan Toledo, Engenheiro Fullstack, Consultor SaaS, AWS, Java, Spring Boot, Serverless, Sistemas de Pagamento",
  authors: [{ name: "Juan Toledo" }],
  openGraph: {
    title: "Juan Toledo - Engenheiro Fullstack Sênior",
    description: "Especialista em sistemas de pagamento e arquitetura serverless",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Toledo - Engenheiro Fullstack Sênior",
    description: "Especialista em sistemas de pagamento e arquitetura serverless",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
