import { Helmet } from 'react-helmet-async'
import { useServices } from '@/hooks/useServices'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Eye, Contact2, Glasses, ScanLine, Sun, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Contact2,
  Glasses,
  ScanLine,
  Sun,
  Wrench,
}

const ServicesPage = () => {
  const { services, isLoading, error } = useServices()
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const gridRef = useScrollAnimation({ threshold: 0.05 })

  return (
    <>
      <Helmet>
        <title>Servicios — Óptica</title>
        <meta name="description" content="Conocé todos los servicios ópticos que ofrecemos." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div
          ref={headerRef.ref}
          className={`mb-16 text-center ${headerRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight">Nuestros Servicios</h1>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Ofrecemos atención visual integral con profesionales capacitados y equipo de última generación.
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border bg-card p-8">
                <div className="mb-4 h-6 w-1/3 rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
                <div className="mt-1 h-4 w-4/5 rounded bg-muted" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/50 p-8 text-center">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div
            ref={gridRef.ref}
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${gridRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Eye
              return (
                <div
                  key={service.id}
                  className="flex flex-col rounded-2xl border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {service.badge && (
                    <span className="mb-4 inline-flex w-fit rounded bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                      {service.badge}
                    </span>
                  )}
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-heading mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="/contacto"
                    className="inline-flex w-fit items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    Agendar
                  </a>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}

export default ServicesPage
