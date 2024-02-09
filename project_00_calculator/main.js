#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1500);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's start calculation");
    await sleep();
    rainbowTitle.stop();
}
async function Calculator() {
    await welcome();
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your first Number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second Number: "
        }
    ]);
    let num1 = Number(answers.num1);
    let num2 = Number(answers.num2);
    let operator = answers.operator;
    let result = 0;
    let operator1 = "";
    if (!num1 || isNaN(num1) || !num2 || isNaN(num2)) {
        console.log(chalk.bold.red('Please enter valid numbers.'));
    }
    else {
        if (operator === 'Addition') {
            result = num1 + num2;
            operator1 = "+";
        }
        else if (operator === 'Subtraction') {
            result = num1 - num2;
            operator1 = "-";
        }
        else if (operator === 'Multiplication') {
            result = num1 * num2;
            operator1 = "x";
        }
        else if (operator === 'Division') {
            result = num1 / num2;
            operator1 = "/";
        }
        console.log(chalk.bold.green(`Result of ${num1} ${operator1} ${num2} = ${result}`));
    }
}
async function runAgain() {
    do {
        await Calculator();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to run again the Calculator. If Yes, please Press Y or n"
            }
        ]);
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
}
runAgain();
