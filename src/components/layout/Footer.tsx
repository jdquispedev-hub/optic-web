import { Phone, Mail, MapPin } from 'lucide-react'
import { companyInfo } from '@/data/company'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold">{companyInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              {companyInfo.slogan}. Calidad y precisión para tu visión.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contacto</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 shrink-0" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4 shrink-0" />
              <span>{companyInfo.email}</span>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Ubicación</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{companyInfo.address}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
