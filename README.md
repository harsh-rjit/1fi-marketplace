# 1Fi Marketplace

A responsive **1Fi Marketplace** web application built as part of the 1Fi SDE Intern Assignment.

The application provides a marketplace experience where users can browse products, select product variants, explore EMI plans, calculate monthly EMI amounts, and proceed with their selected EMI plan.

## 🚀 Live Demo

https://harsh-rjit.github.io/1fi-marketplace/

## 📦 GitHub Repository

https://github.com/harsh-rjit/1fi-marketplace

## ✨ Features

* Product listing with reusable product cards
* Product images, brand names and pricing
* Product search by name or brand
* Product variant selection
* Multiple EMI duration options
* Dynamic monthly EMI calculation
* Product details modal
* EMI plan selection
* EMI confirmation screen
* Loading state while fetching products
* Error handling for failed product loading
* Empty state when no products match the search
* Responsive mobile-friendly UI
* Reusable React components
* Mock API implementation for product data
* State management using React Hooks

## 🛠️ Tech Stack

* React.js
* JavaScript
* HTML5
* CSS3
* React Hooks
* Create React App
* Git & GitHub
* GitHub Pages

## 📁 Project Structure

```text
src/
├── Components/
│   ├── productCard.js
│   └── productGrid.js
│
├── Data/
│   ├── product.js
│   ├── productApi.js
│   └── emi.js
│
├── pages/
│   └── marketplace.js
│
├── App.js
├── App.css
└── index.css
```

## 🔄 Application Flow

1. Products are loaded through a mock API.
2. A loading state is displayed while the data is being fetched.
3. Products are displayed using reusable product cards.
4. Users can search for products or brands.
5. Users can open product details.
6. Users can select a product variant.
7. Users can select an EMI duration.
8. The monthly EMI is calculated dynamically.
9. Users can proceed with their selected EMI plan.
10. A confirmation summary displays the selected product, variant, price and EMI plan.

## 💳 EMI Calculation

The application uses a simple mock EMI calculation for the assignment:

```text
Monthly EMI = Product Price / EMI Duration
```

For example:

```text
Product Price = ₹79,999
EMI Duration = 24 months

Monthly EMI ≈ ₹3,333
```

The calculation is performed dynamically whenever the user changes the product variant or EMI duration.

## 🔌 Mock API

Product data is separated from the UI and loaded through a mock API function.

A small delay is intentionally added to simulate an asynchronous API request and demonstrate loading and error states.

This structure allows the mock API to be replaced with a real backend/API in the future without significantly changing the UI components.

## 📱 Responsive Design

The marketplace is designed with a mobile-first approach and adapts to:

* Desktop screens
* Tablets
* Mobile devices

The product grid automatically adjusts the number of columns according to screen size.

## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/harsh-rjit/1fi-marketplace.git
```

Move into the project directory:

```bash
cd 1fi-marketplace
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will run locally at:

```text
http://localhost:3000
```

## 📦 Production Build

To create a production build:

```bash
npm run build
```

## 🌐 Deployment

The project is deployed using **GitHub Pages** with the `gh-pages` package.

To deploy the latest version:

```bash
npm run deploy
```

## 🎯 Assignment Requirements Covered

| Requirement         | Status |
| ------------------- | ------ |
| Product listing     | ✅      |
| Product image       | ✅      |
| Product name        | ✅      |
| Pricing             | ✅      |
| Product variants    | ✅      |
| EMI options         | ✅      |
| Product details     | ✅      |
| EMI selection       | ✅      |
| Proceed CTA         | ✅      |
| Dynamic/mock API    | ✅      |
| State management    | ✅      |
| Loading state       | ✅      |
| Error state         | ✅      |
| Responsive UI       | ✅      |
| Reusable components | ✅      |
| GitHub deployment   | ✅      |

## 👨‍💻 Author

**Harsh Shrivastava**

B.Tech — Information Technology

GitHub: https://github.com/harsh-rjit
