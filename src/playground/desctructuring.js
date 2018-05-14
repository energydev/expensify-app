const person = {
    name: "Kristin",
    age: 27,
    location: {
        city: "Dallas",
        temp: 88
    }
};

const {name: firstName = "Anonymous", age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: "The Lion the Witch and the Wardrobe",
    author: "C.S. Lewis",
    publisher: {
        name: "HarperCollins"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//Array destructuring

const address = ["1234 Cool Street", "Dallas", "Texas", "75310"];

const [, city, state = "California"] = address;

console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (iced)", "$2.00", "$2.65", "$2.75" ];

const [product, smallPrice, mediumPrice, largePrice] = item;

console.log(`A ${product} costs ${mediumPrice}`);