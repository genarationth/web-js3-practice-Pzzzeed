//Create function following below

const addFunction = (a,b) => {
    return a + b
}

console.log(addFunction(5,3));

const subtractFuntion = (a,b) => {
    return a-b
}

console.log(subtractFuntion(5,3));

const multiplyFuntion = (a,b) => {
    return a * b
}

console.log(multiplyFuntion(5,3));

const divideFuntion = (a,b) => {
    return a / b
}

console.log(divideFuntion(10,5));

// -----another exercise Create Function Inform---

let firstName = 'John';
let location = 'Bangkok';
let hobby = 'playing football'

const informFunction = (name,city,hobby) => {
    console.log("Hi, my name is " + name + " " + "I live in " + city + "and enjoy "+hobby);
    console.log(`Hi, my name is ${name} I live in ${city} and enjoy ${hobby}`);
}

informFunction(firstName,location,hobby)