import React from 'react'
import Player from '../components/AudioPlayer/AudioPlayer'
import tracks from './tracks';

const AudioPlayer = () => {
	return (
		<div className='container'>
			<Player tracks={ tracks }/>
		</div>
	)
}
export default AudioPlayer