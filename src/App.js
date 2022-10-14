import React from 'react'
// import ImgCarousel from './components/carousel/ImgCarousel';
import Agenda from './components/agenda/agenda'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Speakers from './components/speakers/speakers' 
// import Search from './components/search/Search';
// import Selects from './components/selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Speakers />
      <Agenda />
      <div className='App'>
      <Footer />
      </div>
    </div>

  );
}

export default App;


