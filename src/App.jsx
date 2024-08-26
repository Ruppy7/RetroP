import React, { useState } from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import Background from './components/Background';
import './App.css';
import Footer from './components/Footer';
import PacmanComp from './components/PacmanComp';
import LoadingBar from './components/LoadingBar';
import BackgroundAudio from './components/BackgroundAudio';
import useSound from './CustomHooks/useSound';
import welcomesound from './assets/Music/welcomeclick.mp3'

const App = () => {

  const playWelcomeSound = useSound(welcomesound);

  const [showContent, setShowContent] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleClick = () => {
      playWelcomeSound();
      setShowLoading(true);
      setTimeout(() => {
        setShowContent(true);
        setShowLoading(false);
      }, 3300); // Duration for LoadingBar
  };

  return (
    <div className='App overflow-hidden text-white bg-[#0a0a0a] flex flex-col min-h-screen relative' onClick={!showContent ? handleClick : undefined}>
      <Background />
      {!showContent ? (
        <>
          <h1 className={`flex flex-grow text-6xl text-red-700 justify-center items-center animate-fadeIn`}>Welcome</h1>
          <p className={`absolute bottom-1/3 text-center w-full text-lg animate-fadeIn fadeInfinite`}>Click anywhere to start</p>
          {showLoading && <LoadingBar />}
        </>
      ) : (
        <>
          <BackgroundAudio isPlaying={true}/>
          <Header />
          <Menu />
          <PacmanComp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;