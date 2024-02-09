# Adventure Game / Player Battle Game

This is a simple command-line player battle game where you, as a player, can battle against different bots named Ioree, Ralph, and James. 

The game involves making strategic choices to attack, replenish fuel, or run for more fuel.

## How to Play
1. Run the program.
2. Enter your name when prompted.
3. Choose one of the available bots to battle against.
4. Select your action:
     - `Attack:` Attempt to decrease the opponent's fuel level.
     - `Drink Portion:` Increase your own fuel level.
     - `Run for Fuel:` Choose to abandon the battle and run for more fuel.
5. Keep playing until either you or the bot runs out of fuel.
6. Once the battle ends, the game will display whether you won or lost.

## Code Details

### Classes
 - `Player:` Represents the player character with a name and a fuel level.
 - `Bot:` Represents the bot opponents with a name and a fuel level.

### Methods

 - `fuelDecrease():` Decreases the fuel level of the player or bot.
 - `fuelIncrease():` Increases the fuel level of the player.
 - `generateBot():` Randomly selects a bot opponent.
 - `battle():` Initiates the battle between the player and the selected bot.

### Libraries Used
 - `inquirer:` Used for interactive command-line user interfaces.
 - `chalk:` Used for styling command-line output with colors.

## How to Run

1. **Clone Repository:** Clone this repository to your local machine.
2. Navigate to the project directory.
3. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
4. **Run the Program:** Start the application by running following commands:

```
tsc
then node main.js on command line
```

## Notes
 - The game is designed to be played in the command-line interface.
 - Make sure to have Node.js installed on your system to run the program.