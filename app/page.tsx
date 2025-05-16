import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Cpu, WifiIcon, Cctv, Lock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <Zap className="h-6 w-6 text-red-600" />
            <span>JLO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-red-600">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-red-600">
              Servicios
            </Link>
            <Link href="#industria" className="text-sm font-medium transition-colors hover:text-red-600">
              Industria
            </Link>
            <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-red-600">
              Contacto
            </Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">
            <ArrowRight className="mr-2 h-4 w-4" /> Solicitar Servicio
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image src="/1234.jpg" alt="Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
          </div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 z-10 opacity-20">
            <div className="circuit-lines"></div>
          </div>

          {/* Content */}
          <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center p-2 bg-red-600/20 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-red-600 animate-pulse" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Tu mejor aliado en
                  <br />
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
                    Electricidad y Seguridad
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  En JLO hacemos que todo funcione. Instalaciones eléctricas seguras y sistemas de protección que te dan
                  tranquilidad. Soluciones a tu medida, sin complicaciones y con resultados garantizados.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <ArrowRight className="mr-2 h-4 w-4" /> Solicitar Servicio
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white/10 backdrop-blur-sm border-red-500/50 text-white hover:bg-red-500/20 hover:border-red-500 transition-all duration-300 group relative overflow-hidden btn-glow"
                >
                  <span className="relative z-10 flex items-center">
                    Conocer más
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                </Button>
              </div>

              {/* Service icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Zap className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-white text-sm">Certificaciones Eléctricas</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Cpu className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-white text-sm">Tableros Eléctricos</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Cctv className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-white text-sm">Sistemas CCTV</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Lock className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-white text-sm">Sistemas de Alarmas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="servicios">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Soluciones</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos servicios especializados para satisfacer todas tus necesidades eléctricas y de seguridad.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch py-8 md:py-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <Zap className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Certificaciones Eléctricas</h3>
                <p className="text-gray-500 text-center">
                  Garantizamos que tus instalaciones cumplan con todas las normativas vigentes de seguridad eléctrica.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <Cpu className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Tableros Eléctricos</h3>
                <p className="text-gray-500 text-center">
                  Diseñamos e instalamos tableros eléctricos personalizados para todo tipo de proyectos residenciales e
                  industriales.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <Cctv className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Sistemas CCTV</h3>
                <p className="text-gray-500 text-center">
                  Implementamos circuitos cerrados de televisión con cámaras IP de alta definición para monitoreo en
                  tiempo real.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <Lock className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Sistemas de Alarmas</h3>
                <p className="text-gray-500 text-center">
                  Ofrecemos sistemas de alarmas inalámbricas con sensores de exterior para la máxima seguridad de tu
                  hogar o negocio.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Adecuaciones Eléctricas</h3>
                <p className="text-gray-500 text-center">
                  Realizamos adecuaciones y mejoras en instalaciones eléctricas existentes para optimizar su
                  funcionamiento y seguridad.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-red-100 p-4 rounded-full">
                  <WifiIcon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Enlaces de Internet</h3>
                <p className="text-gray-500 text-center">
                  Instalamos y configuramos enlaces de internet confiables para garantizar una conexión estable y
                  segura.
                </p>
                <Link href="#" className="text-red-600 flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="industria">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="electricas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-red-600">
                <TabsTrigger value="electricas" className="text-white data-[state=active]:bg-red-800">
                  Instalaciones Eléctricas
                </TabsTrigger>
                <TabsTrigger value="seguridad" className="text-white data-[state=active]:bg-red-800">
                  Sistemas de Seguridad
                </TabsTrigger>
                <TabsTrigger value="certificaciones" className="text-white data-[state=active]:bg-red-800">
                  Certificaciones
                </TabsTrigger>
                <TabsTrigger value="internet" className="text-white data-[state=active]:bg-red-800">
                  Conectividad
                </TabsTrigger>
              </TabsList>
              <TabsContent value="electricas" className="p-6 border rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Instalaciones Eléctricas Profesionales</h3>
                    <p className="text-gray-500 mb-4">
                      Realizamos todo tipo de instalaciones eléctricas para hogares, comercios e industrias,
                      garantizando el cumplimiento de las normativas vigentes y la máxima seguridad.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Instalaciones residenciales
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Instalaciones comerciales
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Instalaciones industriales
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Tableros eléctricos personalizados
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/electricista.jpg"
                      alt="Instalaciones Eléctricas"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="seguridad" className="p-6 border rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Sistemas de Seguridad Avanzados</h3>
                    <p className="text-gray-500 mb-4">
                      Protegemos tu hogar o negocio con sistemas de seguridad de última generación, incluyendo cámaras
                      IP, alarmas y sensores de movimiento.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Cámaras IP de alta definición
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Circuitos CCTV con monitoreo remoto
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Alarmas inalámbricas
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Sensores de exterior con detección inteligente
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/camara.jpg"
                      alt="Sistemas de Seguridad"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certificaciones" className="p-6 border rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Certificaciones Eléctricas</h3>
                    <p className="text-gray-500 mb-4">
                      Ofrecemos servicios de certificación eléctrica para garantizar que tus instalaciones cumplan con
                      todas las normativas de seguridad vigentes.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Certificación TE1 para instalaciones nuevas
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Certificación TE2 para ampliaciones
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Inspecciones de seguridad eléctrica
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Regularización de instalaciones
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/luminaria.jpg"
                      alt="Certificaciones Eléctricas"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="internet" className="p-6 border rounded-b-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Soluciones de Conectividad</h3>
                    <p className="text-gray-500 mb-4">
                      Implementamos soluciones de conectividad confiables para garantizar una conexión a internet
                      estable y segura en cualquier entorno.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Enlaces de internet dedicados
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Redes WiFi para empresas
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Cableado estructurado
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-red-600 mr-2" />
                        Soluciones de conectividad para zonas rurales
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/enlace.jpg"
                      alt="Soluciones de Conectividad"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Gestiona tus proyectos eléctricos y de seguridad de forma sencilla
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entrega a tus proyectos una experiencia profesional que aumente la seguridad y eficiencia. Configura
                  tus sistemas eléctricos y de seguridad con JLO, expertos en soluciones integrales.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <ArrowRight className="mr-2 h-4 w-4" /> Solicitar Presupuesto
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder-4k229.png"
                  alt="Gestión de Proyectos Eléctricos"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white" id="contacto">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  ¿Listo para mejorar tus instalaciones eléctricas y sistemas de seguridad?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos hoy mismo para recibir asesoramiento personalizado y un presupuesto sin compromiso.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>contacto@jlo.cl</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>+56 9 1234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    <span>Santiago, Chile</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white text-black rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Solicita un presupuesto</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" className="border rounded-md p-2" placeholder="Tu nombre" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="border rounded-md p-2" placeholder="tu@email.com" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input id="phone" type="tel" className="border rounded-md p-2" placeholder="+56 9 1234 5678" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="service">Servicio que necesitas</label>
                    <select id="service" className="border rounded-md p-2">
                      <option value="">Selecciona un servicio</option>
                      <option value="certificaciones">Certificaciones Eléctricas</option>
                      <option value="instalaciones">Instalaciones Eléctricas</option>
                      <option value="tableros">Tableros Eléctricos</option>
                      <option value="cctv">Sistemas CCTV</option>
                      <option value="alarmas">Sistemas de Alarmas</option>
                      <option value="internet">Enlaces de Internet</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      className="border rounded-md p-2 min-h-[100px]"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Enviar Solicitud</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-2xl">
                <Zap className="h-6 w-6 text-red-600" />
                <span>JLO</span>
              </div>
              <p className="text-gray-400">
                Soluciones eléctricas y de seguridad para hogares, comercios e industrias.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Certificaciones Eléctricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instalaciones Eléctricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tableros Eléctricos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sistemas CCTV
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <ArrowRight className="mr-2 h-4 w-4 text-red-600" />
                  contacto@jlo.cl
                </li>
                <li className="flex items-center text-gray-400">
                  <ArrowRight className="mr-2 h-4 w-4 text-red-600" />
                  +56 9 1234 5678
                </li>
                <li className="flex items-center text-gray-400">
                  <ArrowRight className="mr-2 h-4 w-4 text-red-600" />
                  Santiago, Chile
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>© 2025 JLO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
