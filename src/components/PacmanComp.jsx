import React from 'react';

const PacmanComp = () => {
  return (
    <div className='absolute bottom-[2rem] w-full h-[46.4px] left-0 overflow-hidden'>
      <svg
        className='pacman'
        fill="#FF00FF" /* Initial color */
        width="2rem" /* Adjust as needed */
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,23a10.927,10.927,0,0,0,7.778-3.222,1,1,0,0,0,0-1.414L13.414,12l6.364-6.364a1,1,0,0,0,0-1.414A11,11,0,1,0,12,23ZM12,3a8.933,8.933,0,0,1,5.618,1.967l-6.325,6.326a1,1,0,0,0,0,1.414l6.325,6.326A9,9,0,1,1,12,3Zm11,9a2,2,0,1,1-2-2A2,2,0,0,1,23,12ZM8,7a2,2,0,1,1,2,2A2,2,0,0,1,8,7Z" />
      </svg>
    </div>
  );
}

export default PacmanComp;
