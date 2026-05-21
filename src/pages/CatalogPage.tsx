import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'

const CatalogPage = () => {
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
    </section>
    </>
  )
}

export default CatalogPage
