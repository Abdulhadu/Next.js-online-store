import "../styles/globals.css";
import { useEffect } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [cart, setCart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(40);
    });
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setuser({ value: token });
      setkey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    setuser({ value: null });
    setkey(Math.random());
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubTotal(subt);
  };

  const addtoCart = (itemCode, img, qty, name, size, price, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { img, qty: 1, name, size, price, variant };
    }

    setCart(newCart);
    saveCart(newCart);
    toast.info("Item Succesfully Added to Cart", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
    toast.info("Your Cart is Empty..!", {
      position: "bottom-center",
      autoClose: 5006,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeQty = (itemCode, img, qty) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow = (itemCode, img, qty, name, size, price, variant) => {
    let newCart = { itemCode: { img, qty: 1, name, size, price, variant } };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  return (
    <>
      <LoadingBar
        color="#5D3F6A"
        waitingTime="800"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar
        key={key}
        logout={logout}
        user={user}
        cart={cart}
        addtoCart={addtoCart}
        clearCart={clearCart}
        removeQty={removeQty}
        subTotal={subTotal}
      />

      <Component
        cart={cart}
        addtoCart={addtoCart}
        clearCart={clearCart}
        removeQty={removeQty}
        buyNow={buyNow}
        {...pageProps}
        subTotal={subTotal}
      />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
