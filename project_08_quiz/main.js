import inquirer from "inquirer";
const questionsData = './questions.json';
let fetchData = async (data) => {
    let fetchQuestions = await fetch(data);
    let res = await fetchQuestions.json();
    return res.questions;
};
let data = await fetchData(questionsData);
let startQuiz = async () => {
    let score = 0;
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "StudentName",
            message: "Enter your name: "
        }
    ]);
    // for(let i = 0; i < 3; i++){
    //     let answers = [... data[i].incorrect_answers, data[i].correct_answer]
    // }
};
