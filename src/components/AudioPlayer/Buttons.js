import React from 'react';
import Play from '../../img/play.svg';
import Pause from '../../img/pause.svg';
import Next from '../../img/next.svg';
import Back from '../../img/back.svg';

const Buttons = ({
    isPlaying,
    onPlayPause,
    onBack,
    onNext
}) => (
    <div className='audio__buttons'>
        <button
            type='button'
            className='back'
            aria-label='Previous'
            onClick={ onBack }
        >
            <Back />
        </button>
        
        { isPlaying ? (
            <button
                type='button'
                className='pause'
                onClick={ () => onPlayPause(false) }
                aria-label='Pause'
            >
                <Pause />
            </button>
        ) : (
            <button
                type='button'
                className='play'
                onClick={ () => onPlayPause(true) }
                aria-label='Play'
            >
                <Play />
            </button>
        ) }
        <button
            type='button'
            className='next'
            aria-label='Next'
            onClick={ onNext }
        >
            <Next />
        </button>
    </div>
);
  
export default Buttons;