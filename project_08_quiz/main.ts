import inquirer from "inquirer";
import chalk from "chalk";


const apiLink = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple"

let fetchData = async (data: string) =>{
    let fetchFromApi: any = await fetch(data);
    let response = await fetchFromApi.json()
    return response
}


let data = await fetchData(apiLink)

let {results} = data;

let startQuiz = async () => {
    
    let score: number = 0;

    let stdntName = await inquirer.prompt(
        {
            type: "input",
            name: "StudentName",
            message: "Enter your name: "
        });

        for(let i = 1; i <= 5; i++){
            let ans = [...results[i].incorrect_answers,results[i].correct_answer]
            let answers = await inquirer.prompt({
                type: "list",
                name: "quiz",
                message: results[i].question,
                choices: ans.map((value:any)=>value) 
            })

            if(answers.quiz === results[i].correct_answer){
                ++score;
                console.log(`${chalk.bold.green("CORRECT")}`)
            }else{
                console.log(`${chalk.bold.red("WRONG ANSWER")} you chose ${chalk.bold.red(answers.quiz)}. Correct answer is ${chalk.bold.green(results[i].correct_answer)}`)
            }
        }
        console.log(`Dear ${chalk.bold.blue(stdntName.StudentName)} your score is ${score > 4 ? chalk.bold.green(score) : chalk.bold.red(score)} out of ${chalk.bold.yellow(5)}`)
}
startQuiz();