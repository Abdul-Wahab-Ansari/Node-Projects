import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

// Define the task data structure
interface Task {
    description: string;
    done: boolean;
}

// List of tasks
const tasks: Task[] = [];

// Create a function to display the to-do list
function displayTasks() {
    console.clear();
    console.log(chalk.cyan.bold('To-Do List:\n'));

    tasks.forEach((task, index) => {
        const status = task.done ? chalk.green('✔') : chalk.red('◻');
        console.log(`${status} [${index + 1}] ${task.description}`);
    });

    console.log('');
}

// Create a function to add a new task
async function addTask() {
    const { description } = await inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Enter a new task:',
        },
    ]);

    tasks.push({ description, done: false });
    displayTasks();
}

// Create a function to mark a task as done
async function markTaskDone() {
    const { taskIndex } = await inquirer.prompt([
        {
            type: 'input',
            name: 'taskIndex',
            message: 'Enter the task number to mark as done:',
        },
    ]);

    const index = parseInt(taskIndex) - 1;

    if (index >= 0 && index < tasks.length) {
        tasks[index].done = true;
        displayTasks();
    } else {
        console.log(chalk.red('Invalid task number. Please try again.'));
        await chalkAnimation.radar('Invalid task number. Please try again.').stop();
    }
}
// Exit Function
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1500)
    })
}

async function exit() {
    let rainbowTitle = chalkAnimation.rainbow('Goodbye!');
    await sleep();
    rainbowTitle.stop();
}


// Main menu
async function mainMenu() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an action:',
            choices: ['View Tasks', 'Add Task', 'Mark Task as Done', 'Exit'],
        },
    ]);

    switch (choice) {
        case 'View Tasks':
            displayTasks();
            await mainMenu();
            break;
        case 'Add Task':
            await addTask();
            await mainMenu();
            break;
        case 'Mark Task as Done':
            await markTaskDone();
            await mainMenu();
            break;
        case 'Exit':
            exit();
            break;
    }
}

// Start the to-do app
console.log(chalk.yellow.bold('Welcome to the To-Do App!\n'));
mainMenu();
