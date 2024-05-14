import { CardSlide } from './components/slide/cardslide'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-neutral-50 p-8">
      <h1 className="text-4xl text-black">Black</h1>
      <CardSlide />
    </main>
  )
}
