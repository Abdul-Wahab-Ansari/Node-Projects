export default class Operations {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    showProductsById(productId) {
        let product = this.products.find(product => product.productId === productId);
        if (product) {
            // console.log(`Product Found`)
            console.log(`Product ID: ${product.productId}\nProduct Name: ${product.productName}\nProduct Price: ${product.price}\nProduct Quantity: ${product.quantity}\n
            `);
        }
        else {
            console.log(`Product Not Found`);
        }
    }
    showAllProducts() {
        if (this.products.length > 0) {
            this.products.forEach(product => {
                console.log(`Product Id: ${product.productId}, Product Name: ${product.productName}, Price: ${product.price}, Quantity: ${product.quantity} Category: ${product.productCategory}`);
            });
        }
    }
    showProductByCategory(productCategory) {
        let product = this.products.filter(product => product.productCategory === productCategory);
        if (product) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId}, Product Name: ${elem.productName}, Price: ${elem.price}, Quantity: ${elem.quantity} Category: ${elem.productCategory}`);
            });
        }
        else {
            console.log(`No Product Found`);
        }
    }
    showProductByQuantity(quantity) {
        let product = this.products.filter(product => product.quantity === quantity);
        if (product) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId}, Product Name: ${elem.productName}, Price: ${elem.price}, Quantity: ${elem.quantity} Category: ${elem.productCategory}`);
            });
        }
        else {
            console.log(`No Product Found`);
        }
    }
    showProductByPrice(price) {
        let product = this.products.filter(product => product.price === price);
        if (product) {
            product.forEach(elem => {
                console.log(`Product Id: ${elem.productId}, Product Name: ${elem.productName}, Price: ${elem.price}, Quantity: ${elem.quantity} Category: ${elem.productCategory}`);
            });
        }
        else {
            console.log(`No Product Found`);
        }
    }
}
