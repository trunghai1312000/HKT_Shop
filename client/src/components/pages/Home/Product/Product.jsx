import React, { useState } from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Product = ({ images, name, price, description }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const link = "/images/";

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    {
      currentImageIndex === images.length - 1
        ? setCurrentImageIndex(0)
        : setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousImage = () => {
    {
      currentImageIndex === 0
        ? setCurrentImageIndex(images.length - 1)
        : setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg hover:transition-shadow border">
      <img
        src={link + images[0]}
        className="object-cover w-full h-96 mb-2 cursor-pointer"
        onClick={openModal}
        alt="Product"
      />

      <h2 className="text-lg font-semibold truncate"><Tooltip title={name}>{name}</Tooltip></h2>
      <h2 className="text-lg font-semibold text-red-500">{price} VNĐ</h2>
      <p className="text-gray-500 h-12 overflow-hidden"><Tooltip title={description}>{description}</Tooltip></p>
      <div className="flex justify-center items-center">
        <button className="mt-2 bg-[#97cfc2] hover:bg-green-600 text-white py-2 px-4 rounded-md">
          Mua ngay
        </button>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={link + images[currentImageIndex]}
              className="object-cover w-full h-[600px] mb-2 cursor-pointer"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <span className="p-2 bg-gray-50 text-black rounded-full">
                {currentImageIndex + 1}/{images.length}
              </span>
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
