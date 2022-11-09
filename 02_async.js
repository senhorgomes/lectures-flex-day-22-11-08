//Asynchronous?
//Go on their own speed and pace
//Fast food
//A -> 5 minutes
//B -> 2 minutes
//C -> 1 second

//Synchronous
//Not at the same time
//Sit in restaurant
//A->B->C
// FIRST-> SECOND-> THIRD-> FOURTH
// FIRST-> FOURTH-> THIRD-> SECOND

console.log("FIRST")
for(let i = 0; i < 5; i++){
    console.log("Number", i)
}
setTimeout(()=>{
    console.log("SECOND")
}, 2000)

console.log("THIRD")

setTimeout(()=>{
    console.log("FOURTH")
}, 1000)

console.log("FIFTH")
