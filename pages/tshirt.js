import React from "react";
import mongoose from "mongoose";
import Product from "../Models/Product";
import Link from "next/link";
const tshirt = ({ products }) => {
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
            SHIRTS
          </h2>
        </div>
      </div>
      <div>
        <section className="body-font lg:px-8 mx-auto max-w-7xl">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              {Object.keys(products).map((item) => {
                return (
                  <Link
                    key={item._id}
                    passHref={true}
                    href={`/product/${products[item].Slug}`}
                  >
                    <div className="lg:w-1/5 h-1/5 md:w-1/2 p-4 w-full shadow-lg hover:shadow-2xl mx-6 my-6 ">
                      <a className="block relative h-50 px-4 py-4 rounded overflow-hidden ">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={products[item].img}
                        />
                      </a>
                      <div className="mt-4">
                        <h3
                          key={item._id}
                          className="text-gray-500 text-xs tracking-widest title-font mb-1"
                        >
                          {products[item].Category}
                        </h3>
                        <h2
                          key={item._id}
                          className="text-gray-900 title-font text-lg font-medium"
                        >
                          {products[item].title}
                        </h2>
                        <p key={item._id} className="mt-1 font-bold">
                          ${products[item].price}
                        </p>
                        <div key={item._id} className="mt-1">
                          {products[item].Size.includes("SM") && (
                            <span className="border-2  mx-0.5  px-1.5">SM</span>
                          )}
                          {products[item].Size.includes("M") && (
                            <span className="border-2 mx-0.5 px-1.5">M</span>
                          )}
                          {products[item].Size.includes("L") && (
                            <span className="border-2  mx-0.5 px-1.5">L</span>
                          )}
                          {products[item].Size.includes("XL") && (
                            <span className="border-2  mx-0.5 px-1.5">XL</span>
                          )}
                          {products[item].Size.includes("XXL") && (
                            <span className="border-2  mx-0.5 px-1.5">XXL</span>
                          )}
                        </div>

                        <div key={item._id} className="mt-1">
                          {products[item].Color.includes("white") && (
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[item].Color.includes("black") && (
                            <button className="border-2 border-gray-300 ml-1 bg-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[item].Color.includes("green") && (
                            <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[item].Color.includes("yellow") && (
                            <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[item].Color.includes("red") && (
                            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                        </div>
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

  let products = await Product.find({ Category: "T-shirt" });
  let tshirt = {};
  for (let item of products) {
    if (item.title in tshirt) {
      if (
        !tshirt[item.title].Color.includes(item.Color) &&
        item.avaliableQty > 0
      ) {
        tshirt[item.title].Color.push(item.Color);
      }
      if (
        !tshirt[item.title].Size.includes(item.Size) &&
        item.avaliableQty > 0
      ) {
        tshirt[item.title].Size.push(item.Size);
      }
    } else {
      tshirt[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avaliableQty > 0) {
        tshirt[item.title].Color = [item.Color];
        tshirt[item.title].Size = [item.Size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirt)) }, // will be passed to the page component as props
  };
}
export default tshirt;
