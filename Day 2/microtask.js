console.log("Start!");

setTimeout(function(){
console.log("This is SettimeOut function");
},0)


var prom=new Promise(function (resolve,reject){
    if(true) {
        resolve("I am getting Resolved");
    }
    else {
        reject("Oops! Rejected");
    }

})

prom.then(function (result){
    console.log(result);

process.nextTick(() => {
    console.log('Executed in the next iteration');
  });


})
console.log("End!");