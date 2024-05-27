import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/img/one.jpg';
import img2 from '../../assets/img/two.jpg';
import img3 from '../../assets/img/three.jpg';
import img4 from '../../assets/img/four.jpg';
//import img5 from '../assets/img/five.png';

import '../mark/marquee.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5} style={{borderRadius:'20px'}}>
          <div className="image_wrapper">
            <img src={img1} alt=""  style={{borderRadius:'100%'}}/>
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" style={{borderRadius:'80%'}}/>
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" style={{borderRadius:'100%'}}/>
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" style={{borderRadius:'100%'}}/>
          </div>
          {/* <div>
            <img src={img5} alt="" />
          </div> */}
          
         
        </Marquee>
      </div>
    </div>
  );
}

export default App;