const inquirer = require("inquirer");
const mysql = require("mysql");

//variable creation


//function creation

// 1.0 this group of functions makes inquirer prompts and directs to other functions
// this function gets everything started asks user what they would like to do
function kickOff() {
    console.log("Welcome to the Employee Management System");
    inquirer.prompt({
        type: "list",
        message: "What do you hope to achieve today?",
        name: "choice",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Role",
            "Exit"
        ]
    }).then(function (response) {
        var choice = response.choice;
        switch (choice) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "Exit":
                endShit();
        }
    })
}

function addDepartment() {
    console.log("Add Department");
}

function addRole() {   
    console.log("Add role");
}

function addEmployee() {
    console.log("Add Employee");
}

function viewDepartments() {
    console.log("View Departments");
}

function viewRoles() {
    console.log("View Roles");
}


function viewEmployees() {
    console.log("View Employees");
}

function updateRole() {
    console.log("Update Role");
}

function endShit() {
    //This will likely not last, just filler for the moment while i work
    console.log("done!")
}


//function call outs
kickOff();