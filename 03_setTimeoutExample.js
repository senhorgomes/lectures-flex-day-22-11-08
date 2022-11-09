// setTimeout(()=>{
//   console.log("TIME'S UP!")
// }, 5000)


// let x = 1;
// console.log(x)
// setTimeout(()=> {
//     x = 2;
//     console.log(x)
// }, 3000)
// console.log(x)
//Every 3 seconds it will console.log "Hello"
const helloInterval = setInterval(() => {
  console.log("Hello");
}, 3000);

setTimeout(()=>{
  clearInterval(helloInterval)
}, 9100)