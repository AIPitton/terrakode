import Hello from '@/components/Hello'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-screen">
        <Hero />
        <Navbar />
        <Hello />
      </div>
    </main>
  )
}
