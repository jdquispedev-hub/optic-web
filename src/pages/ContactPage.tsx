import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/data/company'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto — OpticPlatform</title>
        <meta name="description" content="Contactanos por WhatsApp, email o visitanos. Estamos para ayudarte con tu salud visual." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Contacto</h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Estamos para ayudarte. Escribinos o visitanos.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Envianos un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-sm text-muted-foreground">{companyInfo.phone}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Mail className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">{companyInfo.email}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Ubicación</h3>
                <p className="text-sm text-muted-foreground">{companyInfo.address}</p>
              </div>
            </CardContent>
          </Card>
          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full gap-2" size="lg">
              <MessageCircle className="size-5" />
              Escribinos por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactPage
