# Countdown Timer
This TypeScript program implements a countdown timer that prompts the user to enter a target time in seconds and then counts down from that time to zero, displaying the remaining time in hours, minutes, and seconds.

### How to Use

1. Make sure you have Node.js installed on your machine. 
2. **Clone Repository:** Clone this repository to your local machine.
3. Navigate to the project directory.
3. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
4. **Run the Program:** Start the application by running following commands:

```
tsc
then node main.js on command line
```


## Technologies Used:
 - `TypeScript:` A superset of JavaScript that adds static types to the language.
 - `Node.js:` A JavaScript runtime environment that allows you to run JavaScript code on the server-side.
 - `Inquirer:` A command-line interface for Node.js that facilitates user input.

## Code Explanation

1. `User Input:` The program uses the inquirer library to prompt the user to enter the target time in seconds.

2. `Input Validation:` The user input is validated to ensure it is a valid number using a validation function provided to the inquirer.prompt() method.

3. `Countdown Timer Function:` The countdownTimer() function calculates the remaining time based on the current time and the end time (start time + duration). It sets up a timer to run every second, updating the remaining time and displaying it in hours, minutes, and seconds. When the remaining time reaches zero, the timer stops, and a message is logged indicating that the countdown timer has ended.

4. `Formatting Time:` The formatTime() function ensures that the time values (hours, minutes, and seconds) are always non-negative and padded with leading zeros if necessary.

5. `Main Program Logic:` The main program logic prompts the user for input, starts the countdown timer with the specified duration in seconds, and displays the remaining time until the countdown timer ends.

## Author
This countdown timer program was created by [Abdul Wahab](https://www.linkedin.com/in/abdul-wahab-ansari).

