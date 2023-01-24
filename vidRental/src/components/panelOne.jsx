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




const PanelOne = () => {



return (
  <div className="outer">
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
</div>


)


};

export default PanelOne;


