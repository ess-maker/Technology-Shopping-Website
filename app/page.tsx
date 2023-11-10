import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <main className={`main_padding  w-full overflow-hidden`}>
    <Navbar />
    <Hero />
    </main>
  )
}
