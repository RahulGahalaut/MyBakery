import "./ProductCard.css";
const ProductCard = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image_url}
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <div className="product-name">
          {product.name}
          {product.count ? ` x ${product.count}` : ""}
        </div>
        <div className="product-cost">Rs. {product.cost}</div>
        <div className="product-buttons">
          <button
            onClick={() => {
              removeFromCart(product);
            }}
            className="remove-product-button"
            disabled={product.count ? false : true}
          >
            Remove
          </button>
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="add-product-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
