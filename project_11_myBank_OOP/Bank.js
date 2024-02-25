import chalk from "chalk";
export default class Bank {
    constructor() {
        this.customers = [];
        this.account = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    addAccountNumber(accountNum) {
        this.account.push(accountNum);
    }
    getCutomerByPin(pin) {
        const customer = this.customers.find(customer => customer.pin == pin);
        return customer || null;
    }
    withdrawAmount(pin, amount) {
        const account = this.account.find(account => account.pin === pin);
        const balance = account?.balance ?? 0;
        if (!account) {
            console.log(chalk.bold.red("Account Not Found"));
            return;
        }
        if (balance > amount) {
            if (amount > 100) {
                account.balance -= 1;
            }
            account.balance -= amount;
            console.log(amount > 100 ? chalk.bold.green("Transaction Succesfully Completed Service Charges $ 1 deducted") + ` Your current balance is: ${chalk.bold.yellowBright(account.balance)}` : chalk.bold.green("Transaction Succesfully Completed"));
        }
        else {
            console.log(chalk.bold.red("Insufficient Balance!"));
        }
    }
    depositAmount(pin, amount) {
        const account = this.account.find(account => account.pin === pin);
        const balance = account?.balance ?? 0;
        if (!account) {
            console.log(chalk.bold.red("Account Not Found"));
            return;
        }
        if (amount > 0) {
            account.balance += amount;
            console.log(`${chalk.bold.green("Transaction Succesfully Completed")} Your current balance is: ${chalk.bold.yellow(account.balance)}`);
        }
        else {
            console.log(chalk.bold.red("Invalid Amount!"));
        }
    }
    showBalance(pin) {
        const account = this.account.find(account => account.pin === pin);
        console.log(chalk.bold(`Your current balance: ${chalk.bold.italic.yellow(account?.balance)}`));
    }
    // Declaring Customer Info Method
    customerInfo(pin) {
        let customer = this.customers.find(account => account.pin == pin);
        if (customer) {
            console.log(`First Name: ${customer.firstName} \nLast Name: ${customer.lastName} \nGender: ${customer.gender} \nAge: ${customer.age} \nYour Pin: ${customer.pin}`);
        }
    }
}
