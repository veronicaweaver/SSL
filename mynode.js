//READING A FILE
//var fs = require("fs");

//fs.readFile("myfile.txt", "utf8", function(err, contents){
//    console.log(contents);
//})

//WRITING A FILE
//var fs = require("fs");

//fs.writeFile("mynodefile.txt", "Test String", "utf8", function(err){
//    console.log("error: " +err);
//    console.log('done');
//})

//USER INPUT
//const readline = require("readline");

//const rl = readline.createInterface({
//    input:process.stdin,
//    output:process.stdout
//});

//rl.question("What is your name?", (name)=>{
//    rl.question("What is your favorite color?", (color)=>{
//        console.log(name+" "+color);
//        rl.close();
//    })
//})

class Car{
    doors = function(type){
    this.number=0;
    if(type=="Toyota"){
    this.number=4;
    }else{
    this.number = 2;
    }
    return this.number;
    }
}
module.exports = Car;
mycar = new Car();
console.log(mycar.doors("Honda"));