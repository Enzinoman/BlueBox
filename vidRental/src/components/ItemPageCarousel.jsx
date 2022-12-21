import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './itemPageCarousel.css';
import PanelOne from './panelOne';
import PanelTwo from './panelTwo';
import PanelThree from './panelThree';


function DarkCarouselVariant() {
  const [panel, setPanel] = useState(1);




      const next = () => {
        if (panel === 1) {
            setPanel(2)
        }else {
          if (panel === 2) {
            setPanel(3)
          }else{
            setPanel(3)
          }

        }


      }

      const prev = () => {
        if (panel === 3) {
          setPanel(2)
        }else {
          if (panel === 2) {
          setPanel(1)
          }else{
            setPanel(1)
        }

      }
      }


  if(panel === 1){

    return (
  
      <div className="outer-container">
        <div className='btnDivL'>
  
        </div>
          <PanelOne />
        <div className='btnDiv'>
          <button onClick={next} className="right-arrow">
            <h1>&gt;</h1>
          </button>
        </div>
      </div>
    );
  
  }else{
        if(panel === 2){
          return (
            <div className="outer-container">
              <div className='btnDivL'>
                <button onClick={prev} className="left-arrow">
                  <h1>&lt;</h1>
                </button>
              </div>
                <PanelTwo />
              <div className='btnDiv'>
                <button onClick={next} className="right-arrow">
                  <h1>&gt;</h1>
                </button>
              </div>
            </div>
          );
        }else{
          return (
            <div className="outer-container">
              <div className='btnDivL'>
                <button onClick={prev} className="left-arrow">
                  <h1>&lt;</h1>
                </button>
              </div>
              <PanelThree />
              <div className='btnDiv'>
  
              </div>
            </div>
  
          );
        }
  
  }
}


export default DarkCarouselVariant;