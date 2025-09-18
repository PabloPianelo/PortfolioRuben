

import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import Hero from './pages/Hero/Hero'
import Navegation from './pages/Navegation/Navegation'

function Home() {

  return (
    <div>
      <Navegation />
      <main>
        <Hero />
        <About/>
        <Contact/>
       
      </main>
     <Footer />
    </div>
   
  )
}

export default Home
