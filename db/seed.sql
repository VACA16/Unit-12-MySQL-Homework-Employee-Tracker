use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100, 1),
    ('Sales Person', 80, 1),
    ('Lead Engineer', 150, 2),
    ('Software Engineer', 120, 2),
    ('Account Manager', 160, 3),
    ('Accountant', 125, 3),
    ('Legal Team Lead', 250, 4),
    ('Lawyer', 190, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Adan', 'Ortiz', 1, NULL),
    ('Vicente', 'Fernadez', 2, 1),
    ('Curtis', 'Jackson', 3, NULL),
    ('Marshall', 'Matters', 4, 3),
    ('Memo', 'Ochoa', 5, NULL),
    ('Joe', 'Biden', 6, 5),
    ('Osama', 'Binladin', 7, NULL),
    ('Mike', 'Jones', 8, 7);
    