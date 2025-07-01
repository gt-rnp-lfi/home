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
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
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

  const navigationItems = [
    { id: "inicio", label: "Início", href: "#inicio" },
    { id: "fundamentacao", label: "Fundamentação", href: "#fundamentacao" },
    { id: "proposta-aprendizado", label: "Nossa Proposta", href: "#proposta-aprendizado" },
    { id: "produtos", label: "Produtos", href: "#produtos" },
    { id: "ferramentas", label: "Ferramentas", href: "#ferramentas" },
    { id: "tecnologias", label: "Tecnologias", href: "#tecnologias" },
    { id: "equipe", label: "Equipe", href: "#equipe" },
    { id: "financiadores", label: "Financiadores", href: "#financiadores" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900 transition-all duration-500">
      {/* Navbar */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-1 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">GT-LFI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  }`}
                >
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="lg:hidden">{item.label.split(' ')[0]}</span>
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                className="ml-2 lg:ml-4 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm"
              >
                <span className="hidden lg:inline">Contato</span>
                <Mail className="h-4 w-4 lg:hidden" />
              </Button>
              <button 
                onClick={toggleDarkMode} 
                className="ml-1 lg:ml-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-110"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-4 w-4 lg:h-5 lg:w-5" /> : <Moon className="h-4 w-4 lg:h-5 lg:w-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg animate-in slide-in-from-top duration-300 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`px-4 py-3 text-left rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    variant="outline" 
                    className="w-full justify-center border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contato
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mais alta e impactante */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-8 px-6 py-2 text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Inovação em Cibersegurança
            </Badge>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                GT-LFI
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
                Learning From Incidents
              </span>
            </h1>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Uma plataforma <span className="font-semibold text-blue-600 dark:text-blue-400">gamificada</span> que utiliza 
              <span className="font-semibold text-indigo-600 dark:text-indigo-400"> inteligência artificial</span> para transformar 
              o aprendizado de resposta a incidentes de segurança em uma experiência 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> envolvente e prática</span>.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-medium shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => scrollTo("proposta-aprendizado")}
              >
                Explore nosso projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-8 py-4 text-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollTo("produtos")}
              >
                Ver Produtos
              </Button>
            </div>
          </div>


        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 dark:bg-blue-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Nova Seção de Fundamentação - Contextualização */}
      <section id="fundamentacao" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white mb-6 px-4 py-2">
                Contextualização
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                  O que é um Incidente?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Um incidente de segurança ocorre quando há uma ameaça ou violação que compromete a 
                <span className="font-semibold text-red-600 dark:text-red-400"> confidencialidade</span>, 
                <span className="font-semibold text-orange-600 dark:text-orange-400"> integridade</span> ou 
                <span className="font-semibold text-yellow-600 dark:text-yellow-400"> disponibilidade</span> de dados.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-red-200 dark:border-red-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400 mx-auto mb-2" />
                <CardTitle className="text-red-700 dark:text-red-400">Malware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Softwares maliciosos que comprometem sistemas
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto mb-2" />
                <CardTitle className="text-orange-700 dark:text-orange-400">DDoS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Ataques que sobrecarregam serviços
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-purple-700 dark:text-purple-400">Vazamento de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Exposição não autorizada de informações
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-blue-700 dark:text-blue-400">Acesso Indevido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Invasões e tentativas de comprometimento
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Processo de Resposta */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                O que é Resposta a Incidentes?
              </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
              A resposta a incidentes é o conjunto de ações tomadas para <span className="font-semibold text-teal-600 dark:text-teal-400">identificar</span>, 
              <span className="font-semibold text-cyan-600 dark:text-cyan-400"> conter</span>, 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> mitigar</span> e 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> prevenir</span> ameaças à segurança cibernética.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Identificação</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reconhecer rapidamente ameaças
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Contenção</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Impedir o avanço do incidente
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Mitigação</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reduzir impactos e danos
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Prevenção</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Evitar incidentes futuros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Proposta e Aprendizado Mescladas */}
      <section id="proposta-aprendizado" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6 px-4 py-2">
                Nossa Abordagem Inovadora
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                  Proposta & Aprendizado
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Combinamos <span className="font-semibold text-indigo-600 dark:text-indigo-400">gamificação</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> inteligência artificial</span> e 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> aprendizado colaborativo</span> 
                para revolucionar o ensino de cibersegurança.
              </p>
            </div>
          </div>

          {/* Módulos da Proposta */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 dark:text-blue-200 text-xl">Módulo de Inteligência</CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-300">
                    Sistema de IA para análise automática
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>Análise preditiva avançada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>Respostas automatizadas inteligentes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>Aprendizado contínuo adaptativo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-purple-800 dark:text-purple-200 text-xl">Módulo PoP</CardTitle>
                  <CardDescription className="text-purple-600 dark:text-purple-300">
                    Procedimentos operacionais padrão
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span>Workflows personalizados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span>Documentação integrada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span>Métricas de eficiência</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-400">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 border-green-200 dark:border-green-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                    <UserCheck className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-green-800 dark:text-green-200 text-xl">Módulo Hackers do Bem</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-300">
                    Treinamento e certificação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Simulações realistas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Certificações reconhecidas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Mentoria especializada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Seção de Aprendizado Inovador */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Aprendizado Gamificado
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Nossa plataforma transforma o aprendizado complexo de cibersegurança em uma experiência 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> envolvente e interativa</span>, 
                utilizando elementos de gamificação para manter os usuários motivados e engajados.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Gamificação Envolvente</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Pontuações, conquistas e rankings para motivar o progresso</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Aprendizado Adaptativo</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Conteúdo personalizado baseado no nível de conhecimento</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Casos Reais</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Simulações baseadas em incidentes reais da indústria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Certificações</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Reconhecimento oficial</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-10 w-10 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Progresso</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Acompanhamento detalhado</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Comunidade</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Colaboração entre pares</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Desafios</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Missões específicas</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Benefícios da Plataforma */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Benefícios da Nossa Abordagem</h4>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <h5 className="font-semibold text-blue-600 dark:text-blue-400 text-lg mb-2">Gamificação</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Aprendizado envolvente e motivador</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <h5 className="font-semibold text-purple-600 dark:text-purple-400 text-lg mb-2">IA Avançada</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Personalização inteligente</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h5 className="font-semibold text-green-600 dark:text-green-400 text-lg mb-2">Prática Real</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Simulações autênticas</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h5 className="font-semibold text-orange-600 dark:text-orange-400 text-lg mb-2">Resultados</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Melhoria contínua comprovada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Produtos Finais */}
      <section id="produtos" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-6 px-4 py-2">
                Produtos Finais
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-emerald-800 dark:from-white dark:to-emerald-200 bg-clip-text text-transparent">
                  Nossos Produtos
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Duas <span className="font-semibold text-emerald-600 dark:text-emerald-400">plataformas inovadoras</span> desenvolvidas 
                pelo projeto GT-LFI para revolucionar o ensino e a gestão de incidentes de cibersegurança.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Plataforma de Ensino Gamificado */}
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border-2 hover:border-emerald-300 dark:hover:border-emerald-600 bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-900/20 dark:to-gray-800 h-full flex flex-col">
                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Gamepad2 className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">Plataforma de Ensino Gamificado</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Para estudantes do programa Hackers do Bem
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Plataforma educacional <span className="font-semibold text-emerald-600 dark:text-emerald-400">gamificada </span> 
                    projetada para ensinar resposta a incidentes de cibersegurança de forma interativa e envolvente, 
                    utilizando cenários reais e elementos de gamificação.
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Simulações interativas de incidentes reais</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Sistema de pontuação e rankings</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Certificações e conquistas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Aprendizado adaptativo com IA</span>
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-4 mb-6 border border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">Público-Alvo</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Estudantes e participantes do programa Hackers do Bem, interessados em desenvolver habilidades práticas em resposta a incidentes de cibersegurança.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300"
                      disabled
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Em Desenvolvimento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Plataforma de Gerenciamento de Tickets */}
            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border-2 hover:border-blue-300 dark:hover:border-blue-600 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-800 h-full flex flex-col">
                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Settings className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">Plataforma de Gerenciamento</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Para profissionais dos Pontos de Presença (PoPs)
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Sistema <span className="font-semibold text-blue-600 dark:text-blue-400">inteligente de gestão </span> 
                    projetado para estagiários e profissionais dos PoPs, oferecendo ferramentas avançadas para 
                    categorização, análise e resposta a incidentes de segurança.
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Gestão inteligente de tickets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Categorização automática NIST/CERT</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Geração automática de playbooks</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Dashboard analítico avançado</span>
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-3">
                      <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Público-Alvo</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Estagiários e profissionais de cibersegurança que trabalham em Pontos de Presença, CSIRTs e SOCs, necessitando de ferramentas eficientes para gestão de incidentes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300"
                      disabled
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Em Desenvolvimento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Ferramentas Desenvolvidas */}
      <section id="ferramentas" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white mb-6 px-4 py-2">
                Componentes Técnicos
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-violet-800 dark:from-white dark:to-violet-200 bg-clip-text text-transparent">
                  Ferramentas Desenvolvidas
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold text-violet-600 dark:text-violet-400">Componentes especializados</span> desenvolvidos 
                para dar suporte às nossas plataformas principais, criando a base tecnológica necessária para o funcionamento dos produtos.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Anon-LFI */}
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border-2 hover:border-blue-300 dark:hover:border-blue-600 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-800">
                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">Anon-LFI</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Ferramenta de Anonimização de Tickets
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Componente essencial para anonimizar tickets de incidentes, removendo dados sensíveis 
                    de forma <span className="font-semibold text-blue-600 dark:text-blue-400">segura e eficiente</span>, 
                    permitindo o uso educacional dos dados preservando a privacidade.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Anonimização automática inteligente</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Preservação de dados úteis para análise</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Conformidade total com LGPD</span>
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Aplicação</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Integrada às duas plataformas principais para permitir o uso seguro de dados reais de incidentes em ambiente educacional e de treinamento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300" 
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código (Em breve)
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300" 
                      disabled
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Artigo (Em processo)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sentinel-LFI */}
            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border-2 hover:border-purple-300 dark:hover:border-purple-600 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/20 dark:to-gray-800">
                <CardHeader className="text-center pb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">Sentinel-LFI</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Motor de IA para Gestão de Incidentes
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Motor inteligente que alimenta ambas as plataformas com capacidades de 
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> categorização automática</span> 
                    seguindo padrões NIST e CERT, além de gerar playbooks e análises preditivas.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3">
                      <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Categorização automática NIST/CERT</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Geração inteligente de playbooks</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Análise preditiva e insights</span>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl p-4 mb-6 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Aplicação</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Motor central que fornece inteligência artificial para ambas as plataformas, adaptando-se ao contexto educacional ou profissional conforme necessário.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-purple-300 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300" 
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código (Em breve)
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-violet-300 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all duration-300" 
                      disabled
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Artigo (Em processo)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Tecnologias */}
      <section id="tecnologias" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <Badge className="bg-gradient-to-r from-slate-500 to-gray-500 text-white mb-6 px-4 py-2">
                Stack Tecnológico
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-slate-800 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Tecnologias Utilizadas
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stack tecnológico moderno utilizado no desenvolvimento do projeto, combinando 
                <span className="font-semibold text-slate-600 dark:text-slate-400"> inovação</span> e 
                <span className="font-semibold text-gray-600 dark:text-gray-400"> performance </span> 
                para criar soluções robustas e escaláveis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200/50 dark:border-blue-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">TypeScript</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Tipagem estática</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-100">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-cyan-50/50 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/20 border-cyan-200/50 dark:border-cyan-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">React</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">UI Library</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-700/20 dark:to-gray-600/20 border-gray-200/50 dark:border-gray-600/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-500 dark:to-gray-600 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Next.js</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">React Framework</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-teal-50/50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200/50 dark:border-teal-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Tailwind CSS</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">CSS Framework</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-400">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-green-50/50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 border-green-200/50 dark:border-green-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Express.js</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Backend Framework</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-500">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-red-50/50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 border-red-200/50 dark:border-red-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Google Gemini</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">AI Model</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-600">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200/50 dark:border-purple-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Vercel AI SDK</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">AI Integration</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-700">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50/50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200/50 dark:border-orange-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Pinecone</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Vector Database</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-800">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-yellow-50/50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200/50 dark:border-yellow-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Firebase</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Backend Services</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-900 col-span-2 md:col-span-1">
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-indigo-50/50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200/50 dark:border-indigo-700/50">
                <CardContent className="p-4 text-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-2 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Node.js</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Runtime</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       {/* Seção da Equipe */}
       <section id="equipe" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <div className="animate-in fade-in slide-in-from-bottom duration-1000">
               <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white mb-6 px-4 py-2">
                 Especialistas Dedicados
               </Badge>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-gray-900 to-violet-800 dark:from-white dark:to-violet-200 bg-clip-text text-transparent">
                   Nossa Equipe
                 </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                 Especialistas dedicados em <span className="font-semibold text-violet-600 dark:text-violet-400">cibersegurança</span> e 
                 <span className="font-semibold text-purple-600 dark:text-purple-400"> educação tecnológica</span>, unidos pela paixão de 
                 <span className="font-semibold text-blue-600 dark:text-blue-400"> transformar o aprendizado</span>.
               </p>
             </div>
           </div>

           {/* Coordenador */}
           <div className="mb-16">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
               <span className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                 Coordenador
               </span>
             </h3>
             <div className="flex justify-center">
               <div className="animate-in fade-in slide-in-from-bottom duration-1000">
                 <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 max-w-md bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-2 border-violet-200 dark:border-violet-700">
                   <CardContent className="p-8">
                     <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 border-4 border-violet-200 dark:border-violet-600">
                       <img 
                         src="/home/avatars/avatar-miani.jpg" 
                         alt="Dr. Rodrigo Sanches Miani"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Dr. Rodrigo Sanches Miani</h4>
                     <p className="text-violet-600 dark:text-violet-400 text-lg font-semibold mb-3">Coordenador</p>
                     <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                       Doutor em Engenharia Elétrica e pesquisador em Cibersegurança. Professor na Universidade Federal de Uberlândia, 
                       líder na coordenação de projetos inovadores em segurança digital.
                     </p>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>

           {/* Professores */}
           <div className="mb-16">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                 Professores Pesquisadores
               </span>
             </h3>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="animate-in fade-in slide-in-from-left duration-1000 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-purple-200 dark:border-purple-600">
                       <img 
                         src="/home/avatars/avatar-ereno.jpg" 
                         alt="Dr. Silvio Ereno Quincozes"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Dr. Silvio Ereno Quincozes</h4>
                     <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Doutor em Ciência da Computação com foco em Cibersegurança. Professor na Universidade Federal do Pampa.
                     </p>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-100 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-green-200 dark:border-green-600">
                       <img 
                         src="/home/avatars/avatar-kreutz.webp" 
                         alt="Dr. Diego Luis Kreutz"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Dr. Diego Luis Kreutz</h4>
                     <p className="text-green-600 dark:text-green-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Pesquisador em Cibersegurança e professor na Universidade Federal do Pampa.
                     </p>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-orange-200 dark:border-orange-600">
                       <img 
                         src="/home/avatars/avatar-bertholdo.png" 
                         alt="Dr. Leandro Bertholdo"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Dr. Leandro Bertholdo</h4>
                     <p className="text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3 flex-grow">
                       Doutor em redes com foco em segurança. Professor na Universidade Federal do Rio Grande do Sul.
                     </p>
                     <div className="mt-auto">
                       <Link href="https://www.linkedin.com/in/leandro-bertholdo-3379411/" target="_blank" 
                             className="text-orange-600 dark:text-orange-400 hover:text-orange-800 text-xs font-medium">
                         LinkedIn
                       </Link>
                     </div>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-right duration-1000 delay-300 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-indigo-200 dark:border-indigo-600">
                       <img 
                         src="/home/avatars/avatar-araujo.jpg" 
                         alt="Dr. Rafael Dias Araújo"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Dr. Rafael Dias Araújo</h4>
                     <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Doutor em Ciência da Computação e pesquisador em Informática na Educação e Interação Humano-Computador. Professor na UFU.
                     </p>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>

           {/* Bolsistas */}
           <div>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
               <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                 Bolsistas Pesquisadores
               </span>
             </h3>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="animate-in fade-in slide-in-from-left duration-1000 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-teal-200 dark:border-teal-600">
                       <img 
                         src="/home/avatars/avatar-felipe-scherer.png" 
                         alt="Felipe Homrich Scherer"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Felipe Homrich Scherer</h4>
                     <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 flex-grow">
                       Graduando de Engenharia de Software pela Universidade Federal do Pampa, com foco em pesquisas nas áreas de cibersegurança.
                     </p>
                     <div className="flex justify-center space-x-3 text-xs mt-auto">
                       <Link href="https://www.linkedin.com/in/felipehscherer/" target="_blank" 
                             className="text-teal-600 dark:text-teal-400 hover:text-teal-800 font-medium">
                         LinkedIn
                       </Link>
                       <Link href="http://lattes.cnpq.br/0515811498958707" target="_blank" 
                             className="text-green-600 dark:text-green-400 hover:text-green-800 font-medium">
                         Lattes
                       </Link>
                     </div>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-100 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-cyan-200 dark:border-cyan-600">
                       <img 
                         src="/home/avatars/avatar-dresch.png" 
                         alt="Felipe Nestor Dresch"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Felipe Nestor Dresch</h4>
                     <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 flex-grow">
                       Graduando em Engenharia de Software pela Universidade Federal do Pampa e Técnico em Informática pelo IFRS.
                     </p>
                     <div className="flex justify-center text-xs mt-auto">
                       <Link href="https://www.linkedin.com/in/felipe-dresch-066046237/" target="_blank" 
                             className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 font-medium">
                         LinkedIn
                       </Link>
                     </div>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-pink-200 dark:border-pink-600">
                       <img 
                         src="/home/avatars/avatar-filho.jpg" 
                         alt="Me. Sebastião A. de Jesus F."
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Me. Sebastião A. de Jesus F.</h4>
                     <p className="text-pink-600 dark:text-pink-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Doutorando em Ciência da Computação e Técnico de Laboratório de Informática na Universidade Federal de Uberlândia.
                     </p>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-300 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-yellow-200 dark:border-yellow-600">
                       <img 
                         src="/home/avatars/avatar-santana.jpg" 
                         alt="Alvaro Santana"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Alvaro Santana</h4>
                     <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 flex-grow">
                       Mestrando em Ciência da Computação pela Universidade Federal de Uberlândia e Consultor de Soluções na empresa Accenture.
                     </p>
                     <div className="flex justify-center text-xs mt-auto">
                       <Link href="https://www.linkedin.com/in/alvaro-s-santos/" target="_blank" 
                             className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 font-medium">
                         LinkedIn
                       </Link>
                     </div>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-emerald-200 dark:border-emerald-600">
                       <img 
                         src="/home/avatars/avatar-bandel.jpeg" 
                         alt="Carolina Bandel"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">Carolina Bandel</h4>
                     <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Graduanda em Gestão de Tecnologia da Informação pelo Senac SP.
                     </p>
                   </CardContent>
                 </Card>
               </div>

               <div className="animate-in fade-in slide-in-from-right duration-1000 delay-500 h-full">
                 <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 h-full flex flex-col">
                   <CardContent className="p-6 flex flex-col h-full">
                     <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border-4 border-slate-200 dark:border-slate-600">
                       <img 
                         src="/home/avatars/avatar-esteves.jpg" 
                         alt="João Pedro Ramires Esteves"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">João Pedro Ramires Esteves</h4>
                     <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">Pesquisador</p>
                     <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-grow">
                       Graduando em Ciências da Computação pela Universidade Federal de Uberlândia.
                     </p>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Seção de Financiadores e Parceiros */}
       <section id="financiadores" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <div className="animate-in fade-in slide-in-from-bottom duration-1000">
               <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-6 px-4 py-2">
                 Apoio Institucional
               </Badge>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                   Financiadores e Parceiros
                 </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                 Apoio institucional que torna nossa pesquisa possível, com 
                 <span className="font-semibold text-amber-600 dark:text-amber-400"> parceria estratégica</span> 
                 que impulsiona a inovação em cibersegurança.
               </p>
             </div>
           </div>
           
           <div className="flex justify-center">
             <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
               <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 max-w-4xl bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/30 border-2 border-amber-200 dark:border-amber-700">
                 <CardContent className="p-12 lg:p-16">
                   <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
                     <div className="group-hover:scale-110 transition-transform duration-300">
                       <img 
                         src="/home/logo-rnp.png" 
                         alt="RNP Logo" 
                         className="h-24 lg:h-28 object-contain filter drop-shadow-lg"
                       />
                     </div>
                     <div className="group-hover:scale-110 transition-transform duration-300">
                       <img 
                         src="/home/logo-hackers-do-bem.svg" 
                         alt="Hackers do Bem Logo" 
                         className="h-24 lg:h-28 object-contain filter drop-shadow-lg"
                       />
                     </div>
                   </div>
                   <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-2xl lg:text-3xl">
                     <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                       RNP & Hackers do Bem
                     </span>
                   </h3>
                   <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                     <span className="font-semibold">Rede Nacional de Ensino e Pesquisa</span> em parceria com o programa 
                     <span className="font-semibold"> Hackers do Bem</span>, promovendo a formação de especialistas em cibersegurança 
                     e o desenvolvimento de soluções inovadoras para resposta a incidentes.
                   </p>
                 </CardContent>
               </Card>
             </div>
           </div>
         </div>
       </section>

       {/* Footer */}
       <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
           {/* Main Footer Content */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {/* Brand Section */}
             <div className="col-span-1 sm:col-span-2 lg:col-span-1">
               <div className="flex items-center space-x-2 mb-4">
                 <div className="relative">
                   <Shield className="h-8 w-8 text-blue-400 transition-transform duration-300 hover:scale-110" />
                   <div className="absolute -inset-1 bg-blue-400/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                 </div>
                 <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">GT-LFI</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                 Transformando o aprendizado de cibersegurança através da inovação. 
                 Projeto de pesquisa desenvolvido em parceria com a RNP e Hackers do Bem.
               </p>
             </div>

             {/* Navigation Links */}
             <div className="col-span-1">
               <h3 className="font-semibold mb-4 text-white">Navegação</h3>
               <div className="space-y-2">
                 {navigationItems.slice(0, 3).map((item) => (
                   <button
                     key={item.id}
                     onClick={() => scrollTo(item.id)}
                     className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                   >
                     {item.label}
                   </button>
                 ))}
               </div>
             </div>

             {/* Contact Section */}
             <div className="col-span-1">
               <h3 className="font-semibold mb-4 text-white">Contato</h3>
               <div className="space-y-3">
                 <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                   <Mail className="h-4 w-4 flex-shrink-0" />
                   <a href="mailto:gt.lfi.rnp@gmail.com" className="break-all">
                     gt.lfi.rnp@gmail.com
                   </a>
                 </div>
                 <div className="flex items-center space-x-2 text-sm text-gray-400">
                   <MapPin className="h-4 w-4 flex-shrink-0" />
                   <span>Brasil</span>
                 </div>
               </div>
             </div>
           </div>

           {/* Bottom Section */}
           <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8">
             <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
               <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                 &copy; {new Date().getFullYear()} GT-LFI - Learning From Incidents. Todos os direitos reservados.
               </p>
               <div className="flex items-center space-x-4">
                 <button
                   onClick={toggleDarkMode}
                   className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                   aria-label="Toggle dark mode"
                 >
                   {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                 </button>
                 <button
                   onClick={() => scrollTo("inicio")}
                   className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                   aria-label="Voltar ao topo"
                 >
                   <ChevronUp className="h-4 w-4" />
                 </button>
               </div>
             </div>
           </div>
         </div>
       </footer>


     </div>
   )
 } 