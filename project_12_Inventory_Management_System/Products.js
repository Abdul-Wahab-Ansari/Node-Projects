import inquirer from "inquirer";
export default class Product {
    productId;
    productName;
    price;
    quantity;
    productCategory;
    constructor(productId, productName, price, quantity, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.productCategory = productCategory;
    }
    async getProductDetails() {
        const productsAns = await inquirer.prompt([
            {
                type: "input",
                name: "productName",
                message: "Enter Product Name: "
            },
            {
                type: "number",
                name: "price",
                message: "Product Price: "
            },
            {
                type: "input",
                name: "productCategory",
                message: "Product Category: "
            },
            {
                type: "number",
                name: "quantity",
                message: "Enter Quantity: "
            }
        ]);
        this.productName = productsAns.productName;
        this.price = productsAns.price;
        this.productCategory = productsAns.productCategory;
        this.quantity = productsAns.quantity;
    }
}
