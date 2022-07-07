

create table todos (
    id int primary key not null AUTO_INCREMENT,
    task VARCHAR(50) not null,
    description VARCHAR(1000),
    is_done BOOLEAN
);

create table users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) not null UNIQUE,
    pw_hash VARCHAR(1000) NOT NULL
);

insert into users(email, pw_hash) values(?, ?)