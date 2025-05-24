import { Badge } from "@/components/ui/badge"

export default function Projects() {
  return (
    <section id="projetos" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-2">Gateway de Pagamento</h3>
              <p className="text-muted-foreground text-sm mb-4">Sistema crítico de processamento</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Arquitetura serverless completa para processamento de pagamentos com alta disponibilidade.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Lambda
                  </Badge>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-2">Sistema de Autenticação</h3>
              <p className="text-muted-foreground text-sm mb-4">JWT + Serverless</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sistema completo de autenticação segura com JWT, refresh tokens e integração AWS.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    JWT
                  </Badge>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-2">Landing Page J&S</h3>
              <p className="text-muted-foreground text-sm mb-4">Nuxt.js + Lambda</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Landing page moderna com Nuxt.js e backend serverless para formulários de contato.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Nuxt.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                    Vue
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}