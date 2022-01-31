const inquirer = require('inquirer');
const cTable = require('console.table');

// const Department = require('./lib/Department');
// const Employee = require('./lib/Employee');
// const Role = require('./lib/Role');

const init = () => {
    inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ],
        // check if no option was selected
        validate: (input) => {
            if(!input) {
                console.log('Select an option to proceed.');
                return false;
            }
            return true;
        }
    })
    .then(choice => {
        switch (choice) {
            case 'View all departments': 
                console.log('View all departments');
                // selectAllDepartments();
                init();
                break;
            case 'View all roles': 
                console.log('View all roles');
                // selectAllRoles();
                init();
                break;
            case 'View all employees': 
                console.log('View all employees');
                // selectAllEmployees();
                init();
                break;
            case 'Add a department':
                console.log('Add new department');
                // addNewDepartment();
                init();
            case 'Add a role':
                console.log('Add new role');
                // addNewRole();
                init();
            case 'Add an employee':
                console.log('Add new employee');
                // addNewEmployee();
                init();
            case 'Update employee role':
                console.log('Update employee role');
                // updateEmployeeRole();
                init();
            case 'Quit':
                console.log('Goodbye!')
                return false;
        }
    })
}

init();