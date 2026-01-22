import { Hero } from './components/Hero'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Jorney } from './components/Jorney'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Jorney />
      <Footer />
    </div>
  )
}

export default App