"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  Database,
  Users,
  Brain,
  FileText,
  Target,
  Lock,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Award,
  Gamepad2,
  BarChart3,
  Settings,
  UserCheck,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  ChevronUp,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react"
import Link from "next/link"

// Hook para detectar seção atual
function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -70% 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}

// Hook para scroll suave
function useScrollTo() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return scrollTo
}

// Hook para dark mode
function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return { isDark, toggleDarkMode }
}

export default function GTLFIPage() {
  const activeSection = useActiveSection()
  const scrollTo = useScrollTo()
  const { isDark, toggleDarkMode } = useDarkMode()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("sobre")

  // Definir as abas do carrossel
  const carouselTabs = [
    { id: "sobre", label: "Fundamentação", icon: AlertTriangle },
    { id: "proposta", label: "Nossa Proposta", icon: Target },
    { id: "produtos", label: "Produtos Gerados", icon: Settings },
    { id: "aprendizado", label: "Aprendizado", icon: BookOpen },
    { id: "equipe", label: "Equipe", icon: Users },
    { id: "ferramentas", label: "Ferramentas", icon: Zap },
    { id: "financiadores", label: "Financiadores", icon: Award },
    { id: "publicacoes", label: "Publicações", icon: FileText },
  ]

  // Detectar scroll para mostrar botão "voltar ao topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "inicio", label: "Início", href: "#inicio" },
    { id: "explorar", label: "Explorar Projeto", href: "#explorar" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">GT-LFI</span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="outline" className="ml-4">Contato</Button>
              <button onClick={toggleDarkMode} className="ml-2 p-2 rounded-md">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-8">
            Inovação em Cibersegurança
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            GT-LFI
            <span className="block text-blue-600 dark:text-blue-400">Learning From Incidents</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Uma plataforma gamificada que utiliza IA para transformar o aprendizado de resposta a incidentes de
            segurança em uma experiência envolvente e prática.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollTo("explorar")}>
              Explore nosso projeto
            </Button>
          </div>
        </div>
      </section>



              {/* Carrossel/Modal de Exploração */}
        <section id="explorar" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Explore Nosso Projeto</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Navegue pelas abas para conhecer a fundamentação teórica, nossa proposta inovadora, produtos desenvolvidos, equipe e muito mais
              </p>
            </div>

          {/* Navegação de Abas */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
              {carouselTabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-md transform scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-600/50"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Conteúdo do Carrossel */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 min-h-[600px] transition-all duration-500">
            {activeTab === "sobre" && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">O que é um Incidente?</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Um incidente de segurança ocorre quando há uma ameaça ou violação que compromete a confidencialidade,
                    integridade ou disponibilidade de dados.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <Card className="border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400 mx-auto mb-2" />
                      <CardTitle className="text-red-700 dark:text-red-400">Malware</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        Softwares maliciosos que comprometem sistemas
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <Zap className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto mb-2" />
                      <CardTitle className="text-orange-700 dark:text-orange-400">DDoS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        Ataques que sobrecarregam serviços
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <Database className="h-12 w-12 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-purple-700 dark:text-purple-400">Vazamento de Dados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        Exposição não autorizada de informações
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <Lock className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-blue-700 dark:text-blue-400">Acesso Indevido</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        Invasões e tentativas de comprometimento
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Processo de Resposta */}
                <div className="text-center mb-12">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">O que é Resposta a Incidentes?</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                    A resposta a incidentes é o conjunto de ações tomadas para identificar, conter, mitigar e prevenir ameaças
                    à segurança cibernética.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Identificação</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Reconhecer rapidamente ameaças
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Contenção</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Impedir o avanço do incidente
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Settings className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Mitigação</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Reduzir impactos e danos
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Prevenção</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Evitar incidentes futuros
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "proposta" && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nossa Proposta</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                    Uma plataforma inovadora que combina gamificação, inteligência artificial e aprendizado colaborativo.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all">
                    <CardHeader className="text-center">
                      <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-blue-800 dark:text-blue-200">Módulo de Inteligência</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-300">
                        Sistema de IA para análise automática
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Análise preditiva</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Respostas automatizadas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Aprendizado contínuo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all">
                    <CardHeader className="text-center">
                      <div className="bg-purple-600 dark:bg-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-purple-800 dark:text-purple-200">Módulo PoP</CardTitle>
                      <CardDescription className="text-purple-600 dark:text-purple-300">
                        Procedimentos operacionais padrão
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Workflows personalizados</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Documentação integrada</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Métricas de eficiência</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-700 hover:shadow-xl transition-all">
                    <CardHeader className="text-center">
                      <div className="bg-green-600 dark:bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <UserCheck className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-green-800 dark:text-green-200">Módulo Hackers do Bem</CardTitle>
                      <CardDescription className="text-green-600 dark:text-green-300">
                        Treinamento e certificação
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Simulações realistas</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Certificações</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Mentoria especializada</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Benefícios */}
                <div className="text-center mb-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Benefícios da Plataforma</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Gamificação</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Aprendizado envolvente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">IA</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Análise inteligente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Colaboração</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Aprendizado social</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Prático</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Casos reais</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "produtos" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Produtos Gerados</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Conheça as ferramentas desenvolvidas pelo nosso projeto de pesquisa
                  </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-700">
                    <CardHeader className="text-center pb-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Anon-LFI</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        Ferramenta de Anonimização de Tickets
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Desenvolvida para anonimizar tickets de incidentes, removendo todos os dados sensíveis 
                        de forma segura e eficiente, preservando a utilidade dos dados para análise.
                      </p>
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Anonimização automática</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Preservação de dados úteis</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Conformidade com LGPD</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Ferramenta não disponível ao público
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-700">
                    <CardHeader className="text-center pb-4">
                      <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">Sentinel-LFI</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        Ferramenta de IA para Gestão de Incidentes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Sistema inteligente desenvolvido para categorizar incidentes utilizando padrões NIST, 
                        CERT e LLM, além de gerar playbooks automatizados e gerenciar tickets de forma eficiente.
                      </p>
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Categorização NIST/CERT</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Geração de playbooks</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Gestão inteligente de tickets</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Ferramenta não disponível ao público
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Estatísticas dos Produtos */}
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Produtos Desenvolvidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">P&D</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Pesquisa & Desenvolvimento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">IA</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Powered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Disponibilidade</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "aprendizado" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aprendizado Inovador</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nossa abordagem gamificada torna o aprendizado em cibersegurança envolvente
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Plataforma Intuitiva</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Interface amigável que torna o aprendizado acessível e envolvente através de gamificação.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Gamepad2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">Gamificação Envolvente</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">Aprendizado Adaptativo</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">Casos Reais</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="text-center">
                      <CardContent className="p-4">
                        <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900 dark:text-white">Certificações</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center">
                      <CardContent className="p-4">
                        <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900 dark:text-white">Progresso</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center">
                      <CardContent className="p-4">
                        <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900 dark:text-white">Comunidade</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center">
                      <CardContent className="p-4">
                        <Target className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900 dark:text-white">Desafios</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "equipe" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nossa Equipe</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Especialistas dedicados em cibersegurança e educação tecnológica
                  </p>
                </div>

                {/* Coordenador */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Coordenador</h4>
                  <div className="flex justify-center">
                    <Card className="text-center hover:shadow-lg transition-shadow max-w-sm">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dr. Rodrigo Sanches Miani</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Coordenador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Doutor em Engenharia Elétrica e pesquisador em Cibersegurança. Professor na Universidade Federal de Uberlândia.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Professores */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Professores</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Brain className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dr. Silvio Ereno Quincozes</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Doutor em Ciência da Computação com foco em Cibersegurança. Professor na Universidade Federal do Pampa.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Shield className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dr. Diego Luis Kreutz</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Pesquisador em Cibersegurança e professor na Universidade Federal do Pampa.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Database className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dr. Leandro Bertholdo</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Doutor em redes com foco em segurança. Professor na Universidade Federal do Rio Grande do Sul.
                        </p>
                        <div className="mt-3">
                          <Link href="https://www.linkedin.com/in/leandro-bertholdo-3379411/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-xs">
                            LinkedIn
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dr. Rafael Dias Araújo</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Doutor em Ciência da Computação e pesquisador em Informática na Educação e Interação Humano-Computador. Professor na UFU.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Bolsistas */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Bolsistas</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Gamepad2 className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Felipe Homrich Scherer</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3">
                          Graduando de Engenharia de Software pela Universidade Federal do Pampa, com foco em pesquisas nas áreas de cibersegurança.
                        </p>
                        <div className="flex justify-center space-x-3 text-xs">
                          <Link href="https://www.linkedin.com/in/felipehscherer/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                            LinkedIn
                          </Link>
                          <Link href="http://lattes.cnpq.br/0515811498958707" target="_blank" className="text-green-600 dark:text-green-400 hover:text-green-800">
                            Lattes
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Settings className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Felipe Nestor Dresch</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3">
                          Graduando em Engenharia de Software pela Universidade Federal do Pampa e Técnico em Informática pelo IFRS.
                        </p>
                        <div className="flex justify-center text-xs">
                          <Link href="https://www.linkedin.com/in/felipe-dresch-066046237/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                            LinkedIn
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <BookOpen className="h-10 w-10 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Me. Sebastião A. de Jesus F.</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Doutorando em Ciência da Computação e Técnico de Laboratório de Informática na Universidade Federal de Uberlândia.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <BarChart3 className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Alvaro Santana</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3">
                          Mestrando em Ciência da Computação pela Universidade Federal de Uberlândia e Consultor de Soluções na empresa Accenture.
                        </p>
                        <div className="flex justify-center text-xs">
                          <Link href="https://www.linkedin.com/in/alvaro-s-santos/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                            LinkedIn
                          </Link>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Target className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Carolina Bandel</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Graduanda em Gestão de Tecnologia da Informação pelo Senac SP.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Zap className="h-10 w-10 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">João Pedro Ramires Esteves</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Pesquisador</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                          Graduando em Ciências da Computação pela Universidade Federal de Uberlândia.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ferramentas" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ferramentas e Tecnologias</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stack tecnológico moderno utilizado no desenvolvimento do projeto
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">TypeScript</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Linguagem fortemente tipada que adiciona tipos estáticos ao JavaScript.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">React</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Biblioteca JavaScript para construção de interfaces de usuário interativas.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Settings className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Next.js</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Framework React que oferece renderização híbrida e otimizações de performance.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Framework CSS utilitário para design rápido e responsivo.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Express.js</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Framework web rápido e minimalista para Node.js.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Gemini</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Modelo de IA avançado do Google para processamento de linguagem natural.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Vercel AI SDK</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">SDK para integração simplificada de modelos de IA em aplicações web.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Database className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pinecone</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Banco de dados vetorial para busca semântica e similaridade.</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Firebase</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Plataforma de desenvolvimento que oferece diversos serviços backend como serviço.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "financiadores" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Financiadores e Parceiros</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Apoio institucional que torna nossa pesquisa possível
                  </p>
                </div>
                <div className="flex justify-center">
                  <Card className="text-center hover:shadow-lg transition-shadow max-w-md">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center gap-6 mb-6">
                        <img 
                          src="/logo-rnp.png" 
                          alt="RNP Logo" 
                          className="h-16 object-contain"
                        />
                        <img 
                          src="/logo-hackers-do-bem.svg" 
                          alt="Hackers do Bem Logo" 
                          className="h-16 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">RNP</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Rede Nacional de Ensino e Pesquisa
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "publicacoes" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Publicações Científicas</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Artigos e pesquisas resultantes do projeto
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Em Desenvolvimento
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Nosso projeto está atualmente em fase de desenvolvimento e pesquisa. 
                    As publicações científicas serão disponibilizadas conforme os resultados forem obtidos.
                  </p>
                  <div className="mt-6">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Pesquisa em Andamento
                    </Badge>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">GT-LFI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando o aprendizado de cibersegurança através da inovação. 
                Projeto de pesquisa desenvolvido em parceria com a RNP e Hackers do Bem.
              </p>
            </div>

            <div className="text-right">
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-end space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>gt.lif.rnp@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} GT-LFI - Learning From Incidents. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={() => scrollTo("inicio")}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all z-30"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
} 