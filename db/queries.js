const db = require('./connection');

// select all from departments
const selectAllDepartments = () => {
    const sql = `SELECT * FROM department`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// select all from roles
const selectAllDepartments = () => {
    const sql = `SELECT * FROM role`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// select all from employees
const selectAllDepartments = () => {
    const sql = `SELECT * FROM employee`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// add new department
const addNewDepartment = name => {
    const sql = `INSERT INTO department VALUES (${name})`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// add new role
const addNewRole = (title, dept_id, salary) => {
    const sql = `INSERT INTO role VALUES (${title},${dept_id},${salary})`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// add new employee
const addNewEmployee = (first_name, last_name, role_id, manager_id) => {
    const sql = `INSERT INTO employee VALUES (${first_name},${last_name},${role_id},${manager_id})`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};

// update employee role
const updateEmployeeRole = (id, role_id) => {
    const sql = `UPDATE employee SET role_id = ${role_id} WHERE id = ${id}`;

    return db
        .promise()
        .query(sql)
        .then(([rows]) => rows)
};