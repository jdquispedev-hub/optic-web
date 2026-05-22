import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    title: 'Exámenes Visuales',
    description: 'Diagnóstico preciso con tecnología de punta para cuidar tu salud visual.',
  },
  {
    title: 'Lentes de Contacto',
    description: 'Variedad de marcas y adaptación personalizada para tu comodidad.',
  },
  {
    title: 'Lentes de Sol',
    description: 'Protección UV con estilo. Encuentra el par perfecto para ti.',
  },
]

const HomePage = () => {
  const heroRef = useScrollAnimation({ threshold: 0.1 })
  const featuresRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      <Helmet>
        <title>Óptica — Tu visión, nuestra prioridad</title>
        <meta
          name="description"
          content="Expertos en salud visual con los mejores equipos de diagnóstico y una amplia selección de armazones."
        />
      </Helmet>

      <section
        ref={heroRef.ref}
        className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-4 py-24 text-center sm:py-32"
      >
        <div className={heroRef.isVisible ? 'animate-slide-up' : 'opacity-0'}>
          <h1 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Tu visión, nuestra{' '}
            <span className="text-primary">prioridad</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Expertos en salud visual con los mejores equipos de diagnóstico y una amplia selección
            de armazones de las mejores marcas.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agendar una cita
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section
        ref={featuresRef.ref}
        className="bg-muted/50 py-24"
      >
        <div className={`mx-auto max-w-6xl px-4 ${featuresRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-8 shadow-sm border">
                <h3 className="font-heading mb-3 text-xl font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
