import React from "react";
import About from "./About";
import Inventory from "./Inventory";
import Projects from "./Projects";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  let content;
  if (title === 'About') {
    content = <About />;
  } else if (title === 'Inventory') {
    content = <Inventory />;
  } else if (title === 'Projects') {
    content = <Projects />;
  }

  return (
    <div className={`modal-overlay`} onClick={onClose}>
      <div className={`modal-content`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="text-sm modal-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
