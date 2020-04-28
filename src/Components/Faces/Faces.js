import React from 'react';
import './Faces.css';

const Faces = ({imageurl, box}) => {
    return(
        <div className='ma' style={{display:'flex', justifyContent:'center'}}>
            <div className='absolute mt2'>
                <img id='input1' src={imageurl} alt=''/>
                <div className='bounding-box' style={{top:box.top, right: box.right, bottom:box.bottom, left:box.left}}></div>
            </div>
        </div>
    );
}

export default Faces;