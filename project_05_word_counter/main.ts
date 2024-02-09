import inquirer from "inquirer";
import chalk from "chalk";

const userInputWord: {
    userInput: string;
} = await inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Enter your sentence for counting the Words"
    }
]);

const words = userInputWord.userInput.trim().split(" ");

let wordsOrWords: string = "are";

if (words.length === 1) {
    wordsOrWords = "is";
}

console.log(chalk.bgGreen.bold.yellow(`Total words in your sentence ${wordsOrWords}: ${words.length}`));