# Ecommerce Website with React-Redux

This project is a simple ecommerce website that implements the concepts of React and Redux. It allows users to browse products, add items to their cart, create a wishlist, and manage their shopping preferences. While the primary focus was to learn Redux, the project showcases various functionalities that make it an effective ecommerce solution.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Demo](#demo)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [How to Run](#how-to-run)
7. [Redux Slices](#redux-slices)
    1. [cartSlice.js](#cartslicejs)
    2. [wishlistSlice.js](#wishlistslicejs)
8. [Contributing](#contributing)
9. [License](#license)


## Project Overview

The ecommerce website built with React and Redux enables users to browse through a collection of products fetched using the FakeStore API. Users can add items to their cart, view the total cost, and easily remove items from the cart. Additionally, users can create a wishlist, add items to it, and remove items from the wishlist. The user interface might not be fully polished as the primary focus was on learning Redux concepts.

## Demo
(https://github.com/Rohit-Nandagawali/ecommerce-cart-redux/assets/85486891/7dc0f930-c10b-41b6-964c-4726d1ae64bc)

## Features

- Browse products on the home page fetched using the FakeStore API.
- Add items to the cart and view the total cost of added items.
- Easily remove items from the cart.
- Create a wishlist and add products to it.
- View the number of items in the cart and wishlist in the navbar.

## Technologies Used

- React
- React Router DOM
- Redux Toolkit

## Project Structure

The project is structured as follows:
```
- src/
  - components/
    - Navbar.js
  - pages/
    - Cart.jsx
    - Wishlist.jsx
    - Home.jsx
  - redux/
    - cartSlice.js
    - wishlistSlice.js
    - store.js
  - App.js
  - App.css
  - index.js
  - index.css
  ```

## How to Run

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and navigate to `http://localhost:3000/` to view the website.

## Redux Slices

### cartSlice.js

The `cartSlice.js` file contains the Redux slice for managing the cart state. It includes the following actions:

- `addItems`: Adds items to the cart and updates the total cost.
- `clearItems`: Clears all items from the cart and resets the total cost.
- `removeItem`: Removes a specific item from the cart and updates the total cost accordingly.

### wishlistSlice.js

The `wishlistSlice.js` file contains the Redux slice for managing the wishlist state. It includes the following actions:

- `addWishlist`: Adds items to the wishlist.
- `clearWishlist`: Clears all items from the wishlist.
- `removeFromWishlist`: Removes a specific item from the wishlist.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request.

## License


