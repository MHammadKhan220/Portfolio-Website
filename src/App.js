import React from 'react'
import Header from "./Component/Header/Header"
import Contact from "./Component/Contact/Contact"
import Footer from './Component/Footer/Footer';
import Home from './Component/Header/Home';
import About from './Component/About/About';
import Skill from './Component/Skill/Skill';
import Projects from './Component/Projects/Projects';
import Cards from './Component/Skill/Cards';
import Review from './Component/Projects/Review';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
<Header />
<Home />
<About />
<Skill />
<Cards />
<Projects />
<Review />
<Contact />
<Footer />
    </div>
  )
}

export default App