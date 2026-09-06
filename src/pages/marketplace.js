import React, { useEffect, useState } from "react";
import { getProducts } from "../Data/productApi";
import { calculateEmi } from "../Data/emi";
import ProductGrid from "../Components/productGrid";

function Marketplace() {
const [selectedProduct, setSelectedProduct] = useState(null);
const [selectedVariant, setSelectedVariant] = useState(null);
const [selectedEmi, setSelectedEmi] = useState(null);

const [activeTab, setActiveTab] = useState("marketplace");
const [search, setSearch] = useState("");
const [showConfirmation, setShowConfirmation] = useState(false);

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const loadProducts = async () => {
try {
setLoading(true);
setError("");


    const data = await getProducts();
    setProducts(data);
  } catch (err) {
    setError("Unable to load products. Please try again.");
  } finally {
    setLoading(false);
  }
};

loadProducts();


}, []);

// Product select
const handleProductSelect = (product) => {
const defaultVariant = product.variants[0];
const defaultMonths =
product.emiPlans[product.emiPlans.length - 1];


setSelectedProduct(product);
setSelectedVariant(defaultVariant);

setSelectedEmi({
  months: defaultMonths,
  amount: calculateEmi(
    defaultVariant.price,
    defaultMonths
  )
});

setShowConfirmation(false);


};

// Variant change
const handleVariantSelect = (variant) => {
setSelectedVariant(variant);


// Recalculate EMI according to new variant price
setSelectedEmi({
  months: selectedEmi.months,
  amount: calculateEmi(
    variant.price,
    selectedEmi.months
  )
});


};

// EMI change
const handleEmiSelect = (months) => {
setSelectedEmi({
months,
amount: calculateEmi(
selectedVariant.price,
months
)
});
};

// Close details
const closeDetails = () => {
setSelectedProduct(null);
setSelectedVariant(null);
setSelectedEmi(null);
setShowConfirmation(false);
};

// Proceed
const handleProceed = () => {
setShowConfirmation(true);
};

// Search
const filteredProducts = products.filter((product) => {
const searchText = search.toLowerCase();


return (
  product.name.toLowerCase().includes(searchText) ||
  product.brand.toLowerCase().includes(searchText)
);


});

