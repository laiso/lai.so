import Hero from './Hero'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div data-section="hero">
        <Hero />
      </div>
      <div data-section="portfolio">
        <Portfolio />
      </div>
      <div data-section="about">
        <About />
      </div>
      <div data-section="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
