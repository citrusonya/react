import React, { useState, useEffect, useRef } from 'react'
import Buttons from "./Buttons";

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, src } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
            toNextTrack();
        } else {
            setTrackProgress(audioRef.current.currentTime);
        }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(src);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
        // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className='audio__player'>
            <img className='audio__background' src='./img/background.gif' />
            <div className='audio__info'>
                <h2 className='title'>{ title }</h2>
                <h3 className='artist'>{ artist }</h3>
                <Buttons
                    isPlaying={ isPlaying }
                    onPlayPause={ setIsPlaying }
                    onBack={ toPrevTrack }
                    onNext={ toNextTrack }
                />
                <input
                    type='range'
                    value={ trackProgress }
                    step='1'
                    min='0'
                    max={ duration ? duration : `${duration}` }
                    className='audio__progress'
                    onChange={ (e) => onScrub(e.target.value) }
                    onMouseUp={ onScrubEnd }
                    onKeyUp={ onScrubEnd }
                />
            </div>
        </div>
    );
};

export default AudioPlayer;