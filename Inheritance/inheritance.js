// Lab

// class Governer {
//     static staticProperty = "I am honest";
//     static  staticMethod() {
//         return "I am an American";
//     }

// }
// console.log(Governer.staticProperty);
// console.log(Governer.staticMethod());

// class Person {
// 	constructor(name, age, eyeColor) {
// 		this.name = name;
// 		this.age = age;
// 		this.eyeColor = eyeColor;
// 	}

    // toString()
//sras}

// class PostalWorker extends Person {
// 	walks() {
// 		console.log("I deliver mail");
// 	}
// }

// class Chef extends Person {
// 	cooks() {
// 		console.log("I cook hot water");
// 	}
// 	cuts() {
// 		console.log("I can cut onions");
// 	}
// }
// const postalWorker1 = new PostalWorker("Sammie", 36, "Brown");

// const postalWorker2 = new PostalWorker("Charles", 45, "green");

// const chef1 = new Chef("Sammie", 36, "Brown");

// const chef2 = new Chef("Charles", 45, "green");

// console.log(postalWorker1);
// console.log(postalWorker2);
// console.log(chef1);
// console.log(chef2);

// chef1.cooks();
// postalWorker1.walks();

class BankAccount {
	constructor(ownerName, balance, acctNum) {
		this.ownerName = ownerName;
		this.balance = balance;
		this.acctNum = acctNum;
	}
	deposit(amount) {
		this.balance += amount;
	}
	withdraw(amount) {
		this.balance -= amount;
	}
}

class CheckingAccount extends BankAccount {
	constructor(ownerName, balance, acctNum) {
		super(ownerName, balance, acctNum);
	}
	withdraw(amount) {
		this.balance -= amount;
	}
	overdraftEnabled() {
		if (this.balance < 0) {
			return true;
		} else {
			return false;
		}
	}
}

class SavingsAccount extends BankAccount {
	constructor(ownerName, balance, acctNum) {
		super(ownerName, balance, acctNum);
	}
	withdraw() {
		console.log("You can't withdraw from a savings account");
	}
}
BankAccount.balance = 1000
BankAccount.deposit(100);
console.log(BankAccount.balance);