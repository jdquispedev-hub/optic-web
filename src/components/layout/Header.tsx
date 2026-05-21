const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="text-xl font-bold tracking-tight">
          Optic<span className="text-blue-600">Platform</span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Inicio
          </a>
          <a href="/servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Servicios
          </a>
          <a href="/catalogo" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Catálogo
          </a>
          <a href="/contacto" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contacto
          </a>
        </nav>
        <button className="sm:hidden" aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  )
}

export default Header
