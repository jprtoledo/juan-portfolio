export default function LandingPageServices() {
  return (
    <section id="servicos" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-4xl xl:max-w-full mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Serviços de Criação de Landing Page</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="flex flex-col gap-2 items-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">🟢 Starter</h3>
                <span className="text-green-400 font-bold text-lg">R$ 800</span>
                <p className="text-muted-foreground text-xs italic text-center">Comece sem gastar muito</p>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Design completo ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Computador / Celular ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Otimização para velocidade ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>SEO básico ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>SEO avançado ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Formulário de contato ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Integração com Banco de Dados / CRM ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>E-mail marketing ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Copywriting ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Revisão: 1</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Suporte: 3 dias</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm scale-[0.98]">
              <div className="flex flex-col gap-2 items-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">⚙️ Profissional</h3>
                <span className="text-yellow-400 font-bold text-lg">R$ 1400</span>
                <p className="text-muted-foreground text-xs italic text-center">Mais recursos, mas ainda limitado</p>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Design completo ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Computador / Celular ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Otimização para velocidade ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>SEO básico ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>SEO avançado ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Formulário de contato ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Integração com Banco de Dados / CRM ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>E-mail marketing ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Copywriting ❌</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Revisões: 2</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Suporte: 7 dias</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-green-700/20 backdrop-blur-sm border border-green-600 shadow-xl scale-105">
              <div className="flex flex-col gap-2 items-center mb-6">
                <h3 className="text-xl font-semibold text-white">👑 Premium</h3>
                <span className="text-white font-bold text-lg">R$ 1.600</span>
                <p className="text-gray-200 text-xs italic text-center">Melhor custo-benefício</p>
              </div>
              <ul className="space-y-3 text-gray-100 text-sm">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Design completo ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Computador / Celular ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Otimização para velocidade ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>SEO básico ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>SEO avançado ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Formulário de contato ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Integração com Banco de Dados / CRM ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>E-mail marketing ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Copywriting ✅</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Revisões: 3</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Suporte: 30 dias</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}