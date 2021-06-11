import sys

#COLLECTING USER INPUT
#name = raw_input("What is your name? ")

#OUTPUT TO SCREEN
#print("Welcome: "+name)

#MATH
#age = raw_input("What is your age? ")
#print("In ten years you will be... ")
#print(int(age)+10)

#CREATE A FILE
#f = open("myfile.txt", "w")
#f.write("New line "+name)
#f.close()

#READ A FILE
#f = open("myfile.txt", "r")
#print(f.read())

#VARIABLES
a = "Joe";
b = 1;
print(a);


#FUNCTIONS
def myFunction():
    print('Test')

print(myFunction())

#LISTS
myList = [1, "Apples"]
print(myList[1])
#foreach in list
for x in myList:
    print(x)

#CONDITIONALS(needs the : after a statement)
name = "John"
if name in ["John", "Rick"]:
    print('Your name is either john or rick.')

#OOP
class Dog:
    def __init__(self): #This is the constructor
        age=24
    def getAge(self): #this is a method
        return self.age
myDog = Dog()
print(myDog.getAge())