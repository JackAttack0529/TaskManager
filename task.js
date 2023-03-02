// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
// ???
let userInput = prompt(menu);

// Loops and continues to the menu until the user ends/closes the Task Manager (AKA Until the user enters CLOSE (???))
while (userInput !== `CLOSE`){

  // CODE TO COMPLETE TASK MANAGER SHOULD BE WRITTEN HERE

  // Checks if user entered TASKS (???)
  if (userInput === `TASKS`){

    // The For Of loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks String variable
    for (task of tasks) {

      // Using \n to create a new line (AKA Line break) after each task
      showTasks += `${task}\n`;
    }

    // Display the current tasks to the user
    alert(showTasks);

    // Sets the value of the showTasks String variable back to an empty String
    showTasks = ``;
  }

  // Checks if user entered NEW (???)
  if (userInput === `NEW`){

    // Prompts the user to enter a new task and stores their response
    newTask = prompt(`Please enter the new task:`);

    // Adds the user's entry as a new item at the end of the tasks array
    tasks.push(newTask);

    // Alerts the user their new task has been added
    alert(`"${newTask}" has been added!`);
  }

  // Displays the menu again
  // ???
  userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using the Task Manager`);
