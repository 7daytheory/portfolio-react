import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Footer, Tech } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    
    </BrowserRouter>
  )
}

export default App
