import React from "react";

const ImageGallery = ({ images }) => {
  return <div>{images.length !== 0 && images.map((image) => <li></li>)}</div>;
};

export default ImageGallery;
