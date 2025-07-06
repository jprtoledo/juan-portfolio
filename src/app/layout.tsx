import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Juan Toledo | Desenvolvedor Full Stack Portfolio",
  description: "Portfólio de Juan Toledo, desenvolvedor Full Stack apaixonado por tecnologias modernas da web, JavaScript, TypeScript, React, Next.js, Node.js e mais.",
  keywords: [
    "Juan Toledo",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfólio",
    "Engenheiro de Software"
  ],
  authors: [{ name: "Juan Toledo", url: "https://portfolio.juantoledo.tech" }],
  creator: "Juan Toledo",
  openGraph: {
    title: "Juan Toledo | Desenvolvedor Full Stack Portfolio",
    description: "Portfólio de Juan Toledo, desenvolvedor Full Stack apaixonado por tecnologias modernas da web, JavaScript, TypeScript, React, Next.js, Node.js e mais.",
    url: "https://portfolio.juantoledo.tech",
    siteName: "Juan Toledo Portfolio",
    images: [
      {
        url: "/image/techs/javascript.svg",
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio de Juan Toledo"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Toledo | Desenvolvedor Full Stack Portfolio",
    description: "Portfólio de Juan Toledo, desenvolvedor Full Stack apaixonado por tecnologias modernas da web.",
    creator: "@jprtoledo",
    images: [
      "/image/techs/javascript.svg"
    ]
  },
  metadataBase: new URL("https://portfolio.juantoledo.tech"),
  alternates: {
    canonical: "https://portfolio.juantoledo.tech"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Juan Toledo",
            "url": "https://portfolio.juantoledo.tech",
            "image": "https://portfolio.juantoledo.tech/image/techs/javascript.svg",
            "jobTitle": "Desenvolvedor Full Stack",
            "sameAs": [
              "https://www.linkedin.com/in/juan-toledo/",
              "https://github.com/juantoledo"
            ]
          }
        `}
      </Script>
      <Script id="jsonld-projects" type="application/ld+json" strategy="afterInteractive">
        {`
          [
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Norvet",
              "description": "Landing page moderna com Next.js e formulários de contato integrado com planilha. Optimizado para SEO e altamente escalável!",
              "url": "https://norvet.com.br",
              "inLanguage": "pt-BR",
              "creator": {
                "@type": "Person",
                "name": "Juan Toledo"
              },
              "keywords": ["Next.js", "Tailwind CSS", "Google Sheets"]
            },
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "J&S",
              "description": "Landing page moderna com Nuxt.js e link para pagamento externo. Optimizado para grande quantidade de acessos.",
              "url": "https://www.juanesarah.com/",
              "inLanguage": "pt-BR",
              "creator": {
                "@type": "Person",
                "name": "Juan Toledo"
              },
              "keywords": ["Nuxt.js", "Tailwind CSS", "Vue.js"]
            }
          ]
        `}
      </Script>
      <body
        className={`${ibmPlexMono.className} antialiased`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
