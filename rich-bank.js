const accounts = [
	{ id: 1, owner: "Alice", balance: 500 },
	{ id: 2, owner: "Bob", balance: 300 }
];

function getAccountById(id) {
	for (const account of accounts) {
		if (account.id === id) //This needs to be triple equals because we are looking for a strict equality. 
		{
			return account;
		}
	}
}

function createAccount(newAccountId, newAccountOwner) {
	const account = getAccountById(newAccountId);
	if (account) {
		throw new Error("Account already exists")	//We need to be able to verify if there is already an account linked to these parameters
	}
	if (!Number.isFinite(newAccountId) || newAccountId <= 0) {
		throw new Error("Invalid value for account ID: The account ID must be a postive finite integer.");
	}
	if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "")	//Requires a string for account owner's name while assuring a usable format
	{
		throw new Error("Invalid account owner: The account owner must be a non-empty string,")	//
	}


	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: 0  //Balance must be a number and not a string
		}
	);
}

function depositMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found");
	}

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error("Invalid value for deposit amount: The amount must be a positive finite number.") //Ensures the deposit of a positive number
	}

	account.balance += amount;
}

function withdrawMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0) //Need valid funds greater than 0
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

	if (account.balance < amount) //Ensures proper funds are available for withdawal
	{
		throw new Error("Insufficient funds for withdrawal");

	}

	account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) 
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount) {
		throw new Error("Source account not found.");
	}

	if (!toAccount)	//Need to verify where the money is going as well
	{
		throw new Error("Destination account not found.")}

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	if (fromAccount.balance , amount)
	{
		throw new Error("Insufficient funds for transfer.")	//Must verify the ammount of money is available to send
	}
	toAccount.balance += amount;
}

/*
Hints:

getAccountById("1");
//This needs to be triple equals because we are looking for a strict equality.

createAccount(1, "Alice");
//We need to be able to verify if there is already an account linked to these parameters
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3., ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")//Balance must be a number and not a string
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)
//Ensures the deposit of a valid positive number


withdrawMoney(1, -100)
withdrawMoney(1, 0)//Need valid funds greater than 0
withdrawMoney(1, 501)//Ensures proper funds are available for withdawal

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
//Need to verify where the money is going as well
//Must verify the ammount of money is available to send
*/
