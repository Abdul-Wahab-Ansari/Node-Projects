# To-Do List App

## Overview

This To-Do List App allows users to manage their tasks efficiently. Users can view their tasks, add new tasks, mark tasks as done, and exit the application. The program provides a simple and interactive interface using the command line.

## Features

- **Display Tasks:** View tasks along with their status (done or pending).
- **Add Task:** Add new tasks to the to-do list.
- **Mark Task as Done:** Mark tasks as done to track progress.
- **Interactive Menu:** Easy navigation through an interactive menu.
- **Colorful Interface:** Vibrant interface using chalk for color and chalk-animation for animations.

## Code Details

### Dependencies

- **inquirer:** Used for interactive command-line user interfaces.
- **chalk:** Used for styling command-line output with colors.

### Interfaces and Types

- **Task:** Defines the structure of a task, including description and completion status.

### Initialization

- **tasks:** Array containing task objects.

### Display Tasks Function

- **displayTasks():** Function to display the to-do list with status indicators.

### Add Task Function

- **addTask():** Function to add a new task to the to-do list.

### Mark Task as Done Function

- **markTaskDone():** Function to mark a task as done.

### Main Menu Function

- **mainMenu():** Function to display the main menu and handle user input.

### Exit Function

- **exit():** Function to display a farewell message when exiting the application.

## How to Run

1. **Clone Repository:** Clone this repository to your local machine.
2. **Install Dependencies:** Use `npm install or npm i` to install dependencies.
3. **Run the Program:** Start the application by running following commands:

```
tsc
then node index.js on command line
```

Enjoy managing your tasks with this simple and interactive To-Do List App!