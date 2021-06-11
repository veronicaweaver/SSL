#grader class
class Grader
    def initialize(name, assignment, grade)
        #name, grade, and assignment name as instance variables 
        @grader_name = name
        @grader_grade = grade
        @grader_assignment = assignment
    end
    #method to calculate grade
    def getGrade
        if @grader_grade.to_f >=90
            puts @grader_name + "has a grade of: A, for "+@grader_assignment
        elsif @grader_grade.to_f >=80
            puts @grader_name + "has a grade of: B,  for "+@grader_assignment
        elsif @grader_grade.to_f >=70
            puts @grader_name + "has a grade of: C, for "+@grader_assignment
        elsif @grader_grade.to_f >=60
            puts @grader_name + "has a grade of: D, for "+@grader_assignment
        else
            puts @grader_name + "has a grade of: F, for "+@grader_assignment
    end
end

#assigns variables to input
puts "Enter student name?"
name = gets
puts "Enter assignment name?"
assignment = gets
puts "What is the grade for "+ assignment+"? (in numbers): "
grade = gets

#calls class and method
myGrade = Grader.new(name, assignment, grade)
myGrade.getGrade()
end 