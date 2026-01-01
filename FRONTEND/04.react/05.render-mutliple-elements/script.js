import ReactDOM from "react-dom/client";
import "./style.css";

function Card(product) {
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    images,
    reviews,
  } = product;

  return (
    <div key={id} className="product-card">
      <img src={images[0]} alt={title} className="product-image" />

      <div className="product-content">
        <h2 className="product-title">{title}</h2>
        <span className="product-category">{category}</span>

        <p className="product-description">{description}</p>

        <div className="product-price-row">
          <span className="product-price">₹{price}</span>
          <span className="product-discount">{discountPercentage}% OFF</span>
        </div>

        <p>⭐ Rating: {rating}</p>
        <p>📦 Stock: {stock}</p>
        <p>🏷 Brand: {brand}</p>
        <p>🛡 {warrantyInformation}</p>
        <p>🚚 {shippingInformation}</p>

        <p className="product-status">
          Status: <span>{availabilityStatus}</span>
        </p>

        <h4 className="review-heading">Customer Reviews</h4>

        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <strong>{review.reviewerName}</strong> ⭐{review.rating}
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const productsList = res.products.map((product) => {
      return Card(product);
    });

    const container = (
      <section className="product-grid">{productsList}</section>
    );
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(container);
  });
