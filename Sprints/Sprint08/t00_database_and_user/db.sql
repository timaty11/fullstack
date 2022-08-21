CREATE DATABASE ucode_web;

CREATE USER 'root'@'localhost' IDENTIFIED BY 'securepass';

GRANT ALL ON ucode_web.* TO 'root'@'localhost';