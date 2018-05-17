import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});


test("should correctly add up a single expense", () => {
    const value = expenses[0].amount;
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(value);
});

test("should correctly add up multiple expenses", () => {
    const value = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const total = selectExpensesTotal([expenses[0],  expenses[1], expenses[2]]);
    expect(total).toBe(value);
});
