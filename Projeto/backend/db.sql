DROP DATABASE IF EXISTS farmacia;

CREATE DATABASE farmacia;

USE farmacia;

CREATE TABLE
    usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome_completo VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );

CREATE TABLE 
    remedios (
        id INT AUTO_INCREMENT PRIMARY KEY,
    );

CREATE TABLE 
    doacoes (
        id INT AUTO_INCREMENT PRIMARY KEY,
    )