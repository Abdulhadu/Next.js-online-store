import React from "react";
import mongoose from "mongoose";
import Product from "../Models/Product";
import Link from "next/link";
const shoes = ({ products }) => {
  return (
    <>
      <div
        className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/page-header.jpg")' }}
      >
        <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
        <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
            <span className="font-satisfy block font-normal mb-3">explore</span>
            SHOES
          </h2>
        </div>
      </div>
      <div>
        <section className="body-font lg:px-8 mx-auto">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              {products.map((item) => {
                return (
                  <Link
                    key={item._id}
                    passHref={true}
                    href={`/product/${item.Slug}`}
                  >
                    <div className="lg:w-1/5 h-1/5 md:w-1/2 p-4 w-full shadow-lg hover:shadow-2xl mx-6 my-6 ">
                      <a className="block relative h-50 px-4 py-4 rounded overflow-hidden ">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={item.img}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {item.Category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <p className="mt-1 font-bold">{item.price}</p>
                        <p className="mt-1">XL,L,M,SM</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(`${process.env.MONGO_URI}`);
  }

  let products = await Product.find({ Category: "Shoes" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default shoes;
