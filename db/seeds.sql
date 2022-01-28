INSERT INTO department (name)
VALUES ("engineering"),
    ("finance"),
    ("marketing"),
    ("sales");

SELECT * FROM DEPARTMENT;

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 120000, 1),
    ("Project Manager", 90000, 1),
    ("Engineering Manager", 225000, 1),
    ("Accountant", 70000, 2),
    ("Accounting Manager", 120000, 2),
    ("Product Marketing Manager", 50000, 3),
    ("Marketing Lead", 150000, 3),
    ("Sales Rep", 85000, 4);

SELECT * FROM roles;

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Matt", "Damon", 3, NULL),
    ("Brad", "Pitt", 5, NULL),
    ("Tom", "Holland", 6, NULL),
    ("Scarlett", "Johannson", 1, 1),
    ("Matthew", "Mcchonaghay", 4, 2),
    ("Bob", "Ross", 7, 3);

SELECT * FROM employee;