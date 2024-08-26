import React, { useRef } from 'react'

const useSound = (src) => {

    const audioRef = useRef(new Audio(src));

    const play = () => {
        audioRef.current.volume = 0.4;
        audioRef.current.play();
    };

    return play;
}

export default useSound