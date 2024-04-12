# [JSL08] Submission: Singleton Pattern for Bank Branch Management

# Project overview
In this project I had to use the Singleton design pattern to manage a bank's branch information for our banking system. Since a Singleton desing pattern ensures that a class only one instance and provides a global point of access to it.

# Project Process
* For the rpoject after accessing the starter code from the github repository provided, I followed the step by step building process provided on the JavaScript file.
* I first declared a variable without initializing it to ensure that it stays as a falsy variable. This variable was going to be used inside the class.
* I created a class which contained a constructor with a parameter for the branch information argument and inside the constructor I have a conditional statement which check's if the variable declared initially is a falsy and if it is, than the parameter of the constructor is assigned to the property of branchInformation and the current instance is assigned to the variable. Outside the conditional statement, the variable containing the current instance is returned as a singleton instance.
* A method called getBankBranchInfo is created which returns the property of branchInformation.
* I than created two variable, the first one had assigned to it an object/instance with the argument passed as the bank branch information, the second variable I did the same creating new object/instance with a different argument.
* I then created two more variables which have assigned to them the property of the getBankBranchInfo method from the objects.
* I had the two variable console logged to showcase that we will still be getting the same instance and also did a conditional statement to check whether the two variable are the same and if the are it should console log a string that says "They are referring to the same instance."
  
# Challenges
For this project I didn't experience much difficulty, I just had to go back and re-read some of the concept's and utilise website such as mozilla to get better understanding of certain aspects of what was required.

# Feedback
For this project I looked and even brainstormed with other student's in the table I sit in to try figure out if there were any additional features we could add to this project, We couldn't think of anything. From my side I appreciate projects that also allow us to add even more functionality in the project's we have to submit.


