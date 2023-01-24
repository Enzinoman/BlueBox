import React from 'react';
import { Link } from 'react-router-dom'
import './interviewQuizzes.css'
import iq1 from './images/iq1.png'
import ia1 from './images/ia1.png'
import q2 from './images/q2.png'
import a2 from './images/a2.png'
import q3 from './images/q3.png'
import a3 from './images/a3.png'
import q4 from './images/q4.png'
import a4 from './images/a4.png'
import q5 from './images/q5.png'
import a5 from './images/a5.png'
import q6 from './images/q6.png'
import a6 from './images/a6.png'
import q7 from './images/q7.png'
import a7 from './images/a7.png'
import q8 from './images/q8.png'
import a8 from './images/a8.png'
import q9 from './images/q9.png'
import a9 from './images/a9.png'
import q10 from './images/q10.png'
import a10 from './images/a10.png'
import q11 from './images/q11.png'
import a11 from './images/a11.png'
import q12 from './images/q12.png'
import a12 from './images/a12.png'
import q13 from './images/q13.png'
import a13 from './images/a13.png'
import q14 from './images/q14.png'
import a14 from './images/a14.png'
import q15 from './images/q15.png'
import a15 from './images/a15.png'
import q16 from './images/q16.png'
import a16 from './images/a16.png'
import q17 from './images/q17.png'
import a17 from './images/a17.png'
import q18 from './images/q18.png'
import a18 from './images/a18.png'
import q19 from './images/q19.png'
import a19 from './images/a19.png'
import q20 from './images/q20.png'
import a20 from './images/a20.png'
import q21 from './images/q21.png'
import a21 from './images/a21.png'
import q22 from './images/q22.png'
import a22 from './images/a22.png'
import q23 from './images/q23.png'
import a23 from './images/a23.png'
import q24 from './images/q24.png'
import a24 from './images/a24.png'
import q25 from './images/q25.png'
import a25 from './images/a25.png'
import q26 from './images/q26.png'
import a26 from './images/a26.png'
import q27 from './images/q27.png'
import a27 from './images/a27.png'
import q28 from './images/q28.png'
import a28 from './images/a28.png'
import q29 from './images/q29.png'
import a29 from './images/a29.png'
import q30 from './images/q30.png'
import a30 from './images/a30.png'
import q31 from './images/q31.png'
import a31 from './images/a31.png'
import q32 from './images/q32.png'
import a32 from './images/a32.png'
import q33 from './images/q33.png'
import a33 from './images/a33.png'
import q34 from './images/q34.png'
import a34 from './images/a34.png'
import q35 from './images/q35.png'
import a35 from './images/a35.png'
import q36 from './images/q36.png'
import a36 from './images/a36.png'
import q37 from './images/q37.png'
import a37 from './images/a37.png'
import q38 from './images/q38.png'
import a38 from './images/a38.png'
import q39 from './images/q39.png'
import a39 from './images/a39.png'
import q40 from './images/q40.png'
import a40 from './images/a40.png'
import q41 from './images/q41.png'
import a41 from './images/a41.png'
import q42 from './images/q42.png'
import a42 from './images/a42.png'
import q43 from './images/q43.png'
import a43 from './images/a43.png'
import q44 from './images/q44.png'
import a44 from './images/a44.png'
import q45 from './images/q45.png'
import a45 from './images/a45.png'
import q46 from './images/q46.png'
import a46 from './images/a46.png'
import q47 from './images/q47.png'
import a47 from './images/a47.png'
import q48 from './images/q48.png'
import a48 from './images/a48.png'
import q49 from './images/q49.png'
import a49 from './images/a49.png'
import q50 from './images/q50.png'
import a50 from './images/a50.png'
import q51 from './images/q51.png'
import a51 from './images/a51.png'
import q52 from './images/q52.png'
import a52 from './images/a52.png'
import q53 from './images/q53.png'
import a53 from './images/a53.png'
import q54 from './images/q54.png'
import a54 from './images/a54.png'
import q55 from './images/q55.png'
import a55 from './images/a55.png'
import q56 from './images/q56.png'
import a56 from './images/a56.png'
import q57 from './images/q57.png'
import a57 from './images/a57.png'
import q58 from './images/q58.png'
import a58 from './images/a58.png'
import q59 from './images/q59.png'
import a59 from './images/a59.png'
import q60 from './images/q60.png'
import a60 from './images/a60.png'
import q61 from './images/q61.png'
import a61 from './images/a61.png'
import q62 from './images/q62.png'
import a62 from './images/a62.png'
import q63 from './images/q63.png'
import a63 from './images/a63.png'
import q64 from './images/q64.png'
import a64 from './images/a64.png'
import q65 from './images/q65.png'
import a65 from './images/a65.png'
import q66 from './images/q66.png'
import a66 from './images/a66.png'
import q67 from './images/q67.png'
import a67 from './images/a67.png'
import q68 from './images/q68.png'
import a68 from './images/a68.png'
import q69 from './images/q69.png'
import a69 from './images/a69.png'
import q70 from './images/q70.png'
import a70 from './images/a70.png'
import q71 from './images/q71.png'
import a71 from './images/a71.png'
import q72 from './images/q72.png'
import a72 from './images/a72.png'
import q73 from './images/q73.png'
import a73 from './images/a73.png'
import q74 from './images/q74.png'
import a74 from './images/a74.png'
import q75 from './images/q75.png'
import a75 from './images/a75.png'
import q76 from './images/q76.png'
import a76 from './images/a76.png'
import q77 from './images/q77.png'
import a77 from './images/a77.png'
import q78 from './images/q78.png'
import a78 from './images/a78.png'
import q79 from './images/q79.png'
import a79 from './images/a79.png'
import q80 from './images/q80.png'
import a80 from './images/a80.png'
import q81 from './images/q81.png'
import a81 from './images/a81.png'
import q82 from './images/q82.png'
import a82 from './images/a82.png'
import q83 from './images/q83.png'
import a83 from './images/a83.png'
import q84 from './images/q84.png'
import a84 from './images/a84.png'
import q85 from './images/q85.png'
import a85 from './images/a85.png'
import q86 from './images/q86.png'
import a86 from './images/a86.png'
import q87 from './images/q87.png'
import a87 from './images/a87.png'
import q88 from './images/q88.png'
import a88 from './images/a88.png'
import q89 from './images/q89.png'
import a89 from './images/a89.png'
import q90 from './images/q90.png'
import a90 from './images/a90.png'
import q91 from './images/q91.png'
import a91 from './images/a91.png'
import q92 from './images/q92.png'
import a92 from './images/a92.png'
import q93 from './images/q93.png'
import a93 from './images/a93.png'
import q94 from './images/q94.png'
import a94 from './images/a94.png'
import q95 from './images/q95.png'
import a95 from './images/a95.png'
import q96 from './images/q96.png'
import a96 from './images/a96.png'
import q97 from './images/q97.png'
import a97 from './images/a97.png'
import q98 from './images/q98.png'
import a98 from './images/a98.png'
import q99 from './images/q99.png'
import a99 from './images/a99.png'
import q100 from './images/q100.png'
import a100 from './images/a100.png'
import q101 from './images/q101.png'
import a101 from './images/a101.png'
import q102 from './images/q102.png'
import a102 from './images/a102.png'
import q103 from './images/q103.png'
import a103 from './images/a103.png'
import q104 from './images/q104.png'
import a104 from './images/a104.png'
import q105 from './images/q105.png'
import a105 from './images/a105.png'
import q106 from './images/q106.png'
import a106 from './images/a106.png'
import q107 from './images/q107.png'
import a107 from './images/a107.png'
import q108 from './images/q108.png'
import a108 from './images/a108.png'
import q109 from './images/q109.png'
import a109 from './images/a109.png'
import q110 from './images/q110.png'
import a110 from './images/a110.png'
import q111 from './images/q111.png'
import a111 from './images/a111.png'
import q112 from './images/q112.png'
import a112 from './images/a112.png'
import q113 from './images/q113.png'
import a113 from './images/a113.png'
import q114 from './images/q114.png'
import a114 from './images/a114.png'

