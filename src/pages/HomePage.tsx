import { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  Eye,
  Glasses,
  Sun,
  Calendar,
  ChevronRight,
  Star,
  Sparkles,
  Award,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react'

// Subcomponente: Simulador de Claridad Visual (Vision Simulator)
const VisionSimulator = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      id="vision-simulator"
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl select-none cursor-ew-resize group"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Blurry Vision (Background) */}
      <div className="absolute inset-0">
        <img
          src="/hero_eyewear.png"
          alt="Simulación de visión borrosa sin lentes"
          className="h-full w-full object-cover filter blur-[7px] brightness-[0.85] contrast-[1.05]"
          draggable="false"
        />
        <div className="absolute bottom-6 right-6 rounded-full bg-black/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          Visión Borrosa (Sin Lentes)
        </div>
      </div>

      {/* Sharp Vision (Foreground, sliding) */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-75"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="/hero_eyewear.png"
          alt="Simulación de visión nítida y cristalina con lentes de Óptica"
          className="absolute inset-0 h-full w-full object-cover brightness-[1.02]"
          style={{
            width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : '500px',
            maxWidth: 'none'
          }}
          draggable="false"
        />
        <div className="absolute bottom-6 left-6 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg whitespace-nowrap">
          Claridad Óptica ✨
        </div>
      </div>

      {/* Slider Bar and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary text-primary-foreground shadow-2xl transition-transform duration-200 group-hover:scale-110">
          <Sparkles className="size-4 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: <Eye className="size-6" />,
    title: 'Exámenes Optométricos',
    description: 'Diagnósticos de alta precisión utilizando tecnología computarizada de vanguardia para detectar variaciones visuales.',
    badge: 'Tecnológico'
  },
  {
    icon: <Glasses className="size-6" />,
    title: 'Monturas de Diseñador',
    description: 'Una cuidada selección de armazones que combinan la ergonomía de vanguardia con las últimas tendencias de la moda mundial.',
    badge: 'Exclusivo'
  },
  {
    icon: <Sun className="size-6" />,
    title: 'Protección Solar UV',
    description: 'Lentes de sol con filtros polarizados de máxima calidad para proteger tus ojos con estilo bajo cualquier condición lumínica.',
    badge: 'Protección'
  },
]

const categories = [
  {
    title: 'Minimalismo Moderno',
    description: 'Monturas ultraligeras de titanio y acetato italiano.',
    tag: 'Tendencia 2026',
    gradient: 'from-primary/20 via-primary/5 to-transparent',
    icon: <Award className="size-6 text-primary" />
  },
  {
    title: 'Deportivo y Dinámico',
    description: 'Máxima ergonomía y filtros solares de alto rendimiento.',
    tag: 'Rendimiento',
    gradient: 'from-accent/20 via-accent/5 to-transparent',
    icon: <Sparkles className="size-6 text-accent" />
  },
  {
    title: 'Clásico Atemporal',
    description: 'Siluetas retro elegantes rediseñadas para la vida urbana.',
    tag: 'Esenciales',
    gradient: 'from-primary/10 via-accent/10 to-transparent',
    icon: <ShieldCheck className="size-6 text-primary" />
  }
]

const HomePage = () => {
  const heroRef = useScrollAnimation({ threshold: 0.05 })
  const featuresRef = useScrollAnimation({ threshold: 0.1 })
  const catalogRef = useScrollAnimation({ threshold: 0.1 })
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 })
  const ctaRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      <Helmet>
        <title>Óptica — Tu visión, redefinida con claridad y estilo</title>
        <meta
          name="description"
          content="Descubre el cuidado visual premium. Ofrecemos exámenes optométricos de alta precisión y una selección de monturas exclusivas de diseñador."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        id="hero"
        className="relative overflow-hidden bg-grid pt-16 pb-24 md:pt-24 md:pb-32"
      >
        {/* Glow ambient auras */}
        <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 -right-32 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />

        <div className={`mx-auto max-w-6xl px-4 transition-all duration-1000 ${heroRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Hero Left Content */}
            <div className="flex flex-col text-left lg:col-span-7">
              <div className="mb-6 inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
                <Sparkles className="size-3.5 animate-spin-slow" />
                <span>Salud Visual de Vanguardia</span>
              </div>
              
              <h1 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight md:leading-[1.1]">
                La claridad que tu vida <br />
                <span className="relative inline-block text-primary">
                  merece experimentar.
                  <span className="absolute bottom-1 left-0 h-1.5 w-full rounded bg-accent/40 -z-10" />
                </span>
              </h1>
              
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Fusionamos diagnósticos médicos de alta precisión con colecciones exclusivas de armazones de diseñador para elevar tu calidad de vida y estilo personal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  id="cta-agenda-hero"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="mr-2 size-4" />
                  Agendar una cita
                </Link>
                <Link
                  to="/catalogo"
                  id="cta-catalogo-hero"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-muted hover:border-foreground/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explorar Catálogo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              {/* Minimal Trust Badge */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8 text-left">
                <div>
                  <h4 className="text-2xl font-bold font-heading text-primary">100%</h4>
                  <p className="text-xs text-muted-foreground">Satisfacción y garantía</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-heading text-primary">+15k</h4>
                  <p className="text-xs text-muted-foreground">Pacientes felices</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-heading text-primary">20+</h4>
                  <p className="text-xs text-muted-foreground">Marcas exclusivas</p>
                </div>
              </div>
            </div>

            {/* Hero Right Widget (Simulator) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary/10 to-accent/10 -z-10 blur-xl opacity-80" />
              <VisionSimulator />
              
              {/* Micro interactive indicator card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl glassmorphism p-4 shadow-xl max-w-[200px] animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 text-accent">
                    <Eye className="size-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Prueba el slider</h5>
                    <p className="text-[10px] text-muted-foreground">Arrastra para corregir el enfoque</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services/Features Grid */}
      <section
        ref={featuresRef.ref}
        id="servicios-destacados"
        className="bg-card py-24 border-y"
      >
        <div className={`mx-auto max-w-6xl px-4 transition-all duration-1000 ${featuresRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Cuidado visual de nivel superior
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Nos enfocamos en brindar soluciones oftalmológicas integrales uniendo experiencia médica y diseño exclusivo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-3xl bg-background p-8 border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="mb-6 inline-flex rounded-2xl bg-secondary p-4 text-primary transition-all duration-300 group-hover:scale-110">
                  {f.icon}
                </div>
                
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {f.title}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    {f.badge}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {f.description}
                </p>
                
                <div className="mt-6 flex items-center text-xs font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Saber más</span>
                  <ChevronRight className="size-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Showrooms / Catalog Categories */}
      <section
        ref={catalogRef.ref}
        id="categorias-destacadas"
        className="py-24 bg-muted/40 relative"
      >
        <div className={`mx-auto max-w-6xl px-4 transition-all duration-1000 ${catalogRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Colección Selecta
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Diseños exclusivos fabricados con materiales duraderos, pensados para aportar sofisticación a tu día a día.
              </p>
            </div>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 group self-start"
            >
              <span>Ver catálogo completo</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Asymmetric color aura */}
                <div className={`absolute -inset-px bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`} />

                <div className="flex justify-between items-start mb-6">
                  <div className="rounded-xl bg-muted p-3 group-hover:bg-background transition-colors duration-300">
                    {c.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-muted-foreground/80 bg-muted/50 rounded-full px-3 py-1">
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-heading mb-3 text-xl font-bold text-foreground">
                  {c.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {c.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/80 group-hover:text-primary transition-colors">
                  <span>Explorar categoría</span>
                  <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (High Trust Proof) */}
      <section
        ref={testimonialsRef.ref}
        id="testimonios"
        className="py-24 bg-card border-t"
      >
        <div className={`mx-auto max-w-5xl px-4 transition-all duration-1000 ${testimonialsRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              La experiencia de nuestros pacientes
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              La máxima satisfacción y salud visual de quienes confían en nosotros es nuestro orgullo diario.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between rounded-3xl border bg-background p-8 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="mb-4 flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm italic mb-6">
                  "La experiencia fue impecable. El examen visual computarizado detectó un problema menor de enfoque que otros habían pasado por alto. Ahora trabajo frente al monitor sin fatiga alguna y mis armazones reciben elogios constantes de colegas."
                </p>
              </div>
              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/testimonial_avatar.png"
                    alt="Foto de Carlos Mendoza"
                    className="size-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Carlos Mendoza</h4>
                    <p className="text-xs text-muted-foreground">Diseñador de Interiores</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                  Cliente Verificado
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between rounded-3xl border bg-background p-8 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="mb-4 flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm italic mb-6">
                  "Busqué durante meses unos lentes que combinaran comodidad técnica y un diseño realmente elegante. En Óptica encontré un asesoramiento personalizado excepcional y una variedad de marcas de primera categoría. ¡Muy recomendado!"
                </p>
              </div>
              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-sm border-2 border-primary/20">
                    ER
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Dra. Elena Rostova</h4>
                    <p className="text-xs text-muted-foreground">Investigadora Científica</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                  Cliente VIP
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Conversional Call to Action (CTA) */}
      <section
        ref={ctaRef.ref}
        id="reservar-cita-cta"
        className="py-16 bg-background relative overflow-hidden"
      >
        <div className={`mx-auto max-w-5xl px-4 transition-all duration-1000 ${ctaRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground shadow-2xl md:px-16">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                ¿Cuándo fue tu último examen de la vista?
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                Los expertos recomiendan realizar un control preventivo al menos una vez al año. Agenda tu evaluación hoy mismo con nuestros especialistas.
              </p>
              
              <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  id="cta-agenda-final"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-xl transition-all hover:bg-accent/90 hover:scale-105 active:scale-100"
                >
                  <Calendar className="mr-2 size-4" />
                  Agendar Examen Visual
                </Link>
                <Link
                  to="/servicios"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-white/20"
                >
                  Conocer Servicios
                </Link>
              </div>

              {/* Quality reassurance list */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-primary-foreground/80">
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-accent" />
                  <span>Atención en 30 minutos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-accent" />
                  <span>Especialistas Colegiados</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-accent" />
                  <span>Equipos Médicos de Alta Gama</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
