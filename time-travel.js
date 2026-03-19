/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(`New Destination Set: ${destination}`);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(`Travel Date Set: ${travelDate}`);

/*
 * Observations:// Attempting to reassign travelDate = "2025-03-15"; will throw a TypeError
 * TODO: Explain here.
 * Const variables are immutable and cannot be reassigned. Using let for mutable values is recommended and would allow us to change the travelDate.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);
var timeMachineModel = "T-800";
/*
 * Observations: Console.log prints "undefined" because var is hoisted to the top of the scope and initialized with undefined.
 * TODO: Explain here.
 */
