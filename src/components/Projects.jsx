import React from 'react';

const projects = [
  {
    title: 'Vibe - Minispotify Web Player',
    description: 'A web app that emulates a fraction of functionality provided by Spotify\'s web player. It is built using DJANGO as the backend framework and REACTJS as the frontend library. Integration with the SPOTIFY API allows users to access their Spotify accounts, view their currently playing song, and control playback.'
  },
  {
    title: 'CertifyNet - Decentralized Identity Management',
    description: 'A research-based project on the feasibility of using a blockchain-based platform for decentralized identity management and tamper-proof certification issuance.'
  },
  {
    title: 'Deep Learning Methods to Classify Chromosomes',
    description: 'Research-based project on various deep learning architectures such as CNN, KNN, ResNet-50, etc., to determine the best way to classify chromosomes into their respective pairs.'
  }
];

const Projects = () => {
  return (
    <div className="projects-container space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="project-card p-4 border border-green-400 rounded-lg">
          <h3 className="text-[#00ff00] font-bold tetris-block">{project.title}</h3>
          <p className="text-white mt-2 text-xs">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
