// AudioPlayer.jsx
import React, { useRef, useEffect, useState } from 'react';

const BackgroundAudio = ({ isPlaying }) => {
  const audioRef = useRef(null);
  let playing = isPlaying;

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && isPlaying) {
      audio.volume = 0.6;
      audio.loop = true;
      audio.play();/*.then(() => {
        console.log('Audio is playing');
      }).catch(error => {
        console.error('Autoplay error:', error);
      });*/
    }
  },[]);


  return (
    <>
      <audio ref={audioRef} src="/assets/Music/sadbg.mp3" />
    </>
  );
};

export default BackgroundAudio;
