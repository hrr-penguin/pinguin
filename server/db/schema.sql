CREATE DATABASE rss;

USE rss;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(20) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  subscription int DEFAULT 0
);

CREATE TABLE feeds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uri varchar(255) NOT NULL UNIQUE
);

CREATE TABLE users_feeds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int NOT NULL,
  feed_id int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(feed_id) REFERENCES feeds(id)
);
