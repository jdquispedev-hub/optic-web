import { companyInfo } from '@/data/company'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading mb-3 text-xl font-bold">{companyInfo.name}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Cuidando tu salud visual desde 1998. Calidad y calidez en cada consulta.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Exámenes Visuales</li>
              <li>Lentes de Contacto</li>
              <li>Lentes de Sol</li>
              <li>Adaptación</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>{companyInfo.address}</li>
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.phone2}</li>
              <li>{companyInfo.email}</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Horarios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Lun-Vie: 9:00 - 19:00</li>
              <li>Sáb: 9:00 - 14:00</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          &copy; {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
