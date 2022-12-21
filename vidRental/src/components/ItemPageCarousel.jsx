import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
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
            <div className='btnDiv'>
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        </div>
      <div className="leftPadding" />
        <PanelOne />
      <div className="rightPadding" />
      <div className='btnDiv'>
          <button onClick={next} className="right-arrow">
            &lt;
          </button>
        </div>
    </div>
  );

}else{
      if(panel === 2){
        return (
          <div className="outer-container">
          <div className='btnDiv'>
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
      </div>
    <div className="leftPadding" />
      <PanelTwo />
    <div className="rightPadding" />
    <div className='btnDiv'>
        <button onClick={next} className="right-arrow">
          &lt;
        </button>
      </div>
  </div>
        );
      }else{
        return (
          <div className="outer-container">
          <div className='btnDiv'>
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
      </div>
    <div className="leftPadding" />
      <PanelThree />
    <div className="rightPadding" />
    <div className='btnDiv'>
        <button onClick={next} className="right-arrow">
          &lt;
        </button>
      </div>
  </div>
        );
      }

}
}

// style={{marginLeft: 'auto', marginRight: 'auto'}} klahjsdkffjh

export default DarkCarouselVariant;

