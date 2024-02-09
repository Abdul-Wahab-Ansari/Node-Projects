# Word Counter
This simple word counter program allows users to count the number of words in a sentence.

## Code Details

### Dependencies
 - `inquirer`: Used for interactive command-line user interfaces.
 - `chalk`: Used for styling command-line output with colors.

### User Input
The program prompts the user to enter a sentence for which they want to count the words.

### Word Counting
The program trims the user input to remove any leading or trailing spaces, then splits the input into an array of words using spaces as separators.

### Pluralization
Based on the number of words in the sentence, the program dynamically determines whether to use "is" or "are" in the output message.

### Output
The program displays the total number of words in the sentence along with appropriate grammar.

## Usage
To use the word counter:

1. Enter a sentence when prompted.
3. The program will display the total number of words in the sentence.

## How to Run

1. **Clone Repository:** Clone this repository to your local machine.
2. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
3. **Run the Program:** Start the application by running following commands:

```
tsc
then node index.js on command line
```

## Notes
Ensure that the sentence entered by the user is properly formatted to get accurate word count results.