import React from 'react'
import cr from '../assets/cr.svg'
import PacmanComp from './PacmanComp'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full text-center p-3 text-xs md:text-sm border-t-2 border-[#FF00FF] overflow-hidden'>
        <div className='flex justify-center md:space-x-2'>
          <img className='size-[1.1rem]' src={cr} alt="Copyright Symbol" />
          <span>2024 Portfolio</span>
        </div>
    </footer>
  )
}

export default Footer