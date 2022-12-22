import 'react-multi-carousel/lib/styles.css';
import './itemPageCarousel.css';
import './panel.css';
import LiveByNight from './images/liveByNight.png'
import MoonFall from './images/moonFall.png'
import SkyWalker from './images/skyWalker.png'
import StarTrekBeyond from './images/starTrekBeyond.png'
import RiPD from './images/ripd2.png'
import Dune2 from './images/newDune1.png'
import OutOfTheFurnace from './images/outOfTheFurnace.png'




const PanelThree = () => {




return (
  <div className="outer">
  <div className="title">
  <p>More Like This</p>
  </div>
    <div className="carousel-container" >
    <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <div className='imageBoundary'>
                <img className="images" src={LiveByNight} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={MoonFall} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={SkyWalker} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={StarTrekBeyond} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={RiPD} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={Dune2} alt="placeholder" />
              </div>
              <div className='imageBoundary'>
                <img className="images" src={OutOfTheFurnace} alt="placeholder" />
              </div>

            </div>
        </div>
    </div>
</div>
</div>

)


};

export default PanelThree;

