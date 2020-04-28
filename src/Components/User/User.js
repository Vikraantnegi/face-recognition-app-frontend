import React from 'react';

const User = ({name}) => {
    return(
        <div>
            <div className='white f3'>
                {`${name}, Welcome to your portal..`}
            </div>
        </div>
    );
}

export default User;