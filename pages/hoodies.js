import React from "react";
import mongoose from "mongoose";
import Product from "../Models/Product";
import Link from "next/link";
const hoodie = ({ products }) => {
  return (
    <div>
      <section className="body-font lg:px-8 mx-auto max-w-7xl">
        <h1 className="text-center font-bold text-5xl my-12 text-purple-900 ">
          Hoodies
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
          {Object.keys(products).length===0 && <p> NO Item to show</p>}
            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={item._id}
                  passHref={true}
                  href={`/product/${products[item].Slug}`}
                >
                  <div className="lg:w-1/5 h-1/5 md:w-1/2 p-4 w-full shadow-lg mx-6 my-6 ">
                    <a className="block relative h-50 px-4 py-4 rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].Category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1 font-bold">${products[item].price}</p>
                      <div className="mt-1">
                     {products[item].Size.includes('SM') && <span className="border-2  mx-0.5  px-1.5">SM</span> }
                     {products[item].Size.includes('M') && <span className="border-2 mx-0.5 px-1.5">M</span> }
                     {products[item].Size.includes('L') && <span className="border-2  mx-0.5 px-1.5">L</span> }
                     {products[item].Size.includes('XL') && <span className="border-2  mx-0.5 px-1.5">XL</span> }
                     {products[item].Size.includes('XXL') && <span className="border-2  mx-0.5 px-1.5">XXL</span> }
                      </div>

             

                     <div className="mt-1">
        
                  {products[item].Color.includes('white') && <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].Color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].Color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].Color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].Color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
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
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect("mongodb://0.0.0.0:27017/online-store");
  }

  let products = await Product.find({ Category: "hoodie" });
  let hoodie = {};
  for (let item of products) {
    if (item.title in hoodie) {
      if (
        !hoodie[item.title].Color.includes(item.Color) &&
        item.avaliableQty > 0
      ) {
        hoodie[item.title].Color.push(item.Color);
      }
      if (
        !hoodie[item.title].Size.includes(item.Size) &&
        item.avaliableQty > 0
      ) {
        hoodie[item.title].Size.push(item.Size);
      }
    } else {
      hoodie[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avaliableQty > 0) {
        hoodie[item.title].Color = [item.Color];
        hoodie[item.title].Size = [item.Size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(hoodie)) }, // will be passed to the page component as props
  };
}
export default hoodie;
