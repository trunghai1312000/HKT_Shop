import React from "react";
import Product from "./Product/Product";

import productData from '../../../assets/data/HKTShop.Products.json';
import teamData from '../../../assets/data/HKTShop.Teams.json';

const Home = () => {

  const productList = productData.map((product, index) => (
    <Product
      key={index}
      name={product.name}
      price={product.price}
      images={product.images}
      description={product.description}
    />
  ));
  return (
    <div id="app" className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4 justify-center items-center flex pt-7">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList} 
      </div>
    </div>
  );
};

export default Home;
