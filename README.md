# 12-code-HW Charles Pitek

## About
This app is a command line run employee management system.

## Use
To use this app, in your command prompt cd into the directory where the app is stored.

Before you run the app, copy all the code in the schema.sql folder and run it in sql workbench (or an equivelent program to create your database).

You will also have to go into the index.js file and put your password into the quotes in on line 9.

Then run node index.js command to launch the app.

The database does not populate with any roles or departments so the first time you run it, you will want to add at least 1 department, and after that add at least 1 role and then start adding employees.

Once you are in the app you will have the following options:
Add Department
Add Role
Add Employee
View Departments
View Roles
View Employees
Update Employee Role
Exit

Add Department:
 This option allows you to make a new department. When creating a new department all that will be asked is the name of the department. Once this is entered you will be taken back to the options prompt.

Add Role: 
This option allows you to add a new role. When creating a new role you will be asked to enter the name of the new role, the salary of the new role, and which department the new role is part of. Once all of these are entered you will be taken back to the options prompt.

Add Employee:
This option allows you to add a new employee. When adding a new employee you will be asked to enter their first name, last name, role, and the employees manager (If the employee does not have a manager you are able to chose the none option). Once all of these are entered you will be taken back to the options prompt.

View Departments: 
This option will print out a list of all departments that have been created to the screen along with each departments id. Once the table has been printed you will be taken back to the options prompt, the table will stay visible in your command prompt if needed.

View Roles:
This option will print out a list of all roles that have been created, the table will have the roles title, salary, department id, and the roles id. Once the table has been printed you will be taken back to the options prompt, the table will stay visible in your command prompt if needed.

View Employees:
This option will print out a list of all employees that have been added to the system. The table will contain the employees last name, first name, role id, manager id, and the employees id. Once the table has been printed you will be taken back to the options prompt, the table will stay visible in your command prompt if needed.

Update Employee Role:
This option will allow you to change an employees roles. You will be prompted to chose an employee and a new role. Once you do you will be taken back to the options prompt.

Exit:
This option will exit the app.

## Technology
This app was created using javascript, node.js, and mysql.

### This is a Charles Pitek Project.