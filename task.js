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

  // Checks if user entered REMOVE (???)
  if (userInput === `REMOVE`){

    // Concatenates each task/item in the tasks array to the showTasks String variable. Also, sets/displays a number for each task.
    for (i = 0; i < tasks.length; i++){

      // Adding 1 to i (AKA The index) so the numbers will start displaying at 1. Also, using \n to create a new line (AKA Line break)
      showTasks += `${i + 1}: ${tasks[i]}\n`;
    }

    // Prompts the user to enter a number and stores their response to the num variable
    // Using \n to create a new line (AKA Line Break)
    // Subtracting 1 from the user's entry to that it matches the index of the item that user wants to remove from the tasks array
    // Just like ParseInt, JavaScript will attempt to convert a String into a Number when you try to Subtract from it. So ParseInt is NOT necessary here.
    num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;

    // Removes the task/item selected by the user from the tasks array. Also, set the task/item that was removed to the REMOVED variable (NOTE: Splice returns the value(s) that is removed as an item(s) in an array)
    removed = tasks.splice(num , 1);

    // Alerts user with the task/item that has been removed (NOTE: Using index on the REMOVED variable here because splice returns the value that is removed as an item in an array)
    alert(`${removed[0]} has been removed`);

    // Sets the value of the showTasks String variable back to an empty String
    showTasks = ``;
  }

  // Displays the menu again
  // ???
  userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using the Task Manager`);
