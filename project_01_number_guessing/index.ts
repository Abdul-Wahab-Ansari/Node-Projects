#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const maxAttempts: number = 3;

// Printing the Welcome Message
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2500)
    })
}
async function welcome1() {
    let rainbowTitle = chalkAnimation.neon("Let's begin the Guessing Game");
    await sleep();
    rainbowTitle.stop();
}
async function welcome() {
    await welcome1();
    let instruction = chalkAnimation.karaoke("You will be given 3 chances")
    await sleep();
    instruction.stop();
}
//More chances || Health/Fuel Increased
const sleepForMoreChances = () => {
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}
async function moreChances() {
    let anChance = chalkAnimation.rainbow("CONGRATS !. 3 More chances have been alotted to you.")
    await sleepForMoreChances();
    anChance.stop();
}


async function guessingNumGame() {

    await welcome();

    let attempts: number = 0;
    let score: number = 0;
    let ranNum: number = Math.round(Math.random() * 10);
    
    while (attempts < maxAttempts) {
        let askUserGuess = await inquirer.prompt([
            {
                type: "number",
                name: "userInput",
                message: "Guess a number between 1 to 10: "
            }
        ])

        let userInput: number = askUserGuess.userInput;

        if (userInput === ranNum) {
            score += 10;
            console.log(chalk.green.bold(`Your answer is correct \n Score: ${score}`));
            ranNum = Math.round(Math.random() * 10);
            attempts = 0;
            await moreChances();
        } else {
            attempts += 1;
            console.log(chalk.red.bold("Try again"));
        }
    }
}
//Asking for new Round
async function runAgain() {
    while (true) {
        await guessingNumGame();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to Play another round. If Yes, please Press Y or N"
            }
        ])
        if (again.restart.toLowerCase() !== 'y' && again.restart.toLowerCase() !== 'yes') {
            console.log(chalk.yellow.bold.italic("Good Bye"));
            break;
        }
    }
}

runAgain();