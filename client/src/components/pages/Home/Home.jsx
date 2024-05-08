import React from "react";
import Product from "./Product/Product";
import image from "../../../assets/product.jpg";
import image1 from "../../../assets/temp.jpg"
const Home = () => {

  const images = [image, image1, image, image1, image]
  return (
    <div id="app" className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4 justify-center items-center flex pt-7">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
        <Product
          name="Áo MU"
          price="100.000 VND"
          images={images}
          description="Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối Vô đối"
        />
      </div>
    </div>
  );
};

export default Home;
