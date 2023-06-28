import { useEffect, useState } from "react";
import ProductCard from "./homepage-components/ProductCard";
import CheckoutPage from "./homepage-components/CheckoutPage";
import productData from "./product-data";
import "./HomePage.css";
import { FaCartArrowDown } from "react-icons/fa";
const HomePage = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);
  let [productsCount, setProductsCount] = useState(0);
  useEffect(() => {
    const productDataWithCount = productData.map((data) => {
      data.count = 0;
      return data;
    });
    setProductsInfo(productDataWithCount);
  }, []);

  const addToCart = (productToAdd) => {
    const newProductInfo = [...productsInfo];
    const index = newProductInfo.indexOf(productToAdd);
    newProductInfo[index].count++;
    setProductsInfo(newProductInfo);
    setProductsCount(++productsCount);
  };
  const removeFromCart = (productToRemove) => {
    const newProductInfo = [...productsInfo];
    const index = newProductInfo.indexOf(productToRemove);
    newProductInfo[index].count--;
    setProductsInfo(newProductInfo);
    setProductsCount(--productsCount);
  };
  return (
    <>
      {showCheckoutPage && (
        <div className="checkout-page-button-wrapper">
          <div className="modal">
            <button
              className="close-checkout-button"
              onClick={() => setShowCheckoutPage(false)}
            >
              Close
            </button>
            <CheckoutPage
              productsInCart={productsInfo.filter(
                (product) => product.count !== 0
              )}
            />
          </div>
        </div>
      )}
      <div className="homepage-wrapper">
        <div className="services-container">
          <div className="services-wrapper">
            <div className="service-card">
              <div className="service-image-container">
                <img src="./assets/BestProducts.png" alt="service-pic" />
              </div>
              <div className="about-service">
                <h1 className="service-name">Quality</h1>
                <p className="service-discription">we are committed to delivering exceptional quality products that delight your taste.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img src="./assets/Pastry.png" alt="service-pic" />
              </div>
              <div className="about-service">
                <h1 className="service-name">Class</h1>
                <p className="service-discription">
                we offer a diverse and enticing range of premium class products. From freshly baked bread and pastries to delectable cakes and pies.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img src="./assets/SafeDelivery.png" alt="service-pic" />
              </div>
              <div className="about-service">
                <h1 className="service-name">Delivery</h1>
                <p className="service-discription">We provide convenient and reliable delivery service, bringing our delicious treats right to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-container">
          {productsInfo.map((product) => {
            return (
              <ProductCard
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
        <div className="checkout-button-cart-wrapper">
          <div className="cart-icon-count-wrapper">
            <FaCartArrowDown className="cart-icon" />
            <span className="products-count">{productsCount}</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => setShowCheckoutPage(true)}
          >
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
