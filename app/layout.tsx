import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Toledo",
  description:
    "Especialista em sistemas de pagamento, arquitetura serverless e desenvolvimento de Landing Pages. Ajudo empresas a escalar produtos digitais com performance e segurança.",
  keywords:
    "Juan Toledo, Engenheiro Fullstack, Consultor de Software, AWS, Java, Spring Boot, Serverless, Sistemas de Pagamento, Saas, Landing Page",
  authors: [{ name: "Juan Toledo" }],
  openGraph: {
    title: "Juan Toledo",
    description: "Especialista em sistemas de pagamento e arquitetura serverless",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Toledo",
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
          <Footer />
        </div>
      </body>
    </html>
  )
}
