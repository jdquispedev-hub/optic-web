import { Helmet } from 'react-helmet-async'
import { Badge } from '@/components/ui/badge'
import { useProducts } from '@/hooks/useProducts'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useState } from 'react'

const categories = ['Todos', 'Armazones', 'Lentes de Sol', 'Lentes de Contacto', 'Accesorios']

const CatalogPage = () => {
  const { products, isLoading, error } = useProducts()
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const gridRef = useScrollAnimation({ threshold: 0.05 })
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Catálogo — Óptica</title>
        <meta name="description" content="Explorá nuestro catálogo de armazones, lentes de sol y más." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div
          ref={headerRef.ref}
          className={`mb-12 text-center ${headerRef.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight">Nuestro Catálogo</h1>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Explora nuestra colección de armazones, lentes de sol y accesorios para todas las edades.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-1/3 rounded bg-muted" />
                  <div className="h-5 w-3/4 rounded bg-muted" />
                  <div className="h-6 w-1/3 rounded bg-muted" />
                </div>
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
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${gridRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {filtered.map((product, index) => (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="relative flex aspect-[4/3] items-center justify-center bg-muted">
                  {product.badge && (
                    <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground hover:bg-accent">
                      {product.badge}
                    </Badge>
                  )}
                  <span className="text-5xl text-muted-foreground/30">👓</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1 text-xs text-muted-foreground">{product.brand}</p>
                  <h3 className="font-heading mb-1 text-base font-semibold">{product.name}</h3>
                  {product.colors && (
                    <div className="mb-3 flex gap-1.5">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="size-3.5 rounded-full border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toLocaleString('es-MX')}
                    </span>
                    <span className={`text-xs font-medium ${product.available ? 'text-primary' : 'text-destructive'}`}>
                      {product.available ? 'Disponible' : 'Agotado'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default CatalogPage
