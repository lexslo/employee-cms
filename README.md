# Employee Content Management System

## Description
A database that uses mySQL2 and Node.js to allow users to view and manage departments, roles, and employees in a company.

## Use
1. Download code and open terminal. Navigate to the root directory of the project and type:
```
npm install
```
2. Once dependencies are installed, type the following command to start the application:
```
node index
```
## Details
GIVEN a command-line application that accepts user input
- WHEN I start the application, I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments, I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles, I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees, I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department, I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role, I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee, I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role, I am prompted to select an employee to update and their new role and this information is updated in the database

## Video Demonstration
[Employee CMS Demo](https://drive.google.com/file/d/1J6wATRmhu9TD_Gy3ZG-v-0yfO1uOSdGw/view?usp=sharing)