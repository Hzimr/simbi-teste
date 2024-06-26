import { Slide } from './components/slide/slide'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-8 bg-neutral-50 p-8">
      <h1 className="text-xl font-semibold text-link">
        Ver outros Projetos do Proponente
      </h1>
      <div className="h-[70vh] w-[90vw] ">
        <Slide />
      </div>
    </main>
  )
}
