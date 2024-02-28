import Products from "./Products.js"
import chalk from "chalk"

export default class Operations {
    products: Products[] = []

    addProduct(product: Products) {
        this.products.push(product)
    }

    showProductsById(productId: number) {
        let product = this.products.find(product => product.productId === productId)
        if (product) {
            // console.log(`Product Found`)
            console.log(`Product ID: ${product.productId}\nProduct Name: ${product.productName}\nProduct Price: ${product.price}\nProduct Quantity: ${product.quantity}\n
            `)
        } else {
            console.log(chalk.bold.red(`Product Not Found`))
        }
    }

    showAllProducts() {
        if (this.products.length > 0) {
            this.products.forEach(product => {
                console.log(`Product Id: ${product.productId}, Product Name: ${product.productName}, Price: ${product.price}, Quantity: ${product.quantity} Category: ${product.productCategory}`)
            })
        }
    }

    showProductByCategory(productCategory: string) {
        let product = this.products.filter(product => product.productCategory === productCategory)
        if (product.length > 0) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId}, Product Name: ${elem.productName}, Price: ${elem.price}, Quantity: ${elem.quantity} Category: ${elem.productCategory}`)
            });
        } else {
            console.log(chalk.bold.red(`No Product Found`))
        }
    }

    showProductByQuantity(productId: number) {
        let product = this.products.filter(product => product.productId === productId)
        if (product.length > 0) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId},\nProduct Name: ${elem.productName},\n${chalk.bold.green(`Quantity: ${elem.quantity}`)}`)
            });
        } else {
            console.log(chalk.bold.red(`No Product Found matching Product ID: ${productId}`))
        }
    }

    showProductByPrice(price: number) {
        let product = this.products.filter(product => product.price === price)
        if (product.length > 0) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId}, Product Name: ${elem.productName}, ${chalk.bold.green(`Price: ${elem.price}`)}, Quantity: ${elem.quantity} Category: ${elem.productCategory}`)
            });
        } else {
            console.log(chalk.bold.red(`No Product Found`))
        }
    }

    showTotalInvByTotalPrice(){
        // let allPrice: any = this.products.map((product)=> product.price)
        // console.log(allPrice)

        // let totalPrice: number = allPrice.reduce((acc: number, item:any) => acc + item, 0)
        // console.log(totalPrice)

        let totalPrice: number = this.products.reduce((acc: number, currVal:any) => acc + currVal.price, 0)
        console.log(chalk.bold.green(`Total Inventory available of Amount: ${totalPrice}`))
    }

    showTotalInvQuantity(){
        let totalQuantity: number = this.products.reduce((acc: number, currVal:any) => acc + currVal.quantity, 0)
        console.log(chalk.bold.green(`Total Inventory available of Amount: ${totalQuantity}`))
    }
}