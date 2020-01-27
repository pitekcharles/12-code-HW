DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department(
    id INT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INT,
    title VARCHAR(30),
    salary DECIMAL(8,2),
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY(id)
);

