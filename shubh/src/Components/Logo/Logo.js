import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import image from './brain.png'

const Logo =()=>{
    return(
        <div className='ma4 nt0'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner"> <img  src={image} style={{ paddingTop:'25px',paddingLeft:'15px',height:100}}/> </div>
                </Tilt>
        </div>
    );
}

export default Logo;