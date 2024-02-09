# ATM Simulator

## Overview
This ATM simulator program allows users to perform banking transactions such as fast cash withdrawal, normal cash withdrawal, and balance inquiry. It validates user PINs, manages user accounts, and handles various transaction scenarios.

## Features
 - Validates user PINs and blocks the card after multiple failed attempts.
 - Offers transaction options including fast cash withdrawal, normal cash withdrawal, and balance inquiry.
 - Provides feedback messages for invalid PIN attempts and insufficient balance.
 - Allows users to continue or exit the ATM service after performing transactions.

# Code Details
## Dependencies
 - `inquirer`: Used for interactive command-line user interfaces.
 - `chalk`: Used for styling command-line output with colors.

## Interfaces and Types
 - `answersType`: Defines the structure of user input answers.
 - `Users`: Defines the structure of user data, including user ID, PIN, and balance.

## Initialization
 - `balance`: Randomly generates the initial balance for each user.
 - `users`: Array containing user data objects.

## Main Loop
 - `maxAttempts`: Number of maximum PIN attempts allowed.
 - `pinAttempts`: Number of PIN attempts made.
 - `repeat`: Boolean variable to control the repetition of the transaction loop.

## PIN Validation
 - `Prompts` the user to enter their PIN.
 - `Validates` the PIN against the stored user data.
 - `Blocks` the card after the maximum number of attempts is reached.

## Transaction Options
 - `Offers` transaction options such as fast cash withdrawal, normal cash withdrawal, and balance inquiry.
 - `Handles` different transaction scenarios based on user input.

## Transaction Handling
 - `Withdraws` cash from the user's account if the balance is sufficient.
 - `Displays` the updated balance after successful transactions.


## Additional Features
 - Provides feedback messages for invalid PIN attempts and insufficient balance.
 - Allows users to continue or exit the ATM service after performing transactions.

## How to Run

1. Clone this repository.
2. Install dependencies using npm install.
3. Run the program using following commands:

```
tsc
then node index.js on command line
```

Enjoy simulating ATM transactions with this program!