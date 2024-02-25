import inquirer from "inquirer";
export default class Customer {
    get pin() {
        return this._pin;
    }
    set pin(val) {
        this._pin = val;
    }
    constructor(pin, firstName, lastName, gender, age) {
        this.pin = pin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    async accountGenerator() {
        const createAccountAns = await inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "Your First Name: "
            },
            {
                type: "input",
                name: "lastName",
                message: "Your last Name: "
            },
            {
                type: "list",
                name: "gender",
                choices: ["Male", "Female"]
            },
            {
                type: "number",
                name: "age",
                message: "Your Age: "
            }
        ]);
        this.firstName = createAccountAns.firstName;
        this.lastName = createAccountAns.lastName;
        this.gender = createAccountAns.gender;
        // this._pin = createAccountAns.pin;
        this.age = createAccountAns.age;
    }
}
