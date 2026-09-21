function BankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient Balance");
      } else {
        balance -= amount;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = BankAccount(1000);
myAccount.deposite(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance());
