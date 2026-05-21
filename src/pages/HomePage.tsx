import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const HomePage = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      <Helmet>
        <title>OpticPlatform — Tu óptica de confianza</title>
        <meta
          name="description"
          content="OpticPlatform combina tecnología y profesionalismo para ofrecerte los mejores productos ópticos."
        />
      </Helmet>
      <section
        ref={ref}
        className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-4 py-24 text-center sm:py-32"
      >
        <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tu visión, nuestra{' '}
            <span className="text-primary">prioridad</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            En OpticPlatform combinamos tecnología y profesionalismo para ofrecerte
            los mejores productos ópticos. Calidad, precisión y estilo en un solo lugar.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              render={<a href="/catalogo" />}
              size="lg"
            >
              Ver catálogo
            </Button>
            <Button
              render={<a href="/contacto" />}
              size="lg"
              variant="outline"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
