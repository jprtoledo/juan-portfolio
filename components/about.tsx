import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
} from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um Engenheiro Fullstack Sênior com mais de 5 anos de experiência em desenvolvimento de sistemas
                críticos, especializando-me em arquiteturas escaláveis, sistemas de pagamento e landing pages
                alta performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhei remotamente com times distribuídos na Hotmart, onde liderei migrações críticas que
                resultaram em economia de centenas de milhares de dólares e melhorias significativas de performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  Java
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  Spring Boot
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  AWS Lambda
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  Vue.js
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  DynamoDB
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  SQS
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-foreground border-0">
                  Serverless
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-muted-foreground">Especialista em Sistemas de Pagamento</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-muted-foreground">Arquitetura Escalável</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-muted-foreground">Liderança Técnica</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-muted-foreground">Trabalho Remoto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}