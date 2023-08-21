import './App.css';
import React, {useEffect} from 'react'
import Cyberdropsnav from './Components/Cyberdropsnav';
import Herosection from './Components/Herosection';
import Howitworks from './Components/Howitworks';
import Meetup from './Components/Meetup';
import Roadmap from './Components/Roadmap';
import Ouralgo from './Components/Ouralgo';
import Ourmission from './Components/Ourmission';
import Partners from './Components/Partners';
import './assets/css/Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faqsection from './Components/Faqsection';
import Footer from './Components/Footer';
import Whatwedo from './Components/Whatwedo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './Components/Preloader';
  function App() {
    useEffect(() => {
      AOS.init();

      const preloader = document.getElementById('preloader')
      setTimeout(() => {
        preloader.classList.add('d-none')
        preloader.classList.add('pointer-event-none')
        document.body.classList.remove('overflow-hidden')
      }, 1500)
      document.body.classList.add('overflow-hidden')



    }, [])
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Preloader/>
        <Cyberdropsnav />
        <Herosection />
        <Ourmission />
        <Partners />
        <Ouralgo />
        <Whatwedo />
        <Howitworks />
        <Meetup />
        <Roadmap />
        <Faqsection />
        <Footer />
      </div>


    </>
  );
}

export default App;