return ( <div className="marketplace">


  {/* Header */}
  <div className="marketplace-header">
    <p className="small-title">1Fi</p>

    <h1>1Fi Marketplace</h1>

    <p>
      Shop your favourite products with easy EMI plans.
    </p>
  </div>

  {/* Shop Tabs */}
  <div className="shop-tabs">

    <button
      className={
        activeTab === "brands"
          ? "tab active"
          : "tab"
      }
      onClick={() => setActiveTab("brands")}
    >
      Top Brands
    </button>

    <button
      className={
        activeTab === "stores"
          ? "tab active"
          : "tab"
      }
      onClick={() => setActiveTab("stores")}
    >
      Nearby Stores
    </button>

    <button
      className={
        activeTab === "marketplace"
          ? "tab active"
          : "tab"
      }
      onClick={() => setActiveTab("marketplace")}
    >
      1Fi Marketplace
    </button>

  </div>

  {/* Marketplace */}
  {activeTab === "marketplace" && (
    <>

      {/* Search */}
      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search products or brands"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Products */}
      {loading ? (

        <div className="loading-state">
          <div className="loader"></div>

          <h3>Loading products...</h3>

          <p>
            Please wait while we load the marketplace.
          </p>
        </div>

      ) : error ? (

        <div className="error-state">

          <div className="error-icon">!</div>

          <h3>Something went wrong</h3>

          <p>{error}</p>

          <button
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>

        </div>

      ) : filteredProducts.length > 0 ? (

        <ProductGrid
          products={filteredProducts}
          onSelect={handleProductSelect}
        />

      ) : (

        <div className="no-products">

          <h3>No products found</h3>

          <p>
            Try searching for another product or brand.
          </p>

        </div>

      )}

    </>
  )}

  {/* Top Brands */}
  {activeTab === "brands" && (

    <div className="empty-section">

      <h2>Top Brands</h2>

      <p>
        Top brands will be available soon.
      </p>

    </div>

  )}

  {/* Nearby Stores */}
  {activeTab === "stores" && (

    <div className="empty-section">

      <h2>Nearby Stores</h2>

      <p>
        Nearby stores will be available soon.
      </p>

    </div>

  )}

  {/* Product Details */}
  {selectedProduct && (

    <div className="product-details-overlay">

      <div className="product-details">

        <button
          className="close-btn"
          onClick={closeDetails}
        >
          ×
        </button>

        {!showConfirmation ? (

          <>

            {/* Product Image */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="details-image"
            />

            {/* Product Information */}
            <p className="product-brand">
              {selectedProduct.brand}
            </p>

            <h2>
              {selectedProduct.name}
            </h2>

            {/* Dynamic Variant Price */}
            <h3>
              ₹
              {selectedVariant.price.toLocaleString(
                "en-IN"
              )}
            </h3>

            {/* Variant */}
            <div className="details-section">

              <h4>Select Variant</h4>

              <div className="variant-list">

                {selectedProduct.variants.map(
                  (variant) => (

                    <button
                      key={variant.name}
                      className={
                        selectedVariant.name ===
                        variant.name
                          ? "variant active"
                          : "variant"
                      }
                      onClick={() =>
                        handleVariantSelect(variant)
                      }
                    >
                      {variant.name}
                    </button>

                  )
                )}

              </div>

            </div>

            {/* EMI Plans */}
            <div className="details-section">

              <h4>Select EMI Plan</h4>

              <div className="emi-list">

                {selectedProduct.emiPlans.map(
                  (months) => {

                    const monthlyEmi =
                      calculateEmi(
                        selectedVariant.price,
                        months
                      );

                    return (
                      <button
                        key={months}
                        className={
                          selectedEmi?.months === months
                            ? "emi-option active"
                            : "emi-option"
                        }
                        onClick={() =>
                          handleEmiSelect(months)
                        }
                      >

                        <span>
                          {months} Months
                        </span>

                        <strong>
                          ₹
                          {monthlyEmi.toLocaleString(
                            "en-IN"
                          )}
                          /month
                        </strong>

                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* Proceed */}
            <button
              className="proceed-btn"
              onClick={handleProceed}
            >
              Proceed with EMI
            </button>

          </>

        ) : (

          /* Confirmation */
          <div className="confirmation">

            <div className="confirmation-icon">
              ✓
            </div>

            <h2>
              EMI Plan Selected
            </h2>

            <p>
              Your selected plan is ready to proceed.
            </p>

            <div className="order-summary">

              <div>
                <span>Product</span>

                <strong>
                  {selectedProduct.name}
                </strong>
              </div>

              <div>
                <span>Variant</span>

                <strong>
                  {selectedVariant.name}
                </strong>
              </div>

              <div>
                <span>Price</span>

                <strong>
                  ₹
                  {selectedVariant.price.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

              <div>
                <span>EMI Duration</span>

                <strong>
                  {selectedEmi.months} Months
                </strong>
              </div>

              <div>
                <span>Monthly EMI</span>

                <strong>
                  ₹
                  {selectedEmi.amount.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

            </div>

            <button
              className="proceed-btn"
              onClick={closeDetails}
            >
              Continue Shopping
            </button>

          </div>

        )}

      </div>

    </div>

  )}

  {/* Bottom Navigation */}
  <div className="bottom-navigation">

    <button>
      <span>⌂</span>
      <small>Home</small>
    </button>

    <button>
      <span>◈</span>
      <small>Invest</small>
    </button>

    <button className="active">
      <span>🛍</span>
      <small>Shop</small>
    </button>

    <button>
      <span>♙</span>
      <small>Profile</small>
    </button>

  </div>

</div>


);
}

export default Marketplace;
