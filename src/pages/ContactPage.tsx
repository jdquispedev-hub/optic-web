import { Helmet } from 'react-helmet-async'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { companyInfo } from '@/data/company'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const ContactPage = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const formRef = useScrollAnimation({ threshold: 0.1 })
  const infoRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      <Helmet>
        <title>Contacto — Óptica</title>
        <meta name="description" content="Contactanos por email, teléfono o visitanos." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div
          ref={headerRef.ref}
          className={`mb-16 text-center ${headerRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight">Contacto</h1>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Estamos aquí para ayudarte. Agenda tu cita o escríbenos cualquier duda.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div
            ref={formRef.ref}
            className={`lg:col-span-3 ${formRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="rounded-2xl border bg-card p-8">
              <h2 className="font-heading mb-6 text-2xl font-semibold">Envíanos un mensaje</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="phone" type="tel" placeholder="(618) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={4} />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div
            ref={infoRef.ref}
            className={`lg:col-span-2 space-y-6 ${infoRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            <div className="rounded-2xl bg-primary/5 p-8">
              <h2 className="font-heading mb-6 text-2xl font-semibold text-primary">Información</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">Dirección</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {companyInfo.address}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">Teléfono</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {companyInfo.phone}
                    {companyInfo.phone2 ? `\n${companyInfo.phone2}` : ''}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">Correo</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {companyInfo.email}
                    {companyInfo.email2 ? `\n${companyInfo.email2}` : ''}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">Horarios</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {companyInfo.schedule}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
