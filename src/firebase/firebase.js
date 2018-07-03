//takes all the named exports from firebase
//and dumps them on brand new variable called firebase
//firebase doesn't have a default export
import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUT_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

//initializes firebase to work with the specific application 
//whose config have provided
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// References on how this functionality could work is down below

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     });

// Setup a subscription for expenses
// Each time it changes get an array and print to the screen

// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // This will also fire one team for all of the data
// // already at the location
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });    

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// const expensesRef = database.ref("expenses");

// expensesRef.push( {
//     description: "Rent",
//     note: "This is June rent",
//     amount: 20000,
//     createdAt: 10000
// }).then(() => {
//     console.log("pushed expense rent");
// });




// database.ref("notes/-LEGjUQAN4JvEhyOfpe6").remove();

// database.ref("notes").push({
//     title: "Course topics",
//     body: "React"
// });

// database.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     const message = val.name + " is a " + val.job.title + " at " + val.job.company;
//     console.log(message);
// });

// setTimeout(() => {
//     database.ref("job/company").set("Google");
// }, 3500);

// database.ref().set({
//     name: "Kristin Ferrier",
//     age: 33,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     location: {
//         city: "Dallas",
//         country: "United States"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed. ", e.message);
// });

// //Change stressLevel to 9
// //Change job.company to "Amazon"
// //Change location.city to "Seattle"
// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// });

// database.ref("isSingle").remove().then(() => {
//     console.log("Removed isSingle");
// }).catch((e) => {
//     console.log("Failed to remove isSingle: ", e.message);
// });