// import RotationBox from "react-3d-rotation-box";



const Minis = () => {


return (


  <Link to="/interview" >
      <div className='outer-container'>
    <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={iq1} />
          </div>
          <div className='flip-card-back'>
            <img src={ia1} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q2} />
          </div>
          <div className='flip-card-back'>
            <img src={a2} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q3} />
          </div>
          <div className='flip-card-back'>
            <img src={a3} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q4} />
          </div>
          <div className='flip-card-back'>
            <img src={a4} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q5} />
          </div>
          <div className='flip-card-back'>
            <img src={a5} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q6} />
          </div>
          <div className='flip-card-back'>
            <img src={a6} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q7} />
          </div>
          <div className='flip-card-back'>
            <img src={a7} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q8} />
          </div>
          <div className='flip-card-back'>
            <img src={a8} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q9} />
          </div>
          <div className='flip-card-back'>
            <img src={a9} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q10} />
          </div>
          <div className='flip-card-back'>
            <img src={a10} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q11} />
          </div>
          <div className='flip-card-back'>
            <img src={a11} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q12} />
          </div>
          <div className='flip-card-back'>
            <img src={a12} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q13} />
          </div>
          <div className='flip-card-back'>
            <img src={a13} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q14} />
          </div>
          <div className='flip-card-back'>
            <img src={a14} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q15} />
          </div>
          <div className='flip-card-back'>
            <img src={a15} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q16} />
          </div>
          <div className='flip-card-back'>
            <img src={a16} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q17} />
          </div>
          <div className='flip-card-back'>
            <img src={a17} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q18} />
          </div>
          <div className='flip-card-back'>
            <img src={a18} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q19} />
          </div>
          <div className='flip-card-back'>
            <img src={a19} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q20} />
          </div>
          <div className='flip-card-back'>
            <img src={a20} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q21} />
          </div>
          <div className='flip-card-back'>
            <img src={a21} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q22} />
          </div>
          <div className='flip-card-back'>
            <img src={a22} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q23} />
          </div>
          <div className='flip-card-back'>
            <img src={a23} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q24} />
          </div>
          <div className='flip-card-back'>
            <img src={a24} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q25} />
          </div>
          <div className='flip-card-back'>
            <img src={a25} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q26} />
          </div>
          <div className='flip-card-back'>
            <img src={a26} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q27} />
          </div>
          <div className='flip-card-back'>
            <img src={a27} />
          </div>
        </div>
      </div>
     </div>
     <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q28} />
          </div>
          <div className='flip-card-back'>
            <img src={a28} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q29} />
          </div>
          <div className='flip-card-back'>
            <img src={a29} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q30} />
          </div>
          <div className='flip-card-back'>
            <img src={a30} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q31} />
          </div>
          <div className='flip-card-back'>
            <img src={a31} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q32} />
          </div>
          <div className='flip-card-back'>
            <img src={a32} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q33} />
          </div>
          <div className='flip-card-back'>
            <img src={a33} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q34} />
          </div>
          <div className='flip-card-back'>
            <img src={a34} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q35} />
          </div>
          <div className='flip-card-back'>
            <img src={a35} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q36} />
          </div>
          <div className='flip-card-back'>
            <img src={a36} />
          </div>
        </div>
      </div>
      </div>

      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q37} />
          </div>
          <div className='flip-card-back'>
            <img src={a37} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q38} />
          </div>
          <div className='flip-card-back'>
            <img src={a38} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q39} />
          </div>
          <div className='flip-card-back'>
            <img src={a39} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q40} />
          </div>
          <div className='flip-card-back'>
            <img src={a40} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q41} />
          </div>
          <div className='flip-card-back'>
            <img src={a41} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q42} />
          </div>
          <div className='flip-card-back'>
            <img src={a42} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q43} />
          </div>
          <div className='flip-card-back'>
            <img src={a43} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q44} />
          </div>
          <div className='flip-card-back'>
            <img src={a44} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q45} />
          </div>
          <div className='flip-card-back'>
            <img src={a45} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q46} />
          </div>
          <div className='flip-card-back'>
            <img src={a46} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q47} />
          </div>
          <div className='flip-card-back'>
            <img src={a47} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q48} />
          </div>
          <div className='flip-card-back'>
            <img src={a48} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q49} />
          </div>
          <div className='flip-card-back'>
            <img src={a49} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q50} />
          </div>
          <div className='flip-card-back'>
            <img src={a50} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q51} />
          </div>
          <div className='flip-card-back'>
            <img src={a51} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q52} />
          </div>
          <div className='flip-card-back'>
            <img src={a52} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q53} />
          </div>
          <div className='flip-card-back'>
            <img src={a53} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q54} />
          </div>
          <div className='flip-card-back'>
            <img src={a54} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q55} />
          </div>
          <div className='flip-card-back'>
            <img src={a55} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q56} />
          </div>
          <div className='flip-card-back'>
            <img src={a56} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q57} />
          </div>
          <div className='flip-card-back'>
            <img src={a57} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q58} />
          </div>
          <div className='flip-card-back'>
            <img src={a58} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q59} />
          </div>
          <div className='flip-card-back'>
            <img src={a59} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q60} />
          </div>
          <div className='flip-card-back'>
            <img src={a60} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q61} />
          </div>
          <div className='flip-card-back'>
            <img src={a61} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q62} />
          </div>
          <div className='flip-card-back'>
            <img src={a62} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q63} />
          </div>
          <div className='flip-card-back'>
            <img src={a63} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q64} />
          </div>
          <div className='flip-card-back'>
            <img src={a64} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q65} />
          </div>
          <div className='flip-card-back'>
            <img src={a65} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q66} />
          </div>
          <div className='flip-card-back'>
            <img src={a66} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q67} />
          </div>
          <div className='flip-card-back'>
            <img src={a67} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q68} />
          </div>
          <div className='flip-card-back'>
            <img src={a68} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q69} />
          </div>
          <div className='flip-card-back'>
            <img src={a69} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q70} />
          </div>
          <div className='flip-card-back'>
            <img src={a70} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q71} />
          </div>
          <div className='flip-card-back'>
            <img src={a71} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q72} />
          </div>
          <div className='flip-card-back'>
            <img src={a72} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q73} />
          </div>
          <div className='flip-card-back'>
            <img src={a73} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q74} />
          </div>
          <div className='flip-card-back'>
            <img src={a74} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q75} />
          </div>
          <div className='flip-card-back'>
            <img src={a75} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q76} />
          </div>
          <div className='flip-card-back'>
            <img src={a76} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q77} />
          </div>
          <div className='flip-card-back'>
            <img src={a77} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q78} />
          </div>
          <div className='flip-card-back'>
            <img src={a78} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q79} />
          </div>
          <div className='flip-card-back'>
            <img src={a79} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q80} />
          </div>
          <div className='flip-card-back'>
            <img src={a80} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q81} />
          </div>
          <div className='flip-card-back'>
            <img src={a81} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q82} />
          </div>
          <div className='flip-card-back'>
            <img src={a82} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q83} />
          </div>
          <div className='flip-card-back'>
            <img src={a83} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q84} />
          </div>
          <div className='flip-card-back'>
            <img src={a84} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q85} />
          </div>
          <div className='flip-card-back'>
            <img src={a85} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q86} />
          </div>
          <div className='flip-card-back'>
            <img src={a86} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q87} />
          </div>
          <div className='flip-card-back'>
            <img src={a87} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q88} />
          </div>
          <div className='flip-card-back'>
            <img src={a88} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q89} />
          </div>
          <div className='flip-card-back'>
            <img src={a89} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q90} />
          </div>
          <div className='flip-card-back'>
            <img src={a90} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q91} />
          </div>
          <div className='flip-card-back'>
            <img src={a91} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q92} />
          </div>
          <div className='flip-card-back'>
            <img src={a92} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q93} />
          </div>
          <div className='flip-card-back'>
            <img src={a93} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q94} />
          </div>
          <div className='flip-card-back'>
            <img src={a94} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q95} />
          </div>
          <div className='flip-card-back'>
            <img src={a95} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q96} />
          </div>
          <div className='flip-card-back'>
            <img src={a96} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q97} />
          </div>
          <div className='flip-card-back'>
            <img src={a97} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q98} />
          </div>
          <div className='flip-card-back'>
            <img src={a98} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q99} />
          </div>
          <div className='flip-card-back'>
            <img src={a99} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q100} />
          </div>
          <div className='flip-card-back'>
            <img src={a100} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q101} />
          </div>
          <div className='flip-card-back'>
            <img src={a101} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q102} />
          </div>
          <div className='flip-card-back'>
            <img src={a102} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q103} />
          </div>
          <div className='flip-card-back'>
            <img src={a103} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q104} />
          </div>
          <div className='flip-card-back'>
            <img src={a104} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q105} />
          </div>
          <div className='flip-card-back'>
            <img src={a105} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q106} />
          </div>
          <div className='flip-card-back'>
            <img src={a106} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q107} />
          </div>
          <div className='flip-card-back'>
            <img src={a107} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q108} />
          </div>
          <div className='flip-card-back'>
            <img src={a108} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q109} />
          </div>
          <div className='flip-card-back'>
            <img src={a109} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q110} />
          </div>
          <div className='flip-card-back'>
            <img src={a110} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q111} />
          </div>
          <div className='flip-card-back'>
            <img src={a111} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q112} />
          </div>
          <div className='flip-card-back'>
            <img src={a112} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q113} />
          </div>
          <div className='flip-card-back'>
            <img src={a113} />
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={q114} />
          </div>
          <div className='flip-card-back'>
            <img src={a114} />
          </div>
        </div>
      </div>
      </div>

    </div>
    
  </Link>

)



};

export default Minis