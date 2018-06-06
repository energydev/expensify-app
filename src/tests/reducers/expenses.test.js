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

//have somme initial expenses passed to expensesReducer and then different ones for the action object
//dispatch an action and expect all the expenses passed in to be what's inside the state
//and any already existing to be gone
test("should set expenses", () => {
    const expensesToSet = [
        { description: "Mango Smoothie", note: "", amount: 35000, createdAt: 1000, id: "1"  },
        { description: "Paint", note: "", amount: 1500, createdAt: 35000, id: "2abcdef"  },
    ];
    const action = { type: "SET_EXPENSES", expenses: expensesToSet };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expensesToSet);

});