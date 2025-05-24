import { Badge } from "@/components/ui/badge"
import {
  Server,
  Zap,
  DollarSign,
} from "lucide-react"

export default function Experience() {
  return (
    <section id="experiencia" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Experiência & Conquistas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Migração de Tokens de Pagamento</h3>
                  <p className="text-muted-foreground">Hotmart - Lider de Projeto</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Liderei a migração completa do sistema de tokens de pagamento, implementando nova arquitetura que
                resultou em economia de <strong className="text-green-400">USD 120 mil</strong> anuais.
              </p>
              <div className="flex flex-wrap gap-2 h-full items-end content-end">
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Java
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  AWS
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Microserviços
                </Badge>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Otimização de Performance</h3>
                  <p className="text-muted-foreground">Sistema de Assinaturas</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Melhorei a performance do sistema de assinaturas em <strong className="text-blue-400">18x</strong> e
                eliminei perdas implementando processamento assíncrono com SQS e Lambda.
              </p>
              <div className="flex flex-wrap gap-2 h-full items-end content-end">
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  AWS Lambda
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  SQS
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  DynamoDB
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Serverless
                </Badge>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Migração de Sistema Legado</h3>
                  <p className="text-muted-foreground">WildFly para Spring Boot</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Migrei sistema legado de WildFly para Spring Boot, elevando a segurança de
                <strong className="text-purple-400"> 18% para 98%</strong> e melhorando significativamente a
                manutenibilidade.
              </p>
              <div className="flex flex-wrap gap-2 h-full items-end content-end">
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Security
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Refatoração
                </Badge>
                <Badge variant="outline" className="border-border/50 text-muted-foreground">
                  Legacy Migration
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}