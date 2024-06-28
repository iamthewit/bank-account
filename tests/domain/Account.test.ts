import {Account} from "../../src/domain/Account";
import {describe, expect, it} from "@jest/globals";

describe("Account", () => {
    it("should deposit money", () => {
        const account = new Account();
        account.deposit(100);
        expect(account.getBalance()).toBe(100);
    });

  it('should withdraw money', () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });
});