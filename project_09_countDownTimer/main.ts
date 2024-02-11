import inquirer from 'inquirer'; // Importing the 'inquirer' library to interactively prompt the user for input

// Prompting the user for input and storing the result in 'userRes'
let userRes = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "Please enter your target time",
    // Validating the user input to ensure it's a valid number
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number";
        } else {
            return true;
        }
    }
});

// Extracting the user input from 'userRes'
let input = userRes.userInput;

// Function to format time to ensure it's always non-negative and padded with leading zeros if necessary
function formatTime(time: number): string {
    return Math.max(time, 0).toString().padStart(2, '0');
}

// Function to start the countdown timer with the specified duration in seconds
function countdownTimer(durationInSeconds: number): void {
    // Getting the current time in milliseconds
    const startTime = new Date().getTime();

    // Calculating the end time by adding the duration to the start time
    const endTime = startTime + durationInSeconds * 1000;
    
    // Setting up a timer to run every second
    const timer = setInterval(() => {
        // Getting the current time in milliseconds
        const currentTime = new Date().getTime();
        // Calculating the remaining time by subtracting the current time from the end time
        const remainingTime = endTime - currentTime;
        
        // If remaining time is less than or equal to 0, clear the timer, log a message, and exit the process
        if (remainingTime <= 0) {
            clearInterval(timer);
            console.log("Countdown timer has ended.");
            process.exit();
        }
        
        // Calculating hours, minutes, and seconds from remaining time
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        // Logging the formatted time (hh:mm:ss)
        console.log(`${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`);
    }, 1000); // Timer runs every 1000 milliseconds (1 second)
}

// Starting the countdown timer with the user input duration in seconds
countdownTimer(input);
