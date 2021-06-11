#READ FILES
#filed = File.read("myfile.txt").split(" ")

#filed.each{
#    |line| puts line
#}

#WRITING A FILE
#File.write("secondfile.txt","test")

#USER INPUT
puts "What is your name?"
name = gets

puts "your age?"
age= gets

puts name + " your age is: " + age

#VARIABLES
a = "Joe";
b = 1.5;
puts a

#FUNCTIONS
def myFunction()
    print("Test")
end
puts myFunction()

#LISTS
myList = [1, "Apples"]
puts myList[0]
#For each in list
for i in myList do
    puts i
end

#CONDITIONALS
x=5
if x > 2
    puts "X is greater than 2"
elsif x<=2 and x!=0
    puts "x is 1"
else
    puts "don't know"
end

#OOP
class Dog
    def initalize()
        @age=24 # @ is an instance variable
    end
    def getAge
        return @age
    end
end
myDog = Dog.new
print(myDog.getAge())