import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import { CodeBracketIcon, LinkIcon, UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ReactIcon from "@/../public/image/techs/react.svg"
import DockerIcon from "@/../public/image/techs/docker.svg"
import GitIcon from "@/../public/image/techs/git.svg"
import JavaScriptIcon from "@/../public/image/techs/javascript.svg"
import NextIcon from "@/../public/image/techs/next.svg"
import NodeIcon from "@/../public/image/techs/nodejs.svg"
import PostgreSQLIcon from "@/../public/image/techs/postgresql.svg"
import JavaIcon from "@/../public/image/techs/java.svg"
import SpringBootIcon from "@/../public/image/techs/spring-boot.svg"
import TailwindIcon from "@/../public/image/techs/tailwindcss.svg"
import TypeScriptIcon from "@/../public/image/techs/typescript.svg"
import MySQLIcon from "@/../public/image/techs/mysql.svg"
import MongoDBIcon from "@/../public/image/techs/mongodb.svg"
import VueIcon from "@/../public/image/techs/vue.svg"
import NuxtIcon from "@/../public/image/techs/nuxt.svg"
import Image from "next/image";
import { sendMessageAction } from "./actions";
import WhatsApp from "@/components/icons/whatsapp";

const technologies = [
  {
    name: "ReactJS",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Vue.js",
    icon: VueIcon,
  },
  {
    name: "Nuxt.js",
    icon: NuxtIcon,
  },
  {
    name: "Node.js",
    icon: NodeIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Java",
    icon: JavaIcon,
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
  },
  {
    name: "Docker",
    icon: DockerIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  }
];

export default function Home() {

  return (
    <>
      <header className="flex justify-between items-center lg:pt-12 pt-8">
        <div className="flex items-center gap-12 overflow-auto">
          <Link href='/' className="text-xl font-bold">JP</Link>
          <Link href='#sobre' className="text-lg font-light">Sobre</Link>
          <Link href='#projetos' className="text-lg font-light">Projetos</Link>
          <Link href='#contato' className="text-lg font-light">Contato</Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-8 lg:py-12 py-8">
        <div className="bg-background-08 border-2 border-background-07 w-full rounded-xl">
          <div className="flex gap-4 w-full border-b-2 border-background-07">
            <div className="flex gap-2 items-center pl-8">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-sm sm:text-lg lg:text-2xl font-light"><strong className="font-bold">Juan Toledo</strong> - Desenvolvedor Full Stack Sênior & Consultor de Tecnologia</h1>
            </div>
          </div>
          <section className="flex flex-col gap-4 mx-4 py-8 border-b-2 border-background-07" id="sobre">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold"> - Sobre mim</h2>
                <p>
                  Sou um Engenheiro Fullstack Sênior com mais de 5 anos de experiência em desenvolvimento de sistemas críticos, especializando-me em arquiteturas escaláveis, sistemas de pagamento e landing pages alta performance.
                </p>
                <p>
                  Trabalhei remotamente com times distribuídos na Hotmart, onde liderei migrações críticas que resultaram em economia de centenas de milhares de dólares e melhorias significativas de performance.
                </p>
                <div className="flex gap-2 font-bold">
                  <Link href='https://github.com/jprtoledo' className="bg-secondary text-foreground px-4 py-2 rounded-md flex gap-2">
                    <Github className="h-6 w-6 text-foreground" />
                    Veja meu GitHub
                  </Link>
                  <Link href='https://www.linkedin.com/in/jprtoledo/' className="bg-background-06 text-foreground px-4 py-2 rounded-md flex gap-2">
                    Entre em contato →
                  </Link>
                </div>
              </div>
              <div>
                <div className="bg-background-06 rounded-xl h-full px-8 py-6 flex flex-col justify-between">
                  <p className="font-bold tracking-wide leading-relaxed pb-6">Esse portfolio foi feito para que você me conheça melhor. Aqui apresento projetos que desenvolvi, serviços que ofereço e como entrar em contato comigo.</p>
                  <div className="flex gap-4 overflow-auto">
                    <div className="bg-background-07 text-foreground px-4 py-2 rounded-xl border border-background-08 w-60">
                      <div className="flex gap-2">
                        <CodeBracketIcon className="h-8 w-8 text-secondary" />
                        <h3 className="text-lg font-bold">Desenvolvimento de Sistemas</h3>
                      </div>
                    </div>
                    <div className="bg-background-07 text-foreground px-4 py-2 rounded-xl border border-background-08 w-60">
                      <div className="flex gap-2">
                        <UserIcon className="h-8 w-8 text-secondary" />
                        <h3 className="text-lg font-bold">Mentoria de Carreira</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4 mx-4 py-8 border-b-2 border-background-07" id="projetos">
            <div className="flex flex-col gap-4 lg:px-8 px-2">
              <h2 className="text-xl font-bold"> - Projetos</h2>
              <p>
                Aqui você pode ver alguns dos projetos que desenvolvi. Para mais projetos, acesse meu GitHub.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href="https://norvet.com.br" className="bg-background-07 text-foreground px-8 py-6 rounded-xl border border-background-08 w-96 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sl font-bold">Norvet</h3>
                    <p className="font-light">
                      Landing page moderna com Next.js e formulários de contato integrado com planilha. Optimizado para SEO e altamente escalável!
                    </p>
                  </div>
                  <div className="flex justify-between pt-4 items-end gap-4">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Next.js</p>
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Tailwind CSS</p>
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Google Sheets</p>
                    </div>
                    <LinkIcon className="h-6 w-6 text-foreground" />
                  </div>
                </Link>
                <Link href="https://www.juanesarah.com/" className="bg-background-07 text-foreground px-8 py-6 rounded-xl border border-background-08 w-96 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sl font-bold">J&S</h3>
                    <p className="font-light">
                      Landing page moderna com Nuxt.js e link para pagamento externo Optimizado para grande quantidade de acessos.
                    </p>
                  </div>
                  <div className="flex justify-between pt-4 items-end gap-4">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Nuxt.js</p>
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Tailwind CSS</p>
                      <p className="text-xs font-light rounded-full border border-background-08 px-2 py-1">Vue.js</p>
                    </div>
                    <LinkIcon className="h-6 w-6 text-foreground" />
                  </div>
                </Link>
              </div>
              <p>
                Essas são todas as tecnologias que eu utilizo atualmente.
              </p>
              <div className="flex flex-wrap gap-4">
                {technologies.map((technology) => (
                  <div key={technology.name} className="flex cursor-pointer items-center gap-2 rounded-md border px-2 py-1 font-mono font-medium bg-background-07 border-background-06">
                    <Image src={technology.icon} alt={technology.name} className="w-6 h-6" />
                    {technology.name}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4 mx-4 py-8" id="contato">
            <div className="flex flex-col gap-4 lg:px-8 px-2">
              <h2 className="text-xl font-bold"> - Contato</h2>
              <div className="grid lg:grid-cols-4">

              </div>
              <p>
                Entre em contato comigo. É só preencher o formulário abaixo e você será redirecionado para o WhatsApp!
              </p>
              <div className="grid lg:grid-cols-4 gap-4">
                <form className="lg:col-span-3 border-2 border-background-06 px-8 py-6 rounded-2xl" action={sendMessageAction}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-bold text-foreground">
                        Nome
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          placeholder="Seu Nome"
                          className="block w-full rounded-md px-3 py-1.5 text-base text-foreground placeholder:text-foreground-03 outline-0 border-2 border-background-06"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="font-bold text-foreground">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="email@exemplo.com"
                          className="block w-full rounded-md px-3 py-1.5 text-base text-foreground placeholder:text-foreground-03 outline-0 border-2 border-background-06"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 py-4">
                    <div>
                      <label htmlFor="message" className="font-bold text-foreground">
                        Mensagem
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Digite sua mensagem aqui..."
                          className="block w-full rounded-md px-3 py-1.5 text-base text-foreground placeholder:text-foreground-03 outline-0 border-2 border-background-06"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="submit" className="bg-secondary text-foreground px-4 py-2 rounded-md flex gap-2 hover:bg-secondary-07 cursor-pointer">
                      Enviar mensagem
                    </button>
                  </div>
                </form>
                <div className="flex flex-col gap-4 col-span-1 lg:items-end">
                  <p className="lg:text-right">
                    Essas são as minhas redes sociais.
                  </p>
                  <Link href='https://github.com/jprtoledo' className="text-lg font-light flex items-center gap-2">
                    <Github className="h-6 w-6 text-foreground" />
                    GitHub
                  </Link>
                  <Link href='https://www.linkedin.com/in/jprtoledo/' className="text-lg font-light flex items-center gap-2">
                    <Linkedin className="h-6 w-6 text-foreground" />
                    LinkedIn
                  </Link>
                  <Link href='https://api.whatsapp.com/send?phone=5531989630555' className="text-lg font-light flex items-center gap-2">
                    <WhatsApp className="h-6 w-6 text-foreground" />
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div >
      </main >
    </>
  );
}
