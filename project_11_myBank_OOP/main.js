import { faker } from "@faker-js/faker";
import Customer from "./customer.js";
import Bank from "./Bank.js";
import inquirer from "inquirer";
import chalk from "chalk";
let ranGen = Math.random() > 0.5 ? "Male" : "Female";
let myBank = new Bank();
let existingCustomer;
let newCustomer;
for (let i = 0; i < 3; i++) {
    let firstName = faker.person.firstName(ranGen === "Male" ? 'male' : 'female');
    let lastName = faker.person.lastName(ranGen === "Male" ? 'male' : 'female');
    let gender = Math.random() > 0.5 ? 'Male' : 'Female';
    let age = faker.number.int({ min: 18, max: 100 });
    existingCustomer = new Customer(1000 + i, firstName, lastName, gender, age);
    myBank.addCustomer(existingCustomer);
    myBank.addAccountNumber({ pin: existingCustomer.pin, balance: 100 });
}
do {
    const ans = await inquirer.prompt({
        type: "number",
        name: "userInput",
        message: "If you have an account, Enter your PIN : "
    });
    let customer = myBank.getCutomerByPin(ans.userInput);
    if (customer) {
        console.log(`\n${chalk.bgGreen.bold.italic.yellow(`Hi Welcome to Apna Bank`)}\n`);
        const askOptions = await inquirer.prompt([
            {
                type: "list",
                name: "selectedOption",
                choices: ["Withdraw", "Deposit", "Show Balance", "Your Account Details", "Exit"]
            }
        ]);
        // Calling Withdraw
        if (askOptions.selectedOption === "Withdraw") {
            const askAmount = await inquirer.prompt({
                type: "number",
                name: "amount",
                message: "Enter Amount: "
            });
            myBank.withdrawAmount(customer.pin, askAmount.amount);
        }
        // // Calling Deposit
        if (askOptions.selectedOption === "Deposit") {
            const askAmount = await inquirer.prompt({
                type: "number",
                name: "amount",
                message: "Enter Amount: "
            });
            myBank.depositAmount(customer.pin, askAmount.amount);
        }
        // // Calling Show Balance
        if (askOptions.selectedOption === "Show Balance") {
            myBank.showBalance(customer.pin);
        }
        // // Account Details
        if (askOptions.selectedOption === "Your Account Details") {
            myBank.customerInfo(customer.pin);
        }
        // Exit
        if (askOptions.selectedOption === "Exit") {
            process.exit();
        }
    }
    else {
        const userChoice = await inquirer.prompt({
            type: "number",
            name: "userchoiceToCreateAccount",
            message: "If you want to create an account Press numeric 1. Or Press any key to Exit"
        });
        if (userChoice.userchoiceToCreateAccount === 1) {
            let newPin = faker.number.int({ min: 1004, max: 1999 });
            newCustomer = new Customer(newPin);
            await newCustomer.accountGenerator();
            // Adding Customer to Customers
            myBank.addCustomer(newCustomer);
            // Adding pin and Balance to BankAcount or account Array
            myBank.addAccountNumber({ pin: newPin, balance: 100 });
            if (newCustomer) {
                console.log(`Hi ${newCustomer.firstName + " " + newCustomer.lastName}, Your account has been succesfully created.\nYour pin is: ${chalk.bold.yellow(newPin)}`);
                console.log(chalk.bold.yellow(`Here are your complete details:`));
                myBank.customerInfo(newPin);
            }
        }
        else {
            process.exit();
        }
    }
} while (true);
