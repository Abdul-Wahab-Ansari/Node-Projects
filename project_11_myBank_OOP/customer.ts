import inquirer from "inquirer";

export default class Customer {
    private _pin: number ;
    firstName: string | undefined;
    lastName: string | undefined;
    gender: string | undefined;
    age: number | undefined;

    get pin() {
        return this._pin
    }

    set pin(val: number) {
        this._pin = val
    }

    constructor(pin: number, firstName?: string, lastName?: string, gender?: string, age?: number){
        this.pin = pin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    async accountGenerator() : Promise<void> {
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

