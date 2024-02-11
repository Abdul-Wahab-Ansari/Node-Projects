# Quiz Application using TypeScript and Node.js
This is a simple quiz application built using TypeScript and Node.js. It fetches quiz questions from an external API, presents them to the user, and evaluates the user's answers.

## Features:
 - Fetches quiz questions from an external API (Open Trivia Database).
 - Allows users to input their name.
 - Presents quiz questions one by one.
 - Provides feedback on the correctness of the user's answers.
 - Calculates and displays the user's final score.

## Technologies Used:
 - `TypeScript:` A superset of JavaScript that adds static types to the language.
 - `Node.js:` A JavaScript runtime environment that allows you to run JavaScript code on the server-side.
 - `Inquirer:` A command-line interface for Node.js that facilitates user input.
 - `Chalk:` A library for styling console text with colors and styles.

## How to Run:
1. Make sure you have Node.js installed on your machine.
2. **Clone Repository:** Clone this repository to your local machine.
3. Navigate to the project directory.
3. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
4. **Run the Program:** Start the application by running following commands:

```
tsc
then node main.js on command line
```

## Code Overview:
 - The `fetchData` function fetches quiz data from the Open Trivia Database API.
 - The `startQuiz` function initiates the quiz by prompting the user to enter their name and then presenting the quiz questions.
 - For each quiz question, the user's answer is compared to the correct answer, and feedback is provided.
 - After all questions have been answered, the user's final score is displayed.

### Sample Output:

```
Enter your name: John
What is the capital of France?
  - Paris
  - Madrid
  - Berlin
  - London
Your answer: Paris
CORRECT!

Who wrote "To Kill a Mockingbird"?
  - Mark Twain
  - Harper Lee
  - J.K. Rowling
  - Charles Dickens
Your answer: Harper Lee
CORRECT!

...
...
...

Dear John, your score is 5 out of 5. Well done!

```

Enjoy the quiz!