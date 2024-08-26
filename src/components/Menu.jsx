import React, { useState } from "react";
import Modal from "./Modal";
import useSound from "../CustomHooks/useSound";

const Menu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const clickMenuSound = '/Music/menuhover.mp3';
  const menuClose = '/Music/menuclose.wav';

  const playClickSound = useSound(clickMenuSound);
  const playMenuClose  = useSound(menuClose);

  const menuItems = ["About", "Inventory", "Projects"];

  const handleItemClick = (item) => {
    playClickSound();
    setModalContent(item);
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    playMenuClose();
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col flex-grow items-center justify-center h-[60vh] z-[1] text-xl md:text-3xl">
      {menuItems.map((item, index) => (
        <div
          className="menu-item relative flex items-center cursor-pointer"
          key={index}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => handleItemClick(item)}
        >
          {hoveredItem === index && (
            <span className="pointer-icon absolute left-[-20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white"
              >
                <polygon points="0,0 16,8 0,16" />
              </svg>
            </span>
          )}
          {item}
        </div>
      ))}
      <Modal isOpen={isModalOpen} title={modalContent} onClose={onModalClose} />
    </div>
  );
};

export default Menu;
