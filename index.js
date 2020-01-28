const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Xiyuan18",
    database: "employees"
});

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
                connection.end();
        }
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the new departments name?",
            name: "newDepartment"
        }
    ]).then(function (response) {
        var queryString = `INSERT INTO department (name) VALUES (?)`;
        var query = connection.query(queryString, response.newDepartment, function (error, response) {
            if (error) throw error;
            kickOff();
        });
    });
};

function addRole() {
    const departmentList = [];
    let departmentObjects;
    connection.query("SELECT * FROM department", function (error, response) {
        if (error) throw error;
        for (const item of response) {
            departmentList.push(item.name);
            departmentObjects = response;
        }
        inquirer.prompt([
            {
                type: "input",
                message: "What is the new role that you would like to add?",
                name: "newRole"
            },
            {
                type: "input",
                message: "What is the Salary of the new role?",
                name: "salary"
            },
            {
                type: "list",
                message: "What department is this role a part of?",
                name: "department",
                choices: departmentList
            }
        ]).then(function (response) {
            let departmentId;
            for (const item of departmentObjects) {
                if (item.name === response.department) {
                    departmentId = item.id;
                };
            };
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: response.newRole,
                    salary: response.salary,
                    department_id: departmentId
                },
                function (error, response) {
                    if (error) throw error;
                    kickOff();
                }
            );
        });
    });
};

function addEmployee() {
    // console.log("Add Employee");
    const employeeList = ["none"];
    const roleList = [];
    let employeeObjects;
    let roleObjects;
    connection.query("SELECT * FROM employee", function (error, response) {
        if (error) throw error;
        for (const item of response) {
            employeeList.push(item.name);
            employeeObjects = response;
        }
        connection.query("SELECT * FROM employee", function (error, response) {
            if (error) throw error;
            for (const item of response) {
                roleList.push(item.name);
                roleObjects = response;
            }
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the new employees first name?",
                    name: "firstName"
                },
                {
                    type: "input",
                    message: "What is the new employees last name?",
                    name: "lastName"
                },
                {
                    type: "list",
                    message: "Select the new employees role",
                    name: "role",
                    choices: roleList
                },
                {
                    type: "list",
                    message: "Who is the new employees manager?",
                    name: "manager",
                    choices: employeeList
                }
            ]).then(function (response) {
                let managerId;
                let roleId;
                if (manager === "none") {
                    managerId = null;
                } else {
                    for (const item of employeeObjects) {
                        if (item.name === response.manager) {
                            managerId = item.id;
                        };
                    };
                };
                for (const item of roleObjects) {
                    if (item.title === response.role) {
                        roleId = item.id;
                    };
                };
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: response.fistName,
                        last_name: response.lastName,
                        role_id: roleId,
                        manager_id: managerId
                    },
                    function (error, response) {
                        if (error) throw error;
                        kickOff();
                    }
                );
            });
        });
    });
};

function viewDepartments() {
    connection.query("SELECT * FROM department", function (error, response) {
        if (error) throw error;
        console.table(response);
        kickOff();
    });
};

function viewRoles() {
    connection.query("SELECT * FROM role", function (error, response) {
        if (error) throw error;
        console.table(response);
        kickOff();
    });
};


function viewEmployees() {
    // console.log("View Employees");
    connection.query("SELECT * FROM employee", function (error, response) {
        if (error) throw error;
        console.table(response);
        kickOff();
    });
}

function updateRole() {
    console.log("Update Role");
}

// database connection (uncomment later)
connection.connect(function (error) {
    if (error) throw error;
})

//function call outs
kickOff();