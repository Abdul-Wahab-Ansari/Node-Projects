import inquirer from "inquirer";
import chalk from "chalk";

let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.82,
        "PKR": 278.97
    },
    "GBP": {
        "USD": 1.22,
        "GBP": 1,
        "PKR": 339.08
    },
}

const userCurrInput:{
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["USD", "GBP", "PKR"],
        message: "Select your Currency",
    },
    {
        type: "list",
        name: "to",
        choices: ["USD", "GBP", "PKR"],
        message: "Select Currency for Conversion",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount for COnversion",
    }
]);

const {from, to, amount} = userCurrInput;

if(from && to && amount){
    let result = conversion[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is: ${Math.floor(result)}`)
}else{
    console.log("Invalid Input");
}

