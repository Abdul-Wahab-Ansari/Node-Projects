import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";
// Define a Student class to represent each student
class Student {
    studentID;
    name;
    courses;
    balance;
    constructor(name, studentID, initialBalance) {
        this.name = name;
        this.studentID = studentID;
        this.courses = [];
        this.balance = initialBalance;
    }
    // Method to enroll in a course
    enrollCourse(courseName) {
        this.courses.push(courseName);
        console.log(chalk.green(`Enrolled in ${courseName}.`));
    }
    // Method to display student status
    showStatus() {
        console.log(chalk.yellow.bold("Student Status:"));
        console.log(chalk.cyan(`Name: ${this.name}`));
        console.log(chalk.cyan(`Student ID: ${this.studentID}`));
        console.log(chalk.cyan("Courses Enrolled: "));
        this.courses.forEach(course => {
            console.log(chalk.cyan(`- ${course}`));
        });
        console.log(chalk.cyan(`Balance: $${this.balance}`));
    }
    // Method to pay tuition fees
    payTuition(amount) {
        if (amount > this.balance) {
            console.log(chalk.red("Insufficient balance to pay tuition."));
        }
        else {
            this.balance -= amount;
            console.log(chalk.green(`Tuition fees paid: ${amount}`));
        }
    }
    viewBalance() {
        console.log(chalk.cyan(`Balance for ${this.name}: ${this.balance} `));
    }
}
// Generate a unique 5-digit student ID using Faker
function generateStudentID() {
    const studentID = faker.datatype.number({ min: 10000, max: 99999 }).toString();
    return studentID;
}
const students = [];
const mainMenu = async () => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: ["Add Student", "Enroll in Course", "View Balance", "Pay Tuition", "Show Status", "Exit"],
        },
    ]);
    const studentList = students.map((student) => `${student.name} (ID: ${student.studentID})`);
    switch (answer.action) {
        case "Add Student":
            const studentNameAnswer = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter student name:",
                },
            ]);
            const initialBalanceAnswer = await inquirer.prompt([
                {
                    type: "number",
                    name: "initialBalance",
                    message: "Enter initial balance:",
                },
            ]);
            const studentName = studentNameAnswer.name;
            const initialBalance = initialBalanceAnswer.initialBalance; // Get initial balance
            const studentID = generateStudentID(); // Generate a unique ID
            const newStudent = new Student(studentName, studentID, initialBalance);
            students.push(newStudent);
            console.log(chalk.green.bold("Student added successfully!"));
            break;
        case "Enroll in Course":
            // Display a list of students
            // const studentList = students.map((student) => `${student.name} (ID: ${student.studentID})`);
            const enrollStudentAnswer = await inquirer.prompt([
                {
                    type: "list",
                    name: "studentToEnroll",
                    message: "Choose a student to enroll in a course:",
                    choices: studentList,
                },
            ]);
            // Find the selected student object
            const selectedStudent = students.find((student) => enrollStudentAnswer.studentToEnroll.includes(student.studentID));
            if (selectedStudent) {
                const courseAnswer = await inquirer.prompt([
                    {
                        type: "input",
                        name: "course",
                        message: "Enter the course name to enroll in:",
                    },
                ]);
                selectedStudent.enrollCourse(courseAnswer.course);
            }
            else {
                console.log(chalk.red.bold("Student not found."));
            }
            break;
        case "View Balance":
            if (students.length > 0) {
                const viewBalanceAnswer = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentToViewBalance",
                        message: "Choose a student to view balance:",
                        choices: studentList,
                    },
                ]);
                const selectedStudent = students.find((student) => viewBalanceAnswer.studentToViewBalance.includes(student.studentID));
                if (selectedStudent) {
                    selectedStudent.viewBalance();
                }
                else {
                    console.log(chalk.red.bold("Student not found."));
                }
            }
            else {
                console.log(chalk.red.bold("No students available to view balance."));
            }
            break;
        case "Pay Tuition":
            if (students.length > 0) {
                const payTuitionAnswer = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentToPayTuition",
                        message: "Choose a student to pay tuition for:",
                        choices: studentList,
                    },
                    {
                        type: "number",
                        name: "tuitionAmount",
                        message: "Enter the tuition amount:",
                    },
                ]);
                const selectedStudent = students.find((student) => payTuitionAnswer.studentToPayTuition.includes(student.studentID));
                if (selectedStudent) {
                    const tuitionAmount = payTuitionAnswer.tuitionAmount;
                    selectedStudent.payTuition(tuitionAmount);
                }
                else {
                    console.log(chalk.red.bold("Student not found."));
                }
            }
            else {
                console.log(chalk.red.bold("No students available to pay tuition."));
            }
            break;
        case "Show Status":
            // Display student status
            const statusAnswer = await inquirer.prompt([
                {
                    type: "list",
                    name: "studentToShow",
                    message: "Choose a student to show status:",
                    choices: studentList,
                },
            ]);
            const studentToShow = students.find((student) => statusAnswer.studentToShow.includes(student.studentID));
            if (studentToShow) {
                studentToShow.showStatus();
            }
            else {
                console.log(chalk.red.bold("Student not found."));
            }
            break;
        case "Exit":
            console.log(chalk.yellow.bold("Exiting the program."));
            return;
        default:
            console.log(chalk.red.bold("Invalid option. Please try again."));
    }
    mainMenu(); // Show the main menu again
};
console.log(chalk.cyan.bold("Welcome to the Student Management System!"));
// Start the main menu
mainMenu();
