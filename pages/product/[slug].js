import { useRouter } from "next/router";
import mongoose from "mongoose";
import Product from "../../Models/Product";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const Post = ({ buyNow, addtoCart, Variants, products }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setpin] = useState();
  const [service, setservice] = useState();
  const serviceability = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pin))) {
      setservice(true);
      toast.success("Your Pincode is serviceable..!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setservice(false);
      toast.error("Sorry.! Your Pincode is not serviceable.", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onchangePin = (e) => {
    setpin(e.target.value);
  };
  

  const refreshVariants = (newsize, newcolor) => {
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${Variants[newcolor][newsize]["Slug"]}`;
    window.location = url;
  };
  let Color = products.Color;
  let Size = products.Size;
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={5006}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/4 lg:h-auto object-cover object-center rounded"
              src={products.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {products.Category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">
                {products.title} | ({products.Size}/{products.Color})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{products.Desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(Variants).includes("white") &&
                    Object.keys(Variants["white"]).includes(Size) && (
                      <button
                        onClick={() => {
                          refreshVariants(Size, "white");
                        }}
                        className={`border-2 border-gray-300 rounded-full w-6 h-6 ${
                          Color === "white" ? `border-black` : `border-gray-300`
                        }`}
                      ></button>
                    )}
                  {Object.keys(Variants).includes("black") &&
                    Object.keys(Variants["black"]).includes(Size) && (
                      <button
                        onClick={() => {
                          refreshVariants(Size, "black");
                        }}
                        className={`border-2 border-gray-300 ml-1 bg-gray-800 rounded-full w-6 h-6 ${
                          Color === "black" ? `border-black` : `border-gray-300`
                        }`}
                      ></button>
                    )}
                  {Object.keys(Variants).includes("green") &&
                    Object.keys(Variants["green"]).includes(Size) && (
                      <button
                        onClick={() => {
                          refreshVariants(Size, "green");
                        }}
                        className={`border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 ${
                          Color === "green" ? `border-black` : `border-gray-300`
                        }`}
                      ></button>
                    )}
                  {Object.keys(Variants).includes("red") &&
                    Object.keys(Variants["red"]).includes(Size) && (
                      <button
                        onClick={() => {
                          refreshVariants(Size, "red");
                        }}
                        className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 ${
                          Color === "red" ? `border-black` : `border-gray-300`
                        }`}
                      ></button>
                    )}
                  {Object.keys(Variants).includes("yellow") &&
                    Object.keys(Variants["yellow"]).includes(Size) && (
                      <button
                        onClick={() => {
                          refreshVariants(Size, "yellow");
                        }}
                        className={`border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 ${
                          Color === "yellow"
                            ? `border-black`
                            : `border-gray-300`
                        }`}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={Size}
                      onChange={(e) => {
                        refreshVariants(e.target.value, Color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-purple-800 text-base pl-3 pr-10"
                    >
                      {Object.keys(Variants[Color]).includes("SM") && (
                        <option value={"SM"}>SM</option>
                      )}
                      {Object.keys(Variants[Color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(Variants[Color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(Variants[Color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(Variants[Color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none purple-600"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-bold text-2xl text-gray-900">
                  ${products.price}
                </span>
                <button
                  onClick={() => {
                    buyNow(
                      slug,
                      products.img,
                      1,
                      products.title,
                      Size,
                      products.price,
                      Color
                    );
                  }}
                  className="flex ml-auto rounded-lg font-semibold text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
                >
                  Order Now
                </button>
                <button
                  onClick={() => {
                    addtoCart(
                      slug,
                      products.img,
                      1,
                      products.title,
                      Size,
                      products.price,
                      Color
                    );
                  }}
                  className="flex mx-4 rounded-lg font-semibold text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
                >
                  Add To Cart
                </button>
                <button className=" w-10 h-10 rounded-full bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <hr className="my-4 "></hr>
              <div className="flex-row my-2">
                <input
                  onChange={onchangePin}
                  className=" flex-row ml-8 shadow appearance-none border rounded-full py-2 px-3 my-5 border-r-purple-600 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="pin"
                  type="text"
                  placeholder="Enter Your Postal Code"
                />
                <button
                  onClick={serviceability}
                  className="flex-row ml-5 rounded-lg font-semibold text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
                >
                  Check
                </button>
                {!service && service != null && (
                  <div className=" ml-8 flex mx-2 my-4 bg-red-100 rounded-xl">
                    <p className=" px-4 py-4 font-semibold">
                      {" "}
                      Sorry We dont Deliver at you address
                    </p>
                  </div>
                )}
                {service && service != null && (
                  <div className=" ml-8 flex mx-2 my-4 bg-green-100 rounded-xl">
                    <p className=" px-4 py-4 font-semibold">
                      {" "}
                      Yes we can Deliver at you address
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Post.propTypes = {
  buyNow: PropTypes.func.isRequired,
  addtoCart: PropTypes.func.isRequired,
  Variants: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(`${process.env.MONGO_URI}`);
  }
  let products = await Product.findOne({ Slug: context.query.slug });
  let Variants = await Product.find({ title: products.title });
  let colorsizeslug = {};
  // Red (XL(slug))this is the object we want in colorsizeslug
  for (let item of Variants) {
    if (Object.keys(colorsizeslug).includes(item.Color)) {
      colorsizeslug[item.Color][item.Size] = { Slug: item.Slug };
    } else {
      colorsizeslug[item.Color] = {};
      colorsizeslug[item.Color][item.Size] = { Slug: item.Slug };
    }
  }
  return {
    props: {
      Variants: JSON.parse(JSON.stringify(colorsizeslug)),
      products: JSON.parse(JSON.stringify(products)),
    }, // will be passed to the page component as props
  };
}
export default Post;
