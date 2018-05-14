import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

// should add an expense

test("should add an expense", () => {
    const newExpense = { description: "Smoothie", note: "", amount: 35000, createdAt: 1000, id: "4"  };
    const action = { type: "ADD_EXPENSE", expense: newExpense } ;
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);

});

test("should edit an expense", () => {
    const updates = { note: "This is a new note", amount: 200000 };
    const action = { type: "EDIT_EXPENSE", id: expenses[1].id, updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {...expenses[1], ...updates }, expenses[2]]);
});


test("should not edit an expense if expense not found", () => {
    const updates = { note: "This is a new note", amount: 200000 };
    const action = { type: "EDIT_EXPENSE", id: "-1", updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});