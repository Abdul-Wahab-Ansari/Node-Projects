import inquirer from "inquirer";
import chalk from "chalk";
let balance = Math.floor(Math.random() * 100000);
let users = [
    {
        userId: 1234,
        userPin: 5678,
        balance: balance,
    },
    {
        userId: 5678,
        userPin: 1234,
        balance: balance,
    }
];
// Main loop Variable
let maxAttempts = 3;
let pinAttempts = 0;
// Inner Loop Variable
let repeat = true;
// Begin Asking the User PIN to Proceed further
do {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "UserPin",
            message: "Enter your PIN",
        },
    ]);
    const user = users.find(u => u.userPin === Number(answer.UserPin));
    // if (users[1].userPin === Number(answer.UserPin)) {
    if (user) {
        console.log(chalk.green.bold('Welcome to the ATM!'));
        console.log(chalk.magenta.bold(`Your Current Balance is: ${balance}`));
        while (repeat) {
            const transType = await inquirer.prompt([
                {
                    type: "list",
                    name: "selectedtransType",
                    choices: ["Fast Cash", "Withdraw", "Balance Inquiry"],
                    message: "Select an Option",
                },
                {
                    type: "list",
                    name: "amountFC",
                    choices: [500, 1000, 1500, 2000, 3000, 5000, 10000],
                    message: "Select an Amount",
                    when(transType) {
                        return transType.selectedtransType == "Fast Cash";
                    }
                },
                {
                    type: "number",
                    name: "amountWD",
                    message: "Please enter an Amount: ",
                    when(transType) {
                        return transType.selectedtransType == "Withdraw";
                    }
                },
            ]);
            // Balance Inquiry Begins
            if (transType.selectedtransType === "Balance Inquiry") {
                console.log(chalk.green.bold(`Your Current Balance is: ${user.balance}`));
                let restart = await inquirer.prompt([
                    {
                        type: "input",
                        name: "restartMsg",
                        message: "Do you want to continue",
                    }
                ]);
                if (!(restart.restartMsg.toLowerCase() === 'y' || restart.restartMsg.toLowerCase() === 'yes')) {
                    console.log(chalk.bgCyanBright.blue.bold("\n\tThank you for Using ABC Bank ATM Service"));
                    repeat = false;
                    maxAttempts = 0;
                }
            }
            else if (transType.selectedtransType === "Fast Cash") {
                const amountWithdrawn = transType.amountFC;
                if (amountWithdrawn > user.balance) {
                    console.log(chalk.red.bold("Insufficient balance for the withdrawal."));
                }
                else {
                    user.balance -= amountWithdrawn;
                    console.log(chalk.green.bold(`Your Updated Balance is: ${user.balance}`));
                }
            }
            else if (transType.selectedtransType === "Withdraw") {
                const amountWithdrawn = transType.amountWD;
                if (amountWithdrawn > user.balance) {
                    console.log(chalk.red.bold("Insufficient balance for the withdrawal."));
                }
                else {
                    user.balance -= amountWithdrawn;
                    console.log(chalk.green.bold(`Your Updated Balance is: ${user.balance}`));
                }
            }
        }
    }
    else {
        pinAttempts++;
        if (pinAttempts < maxAttempts) {
            console.log(maxAttempts, pinAttempts);
            console.log(chalk.red.bold(`Incorrect PIN. You have ${maxAttempts - pinAttempts} attempts remaining.`));
        }
        else {
            console.log(chalk.red.bold(`Incorrect PIN. Maximum attempts reached. Your card is blocked.`));
            break;
        }
    }
} while (maxAttempts > 0);
