

import { educationData, experienceData } from './data/data'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import Hero from './pages/Hero/Hero'
import Navegation from './pages/Navegation/Navegation'
import Projects from './pages/Proyect/Proyect'
import InfoSkill from './Utiles/InfoSkill'

function Home() {

  return (
    <div>
      <Navegation />
      <main>
        <Hero />
        <About/>
       
        {/* education */}
        <InfoSkill  id={"educacion"} titule="Educacíon" data={educationData} bgColor="Education"  icon="University"/>
        {/* <Experience/> */}
       <InfoSkill  id={"experiencia"} titule="Experiencia" data={experienceData} bgColor="Experiencie"  icon="Building"/>
       <Projects/>
       <Contact/>
      </main>
     <Footer />
    </div>
   
  )
}

export default Home
