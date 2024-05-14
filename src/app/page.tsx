import { CardSlide } from './components/cardslide/cardslide'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-8 bg-neutral-50 p-8">
      <h1 className="text-link text-xl font-semibold">
        Ver outros Projetos do Proponente
      </h1>
      <CardSlide />
    </main>
  )
}
