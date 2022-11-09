const numbers = [900, -500, 52, 603, 59, 81, 1, -50];

//Loop through this array.
//Console log each number, in order
const newArray = []
// let globalNumber = 100;
for (const number of numbers) {
    //numbers has 7 elements
    setTimeout(()=> newArray.push(number), number)
    // globalNumber += 100;
}
setTimeout(() => console.log(newArray), 1500)
