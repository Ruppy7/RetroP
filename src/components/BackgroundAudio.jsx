// AudioPlayer.jsx
import React, { useRef, useEffect } from 'react';

const BackgroundAudio = ({ isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying){
      audio.volume = 0.6;
      audio.loop = true;
      audio.play();
      } else {
        audio.pause();
      }/*.then(() => {
        console.log('Audio is playing');
      }).catch(error => {
        console.error('Autoplay error:', error);
      });*/
    }
  },[isPlaying]);


  return (
    <>
      <audio ref={audioRef} src="/Music/sadbg.mp3" />
    </>
  );
};

export default BackgroundAudio;
