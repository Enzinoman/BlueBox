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
import IntoDarkness from './images/intoDarkness.png'
import LastJedi from './images/lastJedi.png'
import JurassicWorld from './images/jurassicWorld.png'



const PanelOne = () => {

    const movieThumbNailArray = [{Amsterdam}, {Adam}, {Pearl}, {Panther}, {Expendables1}, {Expendables2}, {Expendables3}, {Giants}, {Guardians}, {Guardians2}, {IntoDarkness}, {LastJedi}, {JurassicWorld}];
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()
  
      
    useEffect(() => {
      setLength(movieThumbNailArray.length)
  }, [movieThumbNailArray])
  
  


return (
    <div className="carousel-container" >
    <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <div className='imageBoundary'>
                <img className="images" src={Amsterdam} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Adam} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Pearl} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Panther} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Bol} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Expendables1} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Expendables2} alt="placeholder" />
              </div>

            </div>
        </div>
    </div>
</div>


)


};

export default PanelOne;


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