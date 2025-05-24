import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <section id="projetos" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="https://norvet.com.br" className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-2">Norvet</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Landing page moderna com Next.js e formulários de contato integrado com planilha. Optimizado para SEO e altamente escalável!
              </p>
              <div className="flex justify-between items-end h-full content-end">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Lambda
                  </Badge>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </Link>

            <Link href="https://casamento-juan-sarah.vercel.app" className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-2">J&S</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Landing page moderna com Nuxt.js e link para pagamento externo Optimizado para grande quantidade de acessos.
              </p>
              <div className="flex justify-between items-end h-full content-end">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Nuxt.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Vue
                  </Badge>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}