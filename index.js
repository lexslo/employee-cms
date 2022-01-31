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

// inquirer prompts and functions
const newDept = () => {
    inquirer.prompt({
        name: 'dept',
        type: 'text',
        message: 'Please enter the name of the new department:'
    })
    .then(answer => {
        addNewDepartment(answer.dept);
        return init();
    })
}

const newRole = () => {
    inquirer.prompt(
    {
        name: 'title',
        type: 'text',
        message: 'Please enter the title of the new role:'
    },
    {
        name: 'deptId',
        type: 'text',
        message: 'Please enter the department ID:'
    },
    {
        name: 'salary',
        type: 'text',
        message: 'What is the salary for this new role?'
    }
    )
    .then(answer => {
        addNewRole(answer.title, answer.deptId, answer.salary);
        return init();
    })
}

const newEmployee = () => {
    inquirer.prompt(
    {
        name: 'firstName',
        type: 'text',
        message: 'What is their first name?'
    },
    {
        name: 'lastName',
        type: 'text',
        message: 'What is their last name?'
    },
    {
        name: 'roleId',
        type: 'text',
        message: 'Please enter the role ID:'
    }, 
    {
        name: 'managerId',
        type: 'text',
        message: 'Please enter the employee manager ID:'
    }
    )
    .then(answer => {
        addNewEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId);
        return init();
    })
}

const updateEmployee = () => {
    inquirer.prompt(
    {
        name: 'id',
        type: 'text',
        message: 'Please enter the employee ID:'
    },
    {
        name: 'roleId',
        type: 'text',
        message: 'Please enter the ID of the new role:'
    }
    )
    .then(answer => {
        updateEmployeeRole(answer.id, answer.roleId);
        return init();
    })
}

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
        ]
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
                console.log('===== Adding new department =====');
                return newDept();

            case 'Add a role':
                console.log('===== Adding new role =====');
                return newRole();

            case 'Add an employee':
                console.log('===== Adding new employee =====');
                return newEmployee();

            case 'Update employee role':
                console.log('===== Updating employee role =====');
                return updateEmployee();

            case 'Quit':
                console.log('Goodbye!')
                return false;
        }
    })
}

init();