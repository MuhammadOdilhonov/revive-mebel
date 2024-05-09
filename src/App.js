import React, { useEffect } from 'react';
import Navbar from './pages/Navbar/Navbar';
import Banner from './components/banner/banner';
import Cards from './components/cards/Cards';
import Portfolio from './components/portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './pages/Footer/footer';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Portfolio />
      <Footer/>
    </div>
  );
}

export default App;
