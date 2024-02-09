# Student Management System

This program serves as a student management system allowing users to perform various actions related to student management, such as adding students, enrolling them in courses, viewing balances, paying tuition fees, and showing student status.

## Code Details

### Dependencies
 - `inquirer`: Used for interactive command-line user interfaces.
 - `chalk`: Used for styling command-line output with colors.

### Student Class
 - Represents each student with properties like name, studentID, courses, and balance.
 - Methods include enrollCourse, showStatus, payTuition, and viewBalance.

### Student Data Generation
 - Generates a unique 5-digit student ID using Faker.

### Main Menu
 - Offers options to add a student, enroll in a course, view balance, pay tuition, show status, or exit.

### Actions
1. Add Student: Allows users to add a new student with a name and initial balance.
2. Enroll in Course: Enrolls a student in a course chosen from a list of available students.
3. View Balance: Displays the balance of a selected student.
4. Pay Tuition: Allows users to pay tuition fees for a selected student.
5. Show Status: Displays the status of a selected student, including their name, ID, enrolled courses, and balance.
6. Exit: Exits the program.

## Usage

1. **Clone Repository:** Clone this repository to your local machine.
2. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
3. **Run the Program:** Start the application by running following commands:

```
tsc
then node main.js on command line
```
4. Choose an action from the main menu.
5. Follow the prompts to perform the selected action.

## Notes
 - Ensure to provide valid inputs when prompted to avoid errors or unexpected behavior.
 - Follow the instructions displayed on the command line to navigate through the program.