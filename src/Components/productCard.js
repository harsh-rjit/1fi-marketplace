
import React from "react";
import { calculateEmi } from "../Data/emi";

function ProductCard({ product, onSelect }) {
  const lowestMonths =
    product.emiPlans[product.emiPlans.length - 1];

  const lowestEmi = calculateEmi(
    product.price,
    lowestMonths
  );

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <p className="product-brand">
          {product.brand}
        </p>

        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p className="product-emi">
          EMI starting ₹
          {lowestEmi.toLocaleString("en-IN")}
          /month
        </p>

        <button onClick={() => onSelect(product)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

