import { FaShoppingCart } from "react-icons/Fa";
import { RiAccountCircleFill } from "react-icons/Ri";
import { CgTrashEmpty } from "react-icons/Cg";
import { BsFilePlus } from "react-icons/Bs";
import { BsFileMinus } from "react-icons/Bs";

import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";

const navbar = ({
  logout,
  user,
  cart,
  addtoCart,
  clearCart,
  removeQty,
  subTotal,
}) => {
  const [dropdown, setdropdown] = useState(false);
  const togleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <div className="">
      <header className="container sticky top-0 z-50 text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-xl">
          <Link href="/">
            <a className=" cursor-pointer drop-shadow-lg  flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/Logo.png" height={70} width={250} />
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="link link-underline font-sans antialiased link-underline-black mr-5 font-bold text-lg cursor-pointer text-purple-800 hover:text-gray-900">
                Home
              </a>
            </Link>
            <Link href="/tshirt">
              <a className="link link-underline link-underline-black mr-5 font-bold text-lg  cursor-pointer text-purple-800 hover:text-gray-900">
                T-shirts
              </a>
            </Link>
            <Link href="/hoodies">
              <a className="link link-underline link-underline-black mr-5 font-bold text-lg  cursor-pointer text-purple-800 hover:text-gray-900">
                Hoodies
              </a>
            </Link>
            <Link href="/menStyle">
              <a className="link link-underline link-underline-black mr-5 font-bold text-lg  cursor-pointer text-purple-800 hover:text-gray-900">
                Men Style
              </a>
            </Link>
            <Link href="/contact">
              <a className="link link-underline link-underline-black mr-5 font-bold text-lg  cursor-pointer text-purple-800 hover:text-gray-900">
                Contact us
              </a>
            </Link>
          </nav>
          {user.value == null && (
            <button className=" inline-flex items-center mx-3 drop-shadow-lg  rounded-md bg-purple-700 text-slate-50 border-0 py-2 px-5 font-bold text-lg focus:outline-none hover:bg-gray-200 hover:text-purple-800   hover:font-bold mt-4 md:mt-0">
              <a href="/login">Login</a>
            </button>
          )}

          <div className="relative inline-block text-left">
            <span
              onMouseOver={() => {
                setdropdown(true);
              }}
              onMouseLeave={() => {
                setdropdown(false);
              }}
              className="py-2 bg-white text-sr:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {dropdown && (
                <div
                  onMouseOver={() => {
                    setdropdown(true);
                  }}
                  onMouseLeave={() => {
                    setdropdown(false);
                  }}
                  className=" origin-top-right top-10 absolute right-5  w-56 rounded-md shadow-lg bg-purple-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="" role="none">
                    <ul>
                      <li>
                        {" "}
                        <a
                          href="/account"
                          className=" text-gray-700 block px-4 py-2 font-semibold hover:bg-purple-300 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          My Accounts
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="/contact"
                          className="text-gray-700 block px-4 py-2 font-semibold hover:bg-purple-300 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="/orders"
                          className="text-gray-700 block px-4 py-2 font-semibold hover:bg-purple-300 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          onClick={logout}
                          className="text-gray-700 block px-4 py-2 font-semibold hover:bg-purple-300 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {user.value && <RiAccountCircleFill className="cursor-pointer mx-3" size={45} />}
            </span>
          </div>

          <button
            onClick={togleCart}
            className="inline-flex items-center mx- drop-shadow-lg rounded-md bg-purple-700 text-slate-50 border-0 py-3 px-3  focus:outline-none hover:bg-gray-200 hover:text-purple-800 text-base  hover:font-bold mt-4 md:mt-0"
          >
            <FaShoppingCart size={20} />
          </button>
        </div>
      </header>

      {/* Shopping Cart  */}
      <div
        ref={ref}
        className={`absolute top-0 right-0 z-50 transition-transform transform ${Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="relative inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="flex h-full flex-col overflow-y-scroll bg-purple-100 shadow-xl">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  onClick={togleCart}
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {Object.keys(cart).length == 0 && (
                    <div className="my-6 font-semibold text-center">
                      {" "}
                      Sorry The Cart is Empty
                    </div>
                  )}
                  {/* loop the list items in cart  */}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k} className="flex py-6">
                        <div className="h-24 w-auto flex-shrink- overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={cart[k].img}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">
                                  {cart[k].name}|{cart[k].size}/
                                  {cart[k].variant}{" "}
                                </a>
                              </h3>
                              <p className="ml-4">{cart[k].qty}</p>
                            </div>

                            <p className="mt-1 text-sm text-gray-500">
                              {cart[k].variant}
                            </p>

                            <div className="flex justify-start text-base font-medium my-1 text-gray-900">
                              <button
                                onClick={() => {
                                  removeQty(
                                    k,
                                    cart[k].img,
                                    1,
                                    cart[k].name,
                                    cart[k].size,
                                    cart[k].price,
                                    cart[k].variant
                                  );
                                }}
                              >
                                <BsFileMinus size={27} />{" "}
                              </button>
                              <span className="border-2 px-3 border-gray-600">
                                {cart[k].qty}
                              </span>

                              <button
                                onClick={() => {
                                  addtoCart(
                                    k,
                                    cart[k].img,
                                    1,
                                    cart[k].name,
                                    cart[k].size,
                                    cart[k].price,
                                    cart[k].variant
                                  );
                                }}
                              >
                                <BsFilePlus size={27} />{" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-700 font-semibold">
                              {cart[k].price}
                            </p>

                            <div className="flex">
                              <button
                                onClick={() => {
                                  removeQty(
                                    k,
                                    cart[k].img,
                                    1,
                                    cart[k].name,
                                    cart[k].size,
                                    cart[k].price,
                                    cart[k].variant
                                  );
                                }}
                                type="button"
                                className="font-medium text-purple-800 hover:text-purple-800"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{subTotal}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6 flex-row">
              <a
                href="/checkout"
                className="flex items-center  justify-center rounded-full border border-transparent font-semibold text-white bg-purple-800 px-6 py-3 text-base hover:font-bold hover:border-purple-800 hover:border-2 hover:text-purple-800 shadow-sm hover:bg-slate-200"
              >
                Checkout
              </a>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <button className="mx-2 font-bold" onClick={clearCart}>
                <CgTrashEmpty size={25} />
              </button>
              <p>
                <button
                  onClick={togleCart}
                  type="button"
                  className="font-medium text-purple-800 hover:text-purple-800"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
