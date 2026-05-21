import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'

const CatalogPage = () => {
  const { products, isLoading, error } = useProducts()

  return (
    <>
      <Helmet>
        <title>Catálogo — OpticPlatform</title>
        <meta name="description" content="Explorá nuestro catálogo de armazones, lentes de sol y lentes recetados. Calidad y estilo para tu visión." />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Catálogo</h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Descubrí nuestra colección de armazones, lentes de sol y lentes recetados.
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="mb-2 aspect-[4/3] rounded-lg bg-muted" />
                  <div className="h-4 w-3/4 rounded bg-muted" />
                </CardHeader>
                <CardContent>
                  <div className="mb-2 h-3 w-1/3 rounded bg-muted" />
                  <div className="h-3 w-full rounded bg-muted" />
                </CardContent>
                <CardFooter>
                  <div className="h-5 w-1/3 rounded bg-muted" />
                </CardFooter>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex aspect-[4/3] items-center justify-center rounded-lg bg-muted">
                    <span className="text-4xl text-muted-foreground/30">👓</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <Badge variant={product.available ? 'default' : 'secondary'}>
                      {product.available ? 'Disponible' : 'Agotado'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-2 text-xs text-muted-foreground">{product.brand}</p>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  {product.colors && (
                    <div className="mt-3 flex gap-1.5">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="size-4 rounded-full border"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <Button size="sm" disabled={!product.available}>
                    Consultar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default CatalogPage
