# Command Line Calculator

This is a simple CLI (Command Line Interface) based calculator program developed using TypeScript and Node.js.

## Features

- Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
- User-friendly interface with interactive prompts.
- Error handling for invalid inputs.
- Option to run the calculator multiple times.

## Installation

To use this calculator, you need to have Node.js installed on your system. If you haven't installed Node.js yet, you can download and install it from [here](https://nodejs.org/).

Once you have Node.js installed, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Abdul-Wahab-Ansari/Node-Projects/tree/master/project_00_calculator
   
2. Navigate to the project directory

3. Install the dependencies:
   ```bash
   npm install
   
5. Run the calculator:
   ```bash
   tsc main.ts
   node main.js

Make sure you have installled Typescript & node on your local machine

## Usage
Upon running the calculator, you will be presented with a welcome message and prompted to enter your first and second numbers, along with the desired operation (addition, subtraction, multiplication, or division).

After providing the inputs, the calculator will display the result of the operation.

You will then be prompted to run the calculator again. If you choose to continue, you can perform additional calculations. If not, the calculator will exit.

## Example
Suppose you want to perform the following calculation:

First number: 10
Second number: 5
Operation: Addition

After running the calculator and providing the inputs, the output will be:
```bash
   Result of 10 + 5 = 15
```
## Dependencies
 - inquirer: A collection of common interactive command line user interfaces.
 - chalk: Terminal string styling done right. /n
 - chalk-animation: Animation utility for chalk.
