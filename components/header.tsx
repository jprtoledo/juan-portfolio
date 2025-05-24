import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-foreground">Juan Toledo</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </Link>
            <Link
              href="#experiencia"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Experiência
            </Link>
            <Link href="#projetos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Projetos
            </Link>
            <Link href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Serviços
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contato
            </Link>
          </div>
          <div/>
        </div>
      </div>
    </nav>
  )
}