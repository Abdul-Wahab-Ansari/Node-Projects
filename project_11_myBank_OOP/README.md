# Object Oriented Programming with TypeScript Bank Console App
This project is a console-based banking application developed using Object-Oriented Programming principles in TypeScript. It allows users to perform basic banking operations such as depositing money, withdrawing money, checking balance, and creating accounts.

## Features
 - `Account Creation:` Users can create a new account by providing their personal information.
 - `Login and Authentication:` Users can log in using their account/pin number.
 - `Withdrawal:` Users can withdraw money from their accounts.
 - `Deposit:` Users can deposit money into their accounts.
 - `Balance Inquiry:` Users can check their account balance.
 - `Customer Details:` Users can view their account details.
 - `Error Handling:` The application handles incorrect inputs and displays appropriate error messages.
 - `Exit Option:` Users can exit the application.

## Project Structure
 - `Customer Class:` Defines the properties and methods for a bank customer, such as PIN, name, gender, age, and account generator. It allows the creation of new customer accounts.

 - `Bank Class:` Manages customer accounts and transactions. It includes methods to add customers, manage accounts, withdraw and deposit money, show account balances, and retrieve customer information.

 - `Main Program:` Implements the main functionality of the banking system. It allows existing customers to log in, perform transactions, view account details, and exit the system. New customers can also create accounts with auto-generated PINs.

## How to Use
1. `Installation:` Clone the repository and install dependencies using npm install.

2. `Run:` Execute the program using tsc && node main.js.

3. `Login or Create Account:` If you have an existing account, enter your pin number. Otherwise, choose the option to create a new account.

4. `Perform Operations:` Once logged in, select from the available options to perform banking operations such as withdrawal, deposit, balance inquiry, or view account details.

5. `Exit:` Choose the exit option when done.

## Technologies Used
 - TypeScript
 - Inquirer.js (for interactive command-line user interface)
 - Chalk (for colorful console output)
 - Faker.js
