import "./CheckoutPage.css";
const CheckoutPage = ({ productsInCart }) => {
  let total = 0;
  const print_products_details = (products) => {
    for (let product of productsInCart) {
      let str = `${product.name} * ${product.count} (${product.cost})=> Rs. ${
        product.cost * product.count
      }`;
      console.log(str);
    }
    console.log(`Tolal rupees to pay =>${total}`);
  };
  const handleClick = () => {
    print_products_details(productsInCart);
  };
  return (
    <div className="checkout-page-container">
      {productsInCart.length ? (
        <>
          <div>
            {productsInCart.map((product) => {
              total += product.cost * product.count;
              return (
                <>
                  <p className="product-total-cost">
                    *{product.name} x {product.count} ({product.cost})={" "}
                    <b>Rs. {product.count * product.cost}</b>
                  </p>
                </>
              );
            })}
            <hr />
            <b className="all-product-total-cost">
              Total Amount Payable = Rs. {total}
            </b>
          </div>
          <button onClick={handleClick} className="pay-now-button">
            Pay Now
          </button>
        </>
      ) : (
        <h1>Cart is Empty!</h1>
      )}
    </div>
  );
};

export default CheckoutPage;
