import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-indigo-200/60 dark:selection:bg-indigo-400/30">
      {/* Gradient backdrop for subtle depth */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-[-10%] h-[40vh] bg-gradient-to-b from-indigo-200/40 to-transparent dark:from-indigo-500/10" />
      </div>

      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
