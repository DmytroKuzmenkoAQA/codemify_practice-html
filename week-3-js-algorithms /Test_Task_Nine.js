// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."


// Your code here
const myName = "Dmyro";
const myAge = 33;

function compareAge(name, age) {
    if (myAge > age) {
        return console.log(`${name} is younger than me`);
    } else if (myAge < age) {
        return console.log(`${name} is older than me`);
    }
}

compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."