/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const participant = {
    name: "John Doe",
    age: 25,
    studyField: "Computer Science"
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
participant.displayInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
participant.displayInfoArrow = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};

/*
 * Observations:
 * TODO: The arrow function doesn't have its own `this` context, so it inherits `this` from the enclosing scope. In this case, `this` is undefined because the arrow function is not inside another function.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propertyName, value) {
    return {
        ...obj,
        [propertyName]: value
    };
}

