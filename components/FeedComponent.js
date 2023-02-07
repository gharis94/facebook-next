import React from 'react';
import FeedInputComponent from './FeedInputComponent';
import Reel from './Reel';

const FeedComponent = () => {
  return (
    <div className='p-10'>
        <Reel/>
        <div className='overflow-y-auto'>
            <FeedInputComponent/>
        </div>
    </div>
  )
}

export default FeedComponent;