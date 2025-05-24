import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contato" className="py-8 px-6">
      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Vamos Trabalhar Juntos</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Pronto para escalar seu produto? Entre em contato e vamos discutir como posso ajudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="https://wa.me/5531989630555" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 border-0">
                <Phone className="w-4 h-4 mr-2" />
                (31) 98963-0555
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="border-border/50 hover:border-border">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:border-border">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button> */}
          </div>

          {/* <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Envie uma Mensagem</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-border focus:outline-none text-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-border focus:outline-none text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-border focus:outline-none text-foreground resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0">
                Enviar Mensagem
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}