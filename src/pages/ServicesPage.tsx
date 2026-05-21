import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/services'
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
  return (
    <>
      <Helmet>
        <title>Servicios — OpticPlatform</title>
        <meta name="description" content="Conocé todos los servicios ópticos que ofrecemos: exámenes visuales, lentes de contacto, armazones premium y más." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Servicios</h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Ofrecemos soluciones visuales completas con tecnología de vanguardia y atención personalizada.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Eye
          return (
            <Card key={service.id} className="transition-shadow hover:shadow-md">
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
    </section>
    </>
  )
}

export default ServicesPage
