import inquirer from "inquirer";
class Person {
    personality = "Mystery";
    askQuestions(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name = "";
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    constructor(n) {
        super();
        this._name = n;
    }
}
(async () => {
    let uI;
    // let userInput: number | string;
    do {
        uI = await inquirer.prompt({
            type: "number",
            name: "userInput",
            message: "Type 1 if you like to talk to others, or type 2 if you would rather keep to yourself"
        });
        if (isNaN(uI.userInput)) {
            console.log(`Please enter a valid number`);
        }
    } while (isNaN(uI.userInput));
    const person = new Person();
    person.askQuestions(Number(uI.userInput));
    const studentNameInput = await inquirer.prompt({
        type: "input",
        name: "studentName",
        message: "Please enter your name"
    });
    const student = new Student(studentNameInput.studentName);
    console.log(`You are a:  ${person.getPersonality()} your name is: ${student.name}`);
})();
