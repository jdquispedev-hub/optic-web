const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold">OpticPlatform</h3>
            <p className="text-sm text-muted-foreground">
              Tu óptica de confianza. Calidad y precisión para tu visión.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contacto</h3>
            <p className="text-sm text-muted-foreground">
              WhatsApp: +54 11 1234-5678
            </p>
            <p className="text-sm text-muted-foreground">
              info@opticplatform.com
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Ubicación</h3>
            <p className="text-sm text-muted-foreground">
              Av. Siempre Viva 123, CABA
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OpticPlatform. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
