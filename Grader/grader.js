//readline
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//grader class
class Grader{
    //function to calculate grade
    getGrade = function(name, asmtName, grade){
        if (grade>=90){
            return name+"'s grade for "+asmtName+ " is: A"
        }else if(grade>=80){
            return name+"'s grade for "+asmtName+ " is: B"
        }
        else if(grade>=70){
            return name+"'s grade for "+asmtName+ " is: C"
        }else if(grade>=60){
            return name+"'s grade for "+asmtName+ " is: D"
        }else{
            return name+"'s grade for "+asmtName+ " is: F"
        }
        
    }
}
//readline questions to get information
rl.question("Enter student name? ", (name)=>{
    rl.question("Enter assignment name? ", (asmtName)=>{
        rl.question("What is the grade for "+asmtName+"? ",(grade)=>{
            //calling class and function
            myGrade = new Grader();
            console.log(myGrade.getGrade(name, asmtName, grade));
            //closing readline
            rl.close();
        })
    })
})