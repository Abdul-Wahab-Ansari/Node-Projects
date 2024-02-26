import inquirer from "inquirer";

export default class Product{
    productId: number | undefined;
    productName: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    productCategory: string | undefined;

    constructor(productId?: number, productName?: string,
        price?: number,
        quantity?: number,
        productCategory?: string){
        this.productId = productId
        this.productName = productName
        this.price = price
        this.quantity = quantity
        this.productCategory = productCategory
    }

    async getProductDetails() : Promise<void> {

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