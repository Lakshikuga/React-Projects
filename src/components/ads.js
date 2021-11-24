import React from 'react';
import img2 from './train-789.png'; // Tell webpack this JS file uses this image
import img3 from './train-769.png';
import img1 from './train-607.png';
import v1 from './scalable-ads.mp4';


function Ads() {
  // Import result is the URL of your image
  return(
      <><><p></p><><h1>Ad Image Generation</h1><><><img src={img1} alt="Img1" /><img src={img2} alt="Img2" /><img src={img3} alt="Img3" /></><div>
         <video src={v1} autoPlay='true' />
      </div></></></></>

  );
}

export default Ads;
