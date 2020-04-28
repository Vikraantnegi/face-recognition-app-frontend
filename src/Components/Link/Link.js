import React from 'react';

const Link = ({onInput, onSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'Braniac is Eternal! Having powers that no-one can match. It can detect faces in any picture.'}
                <br/>
                {'GIVE IT A TRY!'} 
            </p>
            <div className='form ma5 mt3'>
            <div className='pa4 br3 shadow-5'>
                <input className='f4 pa2 w-60' type='text' onChange={onInput} />
                <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
            </div>
            </div>
        </div>   
    );
}

export default Link;