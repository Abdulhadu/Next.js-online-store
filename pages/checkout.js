import React from "react";
import { BsFilePlus } from "react-icons/Bs";
import { BsFileMinus } from "react-icons/Bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const checkout = ({ cart, addtoCart, clearCart, removeQty, subTotal }) => {
  toast.info("Please Proceed to Checkout", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return (
    <div>
      <ToastContainer
        position= "bottom-center"
        autoClose={5006}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-gray-50">
        <h1 className="mx-auto text-center font-bold text-3xl py-5">
          Checkout
        </h1>

        <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Contact information
                  </h2>

                  <div className="mt-4">
                    <label
                      htmlFor="email-address"
                      className="block text-md font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autocomplete="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shipping information
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-md font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          autocomplete="given-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-md font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="last-name"
                          name="last-name"
                          autocomplete="family-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-md font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-md font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          autocomplete="street-address"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="apartment"
                        className="block text-md font-medium text-gray-700"
                      >
                        Apartment, suite, etc.
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="apartment"
                          id="apartment"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-md font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-md font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <div className="mt-1">
                        <select
                          id="country"
                          name="country"
                          autocomplete="country"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        >
                          <option>Pakistan</option>
                          <option>United States</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="province"
                        className="block text-md font-medium text-gray-700"
                      >
                        Province
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="province"
                          id="province"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="block text-md font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autocomplete="postal-code"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-md font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autocomplete="tel"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                  <fieldset className="mt-4">
                    <legend className="sr-only">Payment type</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div className="flex items-center">
                        <input
                          id="credit-card"
                          name="payment-type"
                          type="radio"
                          checked
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 sm:text-base py-1 px-1"
                        />
                        <label
                          htmlFor="credit-card"
                          className="ml-3 block text-md font-medium text-gray-700"
                        >
                          Credit card
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="paypal"
                          name="payment-type"
                          type="radio"
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 sm:text-base py-1 px-1"
                        />
                        <label
                          htmlFor="paypal"
                          className="ml-3 block text-md font-medium text-gray-700"
                        >
                          PayPal
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="etransfer"
                          name="payment-type"
                          type="radio"
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 sm:text-base py-1 px-1"
                        />
                        <label
                          htmlFor="etransfer"
                          className="ml-3 block text-md font-medium text-gray-700"
                        >
                          eTransfer
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                    <div className="col-span-4">
                      <label
                        htmlFor="card-number"
                        className="block text-md font-medium text-gray-700"
                      >
                        Card number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          autocomplete="cc-number"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="col-span-4">
                      <label
                        htmlFor="name-on-card"
                        className="block text-md font-medium text-gray-700"
                      >
                        Name on card
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="name-on-card"
                          name="name-on-card"
                          autocomplete="cc-name"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor="expiration-date"
                        className="block text-md font-medium text-gray-700"
                      >
                        Expiration date (MM/YY)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          autocomplete="cc-exp"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-md font-medium text-gray-700"
                      >
                        CVC
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="cvc"
                          id="cvc"
                          autocomplete="csc"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base py-1 px-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h3 className="sr-only">Items in your cart</h3>
                  <ul role="list" className="divide-y divide-gray-200">
                    {Object.keys(cart).map((k) => {
                      return (
                        <li key={k} className="flex py-6 px-4 sm:px-6">
                          <div className="h-24 w-auto flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={cart[k].img}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm">
                                  <a
                                    href="#"
                                    className="font-semibold text-gray-700 hover:text-gray-800"
                                  >
                                    {cart[k].name}|{cart[k].size}/
                                    {cart[k].variant}
                                  </a>
                                </h4>

                                <p className="mt-1 text-md text-gray-500">
                                  {cart[k].variant}
                                </p>
                                <div className="flex justify-start text-base font-medium my-2 text-gray-900">
                                  <button
                                    onClick={() => {
                                      removeQty(
                                        k,
                                        cart[k].img,
                                        1,
                                        cart[k].,
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

                              <div className="ml-4 flex-shrink-0 flow-root">
                                <button
                                  onClick={() => {
                                    removeQty(
                                      k,
                                      1,
                                      cart[k].name,
                                      cart[k].size,
                                      cart[k].price,
                                      cart[k].variant
                                    );
                                  }}
                                  type="button"
                                  className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Remove</span>

                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {subTotal}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Shipping</dt>
                      <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        $75.52
                      </dd>
                    </div>
                  </dl>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="w-full bg-purple-800 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                    >
                      Confirm order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default checkout;
