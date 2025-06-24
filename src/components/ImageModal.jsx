import React from "react";

const ImageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <button onClick={onClose}></button>
    </div>
  );
};

export default ImageModal;
