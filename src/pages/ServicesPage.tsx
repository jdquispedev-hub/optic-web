import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
        <title>Servicios — OpticPlatform</title>
        <meta name="description" content="Conocé todos los servicios ópticos que ofrecemos." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div
          ref={headerRef.ref}
          className={`mb-16 text-center ${headerRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Servicios</h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Ofrecemos soluciones visuales completas con tecnología de vanguardia y atención personalizada.
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="mb-2 size-10 rounded-lg bg-muted" />
                  <div className="h-5 w-2/3 rounded bg-muted" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="mt-1 h-4 w-4/5 rounded bg-muted" />
                </CardContent>
              </Card>
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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Eye
              return (
                <Card
                  key={service.id}
                  className="transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}

export default ServicesPage
