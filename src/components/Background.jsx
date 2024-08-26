import React from 'react';

const Star = ({ x, y }) => (
  <svg
    className='star'
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    style={{ position: 'absolute', top: y, left: x }}
  >
    <circle cx="5" cy="5" r="2" fill="white" />
  </svg>
);

const Background = () => {
  const numStars = 250;
  const stars = Array.from({ length: numStars }, (_, i) => {
    const x = `${Math.random() * 100}vw`;
    const y = `${Math.random() * 100}vh`;
    return <Star key={i} x={x} y={y} />;
  });

  return (
    <>
    <div className='' style={{ position: 'relative', width: '100%', height: '100%' }}>
      {stars}
    </div>
    </>
  );
};

export default Background;
