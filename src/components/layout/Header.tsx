import { Link } from 'react-router-dom'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/contacto', label: 'Contacto' },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Optic<span className="text-primary">Platform</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Abrir menú" className="sm:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" showCloseButton={false}>
              <div className="flex items-center justify-between p-4 pb-2">
                <span className="text-sm font-semibold">Menú</span>
                <SheetTrigger
                  render={
                    <Button variant="ghost" size="icon" aria-label="Cerrar menú" />
                  }
                >
                  <X className="size-5" />
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetTrigger
                    render={
                      <Link
                        to={link.to}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      />
                    }
                    key={link.to}
                  >
                    {link.label}
                  </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
