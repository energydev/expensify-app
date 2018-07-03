import uuid from "uuid";
import database from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e) => {
            console.log("Add expense failed");
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveExpense = ({ id }) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const expRef = database.ref(`users/${uid}/expenses/${id}`);
        return expRef.remove()
            .then(function () {
                dispatch(removeExpense({ id }));
            })
            .catch(function (error) {
                console.log("Remove failed: " + error.message);
            });

    };
};

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const expRef = database.ref(`users/${uid}/expenses/${id}`);
        return expRef.update(updates).then(() => {
            return dispatch(editExpense(id, updates));
         }).catch((e) => {
            console.log("Data edit failed. ", e.message);
         });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});


// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES so the data actually changes

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
            const fetchedExpenses = [];

            snapshot.forEach((childSnapshot) => {
                fetchedExpenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(fetchedExpenses));
        });

    };
};



