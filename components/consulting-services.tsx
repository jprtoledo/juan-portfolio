import {
  Code,
  Server,
  Zap,
  Users,
} from "lucide-react"

export default function ConsultingServices() {
  return (
    <section className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-4xl xl:max-w-full mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Serviços de Consultoria</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-foreground">Desenvolvimento SaaS</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  MVPs e protótipos rápidos
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Arquitetura escalável
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Integração de pagamentos
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  APIs RESTful seguras
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Server className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-foreground">Infraestrutura AWS</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Arquitetura serverless
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Otimização de custos
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  CI/CD pipelines
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Monitoramento e logs
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-foreground">Otimização de Performance</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Análise de gargalos
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Refatoração de código
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Otimização de queries
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Caching estratégico
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-semibold text-foreground">Mentoria Técnica</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Code reviews
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Arquitetura de software
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Boas práticas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Crescimento de carreira
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}