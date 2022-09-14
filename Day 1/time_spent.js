function number() {
    for (var i=1; i<=10; i++) {
        console.log("The numbers are: " + i);
    }

}
console.time();
number();
console.timeEnd();