import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
}
class bot {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player;
do {
    player = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please Enter Your Name",
            validate: function (input) {
                if (input === "") {
                    return "Name cannot be empty. Please enter your name.";
                }
                return true;
            }
        }
    ]);
} while (!player.name.trim());
let bot2 = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        choices: ['Ioree', 'Ralph', 'James']
    }
]);
let p1 = new Player(player.name);
let bot3 = new bot(bot2.select);
do {
    // Ioree
    if (bot2.select === 'Ioree') {
        console.log(`${chalk.bold.green(player.name)} vs ${chalk.bold.red(bot2.select)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select your Option",
                choices: ['Attack', 'Drink Portion', 'Run for Fuel']
            }
        ]);
        if (ask.option === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            // console.log(chalk.bold.green(num))
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold('You loose! Hope winning next time'));
                    break;
                }
            }
            if (num <= 0) {
                bot3.fuelDecrease();
                console.log(chalk.red.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                if (bot3.fuel <= 0) {
                    console.log(chalk.green.bold('Hurray You Won'));
                    break;
                }
            }
        }
        if (ask.option === 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.option === 'Run for Fuel') {
            console.log(chalk.red.bold('You loose! Hope winning next time'));
            break;
        }
    }
    // Ralph
    if (bot2.select === 'Ralph') {
        console.log(`${chalk.bold.green(player.name)} vs ${chalk.bold.red(bot2.select)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select your Option",
                choices: ['Attack', 'Drink Portion', 'Run for Fuel']
            }
        ]);
        if (ask.option === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            // console.log(chalk.bold.green(num))
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold('You loose! Hope winning next time'));
                    break;
                }
            }
            if (num <= 0) {
                bot3.fuelDecrease();
                console.log(chalk.red.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                if (bot3.fuel <= 0) {
                    console.log(chalk.green.bold('Hurray You Won'));
                    break;
                }
            }
        }
        if (ask.option === 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.option === 'Run for Fuel') {
            console.log(chalk.red.bold('You loose! Hope winning next time'));
            break;
        }
    }
    // James
    if (bot2.select === 'James') {
        console.log(`${chalk.bold.green(player.name)} vs ${chalk.bold.red(bot2.select)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select your Option",
                choices: ['Attack', 'Drink Portion', 'Run for Fuel']
            }
        ]);
        if (ask.option === 'Attack') {
            let num = Math.floor(Math.random() * 2);
            // console.log(chalk.bold.green(num))
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold('You loose! Hope winning next time'));
                    break;
                }
            }
            if (num <= 0) {
                bot3.fuelDecrease();
                console.log(chalk.red.bold(`${bot3.name} fuel is ${bot3.fuel}`));
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                if (bot3.fuel <= 0) {
                    console.log(chalk.green.bold('Hurray You Won'));
                    break;
                }
            }
        }
        if (ask.option === 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.option === 'Run for Fuel') {
            console.log(chalk.red.bold('You loose! Hope winning next time'));
            break;
        }
    }
} while (true);
