import sys

#grader class
class Grader: 
    def __init__(self):
        #name, assignment name, and grade as constructor
        gname = name;
        gasmtName = asmtName;
        ggrade = grade;
        #method to calculate grade
    def getGrade(self, name, asmtName, grade):
        if float(grade) >= 90:
            print (name+ "'s grade for "+asmtName+ " is: A")
        elif float(grade) >=80:
            print (name+ "'s grade for "+asmtName+ " is: B")
        elif float(grade) >=70:
            print (name+ "'s grade for "+asmtName+ " is: C")
        elif float(grade) >=60:
            print (name+ "'s grade for "+asmtName+ " is: D")
        else:
            print (name+ "'s grade for "+asmtName+ " is: F")


#assigns input to variable 
name = raw_input("Enter student name? ")
asmtName = raw_input("Enter assignment name? ")

#Validates if user typed number
while True:
    try:
        grade = float(raw_input("What is the grade for "+asmtName+"? (in numbers): "))
        break
    except:
        print('This is not a number... try again')

#calls class and method
myGrade = Grader()
print(myGrade.getGrade(name, asmtName, grade))

