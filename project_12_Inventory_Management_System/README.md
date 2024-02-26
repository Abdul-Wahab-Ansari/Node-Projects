# Inventory Management System

This project is an Inventory Management System implemented in TypeScript. It allows users to add new products, view all products, and filter products based on various criteria such as product ID, product category, quantity, and price.

Features
 - `Add New Products:` Users can add new products to the inventory by providing details such as product name, price, category, and quantity.
 - `View All Products:` Users can view all products currently available in the inventory.
 - `View Products By Product ID:` Users can search for a specific product by entering its product ID.
 - `View Products By Product Category:` Users can filter products by entering a product category.
 - `View Products By Product Quantity:` Users can filter products by entering a specific quantity.
 - `View Products By Product Price:` Users can filter products by entering a specific price.
 - `Exit:` Users can exit the application.

## Project Structure
The project consists of the following files:

 - `Product.ts:` Defines the Product class with properties such as product ID, name, price, quantity, and category. It also contains a method to prompt the user for product details.
 - `Operations.ts:` Defines the Operations class, which handles operations related to products such as adding products, showing products by ID, category, quantity, and price.
 - `Index.ts:` The main entry point of the application. It contains the main loop where users can interact with the system using a command-line interface.

## Dependencies
 - `Inquirer:` A collection of common interactive command-line user interfaces.
 - `Faker.js:` A library for generating fake data such as names, addresses, and product details.

## Notes
The product details are randomly generated using the faker library to simulate a real-world inventory.
The application uses object-oriented programming principles to model products and operations on the inventory.

Feel free to explore and modify the code to suit your needs!