drop database if exists employees;
create database employees;

use employees;

create table department(
    id int auto_increment primary key,
    name varchar(30) not null
);

create table role(
    id int auto_increment primary key,
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null, 
    constraint fk_department foreign key (department_id) references department(id) on delete cascade
);

create table employee(
    id int auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null, 
    constraint fk_role foreign key (role_id) references role(id) on delete cascade,
    manager_id int, 
    constraint fk_manager foreign key (manager_id) references employee(id) on delete set null
);