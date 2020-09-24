import React from 'react';
import './ImageLinkForm.css'
import Tilt from 'react-tilt'
import up from './up.jpg';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return(
        <div style={{textAlign:'center'}} >
            <p className='f3 '>
                {'This brain has the ability to detect the faces!!!!!Try it.'}

            </p>
            <div className='center' >
            <Tilt  >
                 <div className="Tilt-inner">
                 <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center ' type='tex' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                     onClick={onButtonSubmit}
                        >Detect</button>
                    </div>
                       </div>
                </Tilt>
                

                
            </div>
                
        </div>
    );
}

export default ImageLinkForm;