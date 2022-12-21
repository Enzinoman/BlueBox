import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
import './itemPageCarousel.css';
import './panel.css';
import Amsterdam from './images/amsterdam.png'
import Adam from './images/blackAdam.png'
import Pearl from './images/blackPearl.png'
import Panther from './images/blackPanther.png'
import Bol from './images/bookOfLife.png'
import Expendables1 from './images/expendables.png'
import Expendables2 from './images/expendables2.png'
import Expendables3 from './images/expendables3.png'
import Giants from './images/giants.png'
import Guardians from './images/guardians.png'
import Guardians2 from './images/guardians2.png'
import IntoDarkness from './images/guardians2.png'
import LastJedi from './images/lastJedi.png'
import JurassicWorld from './images/jurassicWorld.png'



const PanelTwo = () => {

    const movieThumbNailArray = [{Amsterdam}, {Adam}, {Pearl}, {Panther}, {Expendables1}, {Expendables2}, {Expendables3}, {Giants}, {Guardians}, {Guardians2}, {IntoDarkness}, {LastJedi}, {JurassicWorld}];
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()
  
      
    useEffect(() => {
      setLength(movieThumbNailArray.length)
  }, [movieThumbNailArray])
  
  
  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }
  
  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }


return (
    <div className="carousel-container" >
    <div className="carousel-wrapper">

        <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <div className='imageBoundary'>
              <img className="images" src={Expendables3} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Giants} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Guardians} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Guardians2} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={IntoDarkness} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={LastJedi} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={JurassicWorld} alt="placeholder" />
              </div>

            </div>
        </div>

    </div>
</div>


)


};

export default PanelTwo;


               {/* <div className='imageBoundary'>
                <img className="images" src={Expendables3} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Giants} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Guardians} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Guardians2} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={IntoDarkness} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={LastJedi} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={JurassicWorld} alt="placeholder" />
</div>*/}