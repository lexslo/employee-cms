const db = require('./connection');

// For view all departments
const selectAllDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.table(result);
    });
};

// select all from roles
const selectAllRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.table(result);
    });
};

// select all from employees
const selectAllEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.table(result);
    });
};

// add new department
const addNewDepartment = name => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const data = name;

    db.query(sql, data, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.table(result.affectedRows);
    });
};

// add new role
const addNewRole = (title, dept_id, salary) => {
    const sql = `INSERT INTO role (title, dept_id, salary) VALUES (?,?,?)`;
    const data = [title, dept_id, salary];

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// add new employee
const addNewEmployee = (first_name, last_name, role_id, manager_id) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const data = [first_name, last_name, role_id, manager_id];

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// update employee role
const updateEmployeeRole = (id, role_id) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const data = [id, role_id];

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

module.exports = { 
    selectAllDepartments, 
    selectAllRoles,
    selectAllEmployees,
    addNewDepartment,
    addNewRole,
    addNewEmployee,
    updateEmployeeRole
};