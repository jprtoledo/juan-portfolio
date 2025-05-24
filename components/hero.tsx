import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"
import Link from "next/link"


export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-border/30 flex items-center justify-center">
              <Code className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Juan Toledo
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Engenheiro Fullstack Sênior & Consultor de Software
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ajudo a escalar produtos digitais otimizando performance, segurança e pagamentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#contato">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 border-0 text-foreground">
                Vamos Construir Juntos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#projetos">
              <Button variant="outline" size="lg" className="border-border/50 hover:border-border">
                Ver Projetos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Landing Pages Criadas</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-green-400 mb-2">$200k+</div>
              <div className="text-sm text-muted-foreground">de GMV Gerado</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Anos em Pagamentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}