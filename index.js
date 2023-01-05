const inquirer = require("inquirer");

const connection=require("./db/connection")

function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Please from the following",
            choices: [
                {
                    name: "view all departments",
                    value: "viewdepartments"
                },
                {
                    name: "view all roles",
                    value: "viewroles"
                },
                {
                    name: "view all employees",
                    value: "viewemployees"
                },
                {
                    name: "add employee",
                    value: "addemployee"
                },
                {
                    name: "remove employee",
                    value: "removeemployee"
                },
                {
                    name: "update employee role",
                    value: "updateemployeerole"
                },
                {
                    name: "add employee role",
                    value: "addeemployeerole"
                },
                {
                    name: "remove employee role",
                    value: "removeeemployeerole"
                },
                {
                    name: "add employee department",
                    value: "addeemployeedepartment"
                },
                {
                    name: "remove employee department",
                    value: "removeeemployeedepartment"
                },
                {
                    name: "exit",
                    value: "exit"
                },


            ]
        }
    ]).then(res => {
        const { choice } = res
        switch (choice) {
            case "viewdepartments":
                viewdepartments()
                break;
            case "viewroles":
                // code block
                break;
            case "viewemployees":
                // code block
                break;
            case "addemployee":
                // code block
                break;
            case "removeemployee":
                // code block
                break;
            case "addeemployeedepartment":
                // code block
                break;
            case "removeemployeedepartment":
                // code block
                break;
            default:
            // code block
        }
    })
}

function viewdepartments(){
    connection.promise().query(
        "select * from departments"
    ) .then(data=>{
        console.log (data)
    })
}