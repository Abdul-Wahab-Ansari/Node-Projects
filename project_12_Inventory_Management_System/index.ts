import inquirer from "inquirer";
import Operations from "./Operations.js";
import Product from "./Products.js";
import { faker } from "@faker-js/faker";

const operation = new Operations();

for (let i = 1; i < 15; i++) {
    let productId = 1000 + i
    let productName = faker.commerce.productName();
    let productCategory = faker.commerce.department();
    let price = Number(faker.commerce.price());
    let quantity = faker.number.int({ min: 1, max: 100 });

    const product = new Product(productId, productName, price, quantity, productCategory)
    
    operation.addProduct(product)
}

// operation.showAllProducts()

do{
    const ans = await inquirer.prompt(
        {
            type: "list",
            name: "mainInput",
            choices: ["Add New Products", "View All Products", "View Products By Product ID", "View Products By Product Category", "View Products By Product Quantity", "View Products By Product Price", "Exit"]
        }
    )
    
    let mainInput = ans.mainInput
    
    // Adding a Product
    if (mainInput === "Add New Products") {
    
        let productId = Math.floor(Math.random() * 1000)
        
        const product = new Product(productId)
        
        await product.getProductDetails()
        
        operation.addProduct(product)
        
        try {
            if (product.productId !== undefined) {
                operation.showProductsById(product.productId)
            }
        } catch (error) {
            console.log(`Error in Product ID  ${error}`)
        }
    
    }
    //  View All Products
    else if (mainInput === "View All Products") {
        
        operation.showAllProducts()
    }
    // View Product By ID 
    else if (mainInput === "View Products By Product ID") {
        const userAns = await inquirer.prompt(
            {
                type: "number",
                name: "productId",
                message: "Pls Enter Product ID: "
            }
        );
        operation.showProductsById(userAns.productId)
    }
    // View Product By Category
    else if(mainInput === "View Products By Product Category"){
        const userAns = await inquirer.prompt(
            {
                type: "input",
                name: "productCategory",
                message: "Pls Enter Product ID: "
            }
        );
        operation.showProductByCategory(userAns.productCategory)
    }
    // View Product Quantity
    else if(mainInput === "View Products By Product Quantity"){
        const userAns = await inquirer.prompt(
            {
                type: "number",
                name: "productQuantity",
                message: "Pls Enter Product ID: "
            }
        );
        operation.showProductByQuantity(userAns.productQuantity)
    }
    // View Product By Price
    else if(mainInput === "View Products By Product Price"){
        const userAns = await inquirer.prompt(
            {
                type: "number",
                name: "productPrice",
                message: "Pls Enter Product ID: "
            }
        );
        operation.showProductByPrice(userAns.productPrice)
    }
    // Exit
    else if(mainInput === "Exit"){
        process.exit()
    }else{
        console.log(`Invalid Selection`)
    }

}while(true)


