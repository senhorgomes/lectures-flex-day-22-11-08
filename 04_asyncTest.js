const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");
  setTimeout(() => {
    data.initials = "YAV";
    console.log(data.initials);
    callback();//INSIDE CALLBACK
  });

  console.log("AFTER TIMEOUT CALL");
};

console.log("BEFORE MAIN CALL");
const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});

// const resultAgain = higherOrderFunc
// result()
console.log("AFTER MAIN CALL");

///BEFORE MAIN CALL
//BEFORE TIMEOUT CALL || AFTER MAIN CALL
//data.initials       || BEFORE TIMEOUT CALL
//INSIDE CALLBACK     || data.initials 
//AFTER TIMEOUT CALL  || INSIDE CALLBACK 
//AFTER MAIN CALL     || AFTER TIMEOUT CALL
