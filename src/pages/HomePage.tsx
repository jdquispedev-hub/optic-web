import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>OpticPlatform — Tu óptica de confianza</title>
        <meta
          name="description"
          content="OpticPlatform combina tecnología y profesionalismo para ofrecerte los mejores productos ópticos. Calidad, precisión y estilo."
        />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Tu visión, nuestra{' '}
          <span className="text-blue-600">prioridad</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          En OpticPlatform combinamos tecnología y profesionalismo para ofrecerte
          los mejores productos ópticos. Calidad, precisión y estilo en un solo lugar.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Ver catálogo</Button>
          <Button size="lg" variant="outline">Contactanos</Button>
        </div>
      </section>
    </>
  )
}

export default HomePage
