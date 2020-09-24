import React from 'react';
import './FaceRecognition.css'
const FaceRecognition =({ imageUrl, box})=>{
    return(
        <div classname='center ma'>
            <div>
            <img id='inputimage' src={imageUrl} width='500px' height='auto' style={{paddingTop:'30px'}}/>
            <div className='bounding-box' style={{top:box.topRow ,right:box.rightCol ,bottom:box.bottomRow, left:box.leftCol}}></div>
            
            </div>
        </div>
      
    );
}

export default FaceRecognition;