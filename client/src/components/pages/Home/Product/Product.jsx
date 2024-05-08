import React, { useState } from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const Product = ({ images, name, price, description }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    {currentImageIndex === images.length - 1 ? setCurrentImageIndex(0) : setCurrentImageIndex((prevIndex) => prevIndex + 1)}
  };

  const previousImage = () => {
    {currentImageIndex === 0 ? setCurrentImageIndex(images.length - 1) : setCurrentImageIndex((prevIndex) => prevIndex - 1)}
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg hover:transition-shadow border">
      <img
        src={images[0]}
        className="w-full mb-2 cursor-pointer"
        onClick={openModal}
      />

      <h2 className="text-lg font-semibold">{name}</h2>
      <h2 className="text-lg font-semibold">{price}</h2>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-center items-center">
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Mua ngay
        </button>
      </div>
      {modalOpen && (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75" onClick={closeModal}>
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <img
        src={images[currentImageIndex]}
        className="h-[700px] w-[500px] cursor-pointer"
      />
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <span className="p-2 bg-gray-50 text-black rounded-full">{currentImageIndex + 1}/{images.length}</span>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={previousImage}
      >
        <CaretLeftOutlined />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={nextImage}
      >
        <CaretRightOutlined />
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Product;
