const numberOfOperations = 20;	//Moved declaration of variables to the beginning of file.

const daysOnSuccess = 13;
const daysOnFailure = 1;
const daysOnAttendance = 3;

let daysEarned = 0;

function mysteryOperation() {
	const outcome = Math.random(); // Generates a random number between 0 and 1.
	if (outcome < 0.5) {
		console.log("The operation is completed successfully!");
	}
	else {
		throw new Error("The operation is failed mysteriously!");
	}
}

for (let i = 0; i < numberOfOperations; i++) {
	try {
		mysteryOperation();
		daysEarned += daysOnSuccess;

	}
	catch (error) {
		mysteryOperation();
		daysEarned += daysOnFailure;
	}
	finally {
		mysteryOperation();
		daysEarned += daysOnAttendance
	}
}

console.log(daysEarned);