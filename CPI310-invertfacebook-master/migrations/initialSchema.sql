-- Up

CREATE TABLE  users
(
	id INTEGER PRIMARY KEY,
	email STRING,
	name STRING,
	password STRING
);
CREATE TABLE messages 
(
	id INTEGER PRIMARY KEY,
	message STRING
);

CREATE TABLE authTokens
(
	id INTEGER PRIMARY KEY,
	token STRING,
	userID INTEGER,
	FOREIGN KEY (userID) REFERENCES users(id)
);

-- Down

DROP TABLE users;
DROP TABLE messages;
DROP TABLE authtokens;
