/**
 * Filename: complex_code.js
 * 
 * Description: This code demonstrates a complex and sophisticated JavaScript program that simulates a banking system.
 * 
 * Author: Your Name
 */

// Importing necessary modules
const readline = require('readline');

// Class representing a bank
class Bank {
  constructor() {
    this.customers = [];
    this.accounts = [];
  }

  // Register a new customer
  registerCustomer(customer) {
    this.customers.push(customer);
    console.log('New customer registered successfully!');
  }

  // Open a new account for a customer
  openAccount(customer, account) {
    customer.accounts.push(account);
    this.accounts.push(account);
    console.log('New account opened successfully!');
  }

  // Deposit funds to an account
  deposit(account, amount) {
    account.balance += amount;
    console.log(`Deposited ${amount} into ${account.accountNumber}. Current balance: ${account.balance}`);
  }

  // Withdraw funds from an account
  withdraw(account, amount) {
    if (account.balance >= amount) {
      account.balance -= amount;
      console.log(`Withdrew ${amount} from ${account.accountNumber}. Current balance: ${account.balance}`);
    } else {
      console.log('Insufficient balance!');
    }
  }

  // Transfer funds between accounts
  transfer(senderAccount, receiverAccount, amount) {
    if (senderAccount.balance >= amount) {
      senderAccount.balance -= amount;
      receiverAccount.balance += amount;
      console.log(`Transferred ${amount} from ${senderAccount.accountNumber} to ${receiverAccount.accountNumber}`);
    } else {
      console.log('Insufficient balance!');
    }
  }
}

// Class representing a customer
class Customer {
  constructor(name, address, contactNumber) {
    this.name = name;
    this.address = address;
    this.contactNumber = contactNumber;
    this.accounts = [];
  }
}

// Class representing an account
class Account {
  constructor(accountType, initialDeposit) {
    this.accountNumber = generateAccountNumber();
    this.accountType = accountType;
    this.balance = initialDeposit;
  }
}

// Function to generate a random account number
function generateAccountNumber() {
  return Math.floor(Math.random() * 10000000000);
}

// Creating an instance of the bank
const bank = new Bank();

// Creating customers
const customer1 = new Customer('John Doe', '123 Main St', '555-1234');
const customer2 = new Customer('Jane Smith', '456 Elm St', '555-5678');

// Registering customers with the bank
bank.registerCustomer(customer1);
bank.registerCustomer(customer2);

// Opening accounts for customers
const account1 = new Account('Savings', 5000);
const account2 = new Account('Checking', 1000);
const account3 = new Account('Savings', 20000);

bank.openAccount(customer1, account1);
bank.openAccount(customer1, account2);
bank.openAccount(customer2, account3);

// Performing transactions
bank.deposit(account1, 1500);
bank.withdraw(account2, 200);
bank.transfer(account3, account2, 5000);

// Outputting customer account information
console.log('Customer 1 Accounts:');
customer1.accounts.forEach((account) => {
  console.log(`Account Number: ${account.accountNumber}, Type: ${account.accountType}, Balance: ${account.balance}`);
});

console.log('\nCustomer 2 Accounts:');
customer2.accounts.forEach((account) => {
  console.log(`Account Number: ${account.accountNumber}, Type: ${account.accountType}, Balance: ${account.balance}`);
});

// Adding more functionality...
// (More lines of code can be added here to further elaborate on the banking system)

// Creating a readline interface to get user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompting the user for input
rl.question('Please enter your name: ', (name) => {
  console.log(`Welcome, ${name}!`);
  rl.close();
});

// Handling the closing of the readline interface
rl.on('close', () => {
  console.log('Exiting the banking system...');
  process.exit(0);
});