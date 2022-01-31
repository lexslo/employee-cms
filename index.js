const inquirer = require('inquirer');
const cTable = require('console.table');
const { 
    selectAllDepartments, 
    selectAllRoles,
    selectAllEmployees,
    addNewDepartment,
    addNewRole,
    addNewEmployee,
    updateEmployeeRole } = require('./db/queries');

const init = () => {
    inquirer.prompt({
        name: 'menu',
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
    .then(answer => {
        switch (answer.menu) {
            case 'View all departments': 
                console.log('View all departments');
                selectAllDepartments();
                return init();
            case 'View all roles': 
                console.log('View all roles');
                selectAllRoles();
                return init();
            case 'View all employees': 
                console.log('View all employees');
                selectAllEmployees();
                return init();
            case 'Add a department':
                console.log('Add new department');
                addNewDepartment();
                return init();
            case 'Add a role':
                console.log('Add new role');
                addNewRole();
                return init();
            case 'Add an employee':
                console.log('Add new employee');
                addNewEmployee();
                return init();
            case 'Update employee role':
                console.log('Update employee role');
                updateEmployeeRole();
                return init();
            case 'Quit':
                console.log('Goodbye!')
                return false;
        }
    })
}

init();