use ucode_web;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE admins (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    user_login VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY(id_user) REFERENCES users(id) ON DELETE CASCADE
);
