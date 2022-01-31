INSERT INTO department (name)
VALUES
    ('Sales'), 
    ('Engineering'), 
    ('Service'),
    ('Legal');

INSERT INTO role (title, dept_id, salary)
VALUES 
    ('Manager', 1, 100000.00),
    ('Manager', 2, 100000.00),
    ('Manager', 3, 100000.00),
    ('Manager', 4, 100000.00),
    ('Lead', 1, 80000.00),
    ('Lead', 2, 80000.00),
    ('Lead', 3, 80000.00),
    ('Lead', 4, 80000.00),
    ('Staff', 1, 65000.00),
    ('Staff', 2, 65000.00),
    ('Staff', 3, 65000.00),
    ('Staff', 4, 65000.00),
    ('Intern', 1, 20000.00),
    ('Intern', 2, 20000.00),
    ('Intern', 3, 20000.00),
    ('Intern', 4, 20000.00);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    -- Managers
    ('Anastazia', 'Polinksi', 1, NULL),
    ('Darius', 'Smith', 2, NULL),
    ('Angela', 'Woo', 3, NULL),
    ('Albus', 'Dumbledore', 4, NULL),
    -- Leads
    ('Minerva', 'McGonagall', 5, 1),
    ('Severus', 'Snape', 6, 2),
    ('Filius', 'Flitwick', 7, 3),
    ('Pomona', 'Sprout', 8, 4),
    -- Staff
    ('Argus', 'Filch', 9, 5),
    ('Cornelius','Fudge', 10, 6),
    ('Vernon', 'Dursley', 11, 7),
    ('James', 'Potter', 12, 8),
    -- Interns
    ('Harry', 'Potter', 13, 5),
    ('Hermione', 'Granger', 14, 6),
    ('Ronald', 'Weasley', 15, 7),
    ('Dobby', 'the House Elf', 16, 8);