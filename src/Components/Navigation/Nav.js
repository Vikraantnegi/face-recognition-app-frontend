import React from 'react';

const Nav = ({onRouteChange, isLoggedin}) => {
    if(isLoggedin){
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('Signout')} className='f4 link din black pa3 pointer'>Sign Out!</p>
            </nav>
        );
    }
    else {
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('Signin')} className='f4 link din black pa3 pointer'>Sign In!</p>
                <p onClick={() => onRouteChange('Register')} className='f4 link din black pa3 pointer'>Register!</p>
            </nav>
        );
    }
}

export default Nav;