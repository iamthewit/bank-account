export class Account {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}