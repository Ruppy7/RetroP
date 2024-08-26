import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaGithub } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiTailwindcss, SiLeetcode } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Import CSS

const skills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 color='orange' size={50} />, tooltip: 'Hypertext Markup Language' },
  { id: 2, name: 'CSS', icon: <FaCss3Alt color='blue' size={50} />, tooltip: 'Cascading Style Sheets' },
  { id: 3, name: 'JavaScript', icon: <FaJsSquare color='yellow' size={50} />, tooltip: 'Programming Language for Web Development' },
  { id: 4, name: 'Python', icon: <FaPython color='lightgreen' size={50} />, tooltip: 'General-purpose Programming Language' },
  { id: 5, name: 'React', icon: <FaReact color='skyblue' size={50} />, tooltip: 'JavaScript Library for Building User Interfaces' },
  { id: 6, name: 'Tailwind CSS', icon: <SiTailwindcss color='skyblue' size={50} />, tooltip: 'Utility-first CSS Framework' },
  { id: 7, name: 'Django', icon: <DiDjango color='green' size={50} />, tooltip: 'Python-based Web Framework' },
  { id: 8, name: 'GitHub', icon: <FaGithub color='white' size={50} />, tooltip: 'Platform for Version Control and Collaboration' },
  { id: 9, name: 'LeetCode', icon: <SiLeetcode color='orange' size={50} />, tooltip: 'Coding Practice Platform' },
];

const Inventory = () => {
  return (
    <div className="inventory-container grid">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-card flex flex-col items-center justify-center p-4 rounded-lg"
          data-tooltip-id={`tooltip-${skill.id}`}
          data-tooltip-content={skill.tooltip}
        >
          {skill.icon}
          <p className="mt-2 text-[#00ff00] tetris-block text-xs">{skill.name}</p>
        </div>
      ))}
      {skills.map((skill) => (
        <Tooltip className='skill-tt text-xs text-[#ffffff] bg-[#000000]' key={skill.id} id={`tooltip-${skill.id}`} />
      ))}
    </div>
  );
};

export default Inventory;
