import inquirer from "inquirer";
import chalk from "chalk";



let fetchData = async (data: string) => {
    let fetchQuestions: any = await fetch(data);
    let res = await fetchQuestions.json();
    return res.questions;
}

let data = await fetchData(questionsData);

let startQuiz = async () => {
    let score: number = 0;

    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "StudentName",
            message: "Enter your name: "
        }
    ]);
}