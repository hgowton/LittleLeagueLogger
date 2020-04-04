DROP DATABASE IF EXISTS llldb;
CREATE DATABASE llldb;

USE llldb;


CREATE TABLE user
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar
    (100) NOT NULL,
	password varchar
    (100) NOT NULL,
    coach TINYINT (1) NOT NULL,
	team varchar
    (100) NOT NULL,
	PRIMARY KEY
    (id)
);


CREATE TABLE game
(
    game_id int NOT NULL
    AUTO_INCREMENT,
	location varchar
    (100) NOT NULL,
	date DATE
    NOT NULL,
    home_team varchar
    (100) NOT NULL,
    away_team varchar
    (100) NOT NULL,
	PRIMARY KEY
    (game_id)
);


CREATE TABLE scores
(
    game_id INT NOT NULL,
	inning INT NOT NULL, 
	home_score INT NOT NULL,
    guest_score INT NOT NULL,
	PRIMARY KEY
    (game_id)
);




