CREATE DATABASE rss;

USE rss;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  subscription int
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

CREATE TABLE article (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url varchar(255) NOT NULL UNIQUE,
  yays int NOT NULL,
  nays int NOT NULL,
  fakes int NOT NULL,
  legits int NOT NULL,
  ratings int NOT NULL
);

CREATE TABLE comment (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  article_id int NOT NULL,
  user_id int NOT NULL UNIQUE,
  comment varchar(255) NOT NULL,
  yay boolean NOT NULL DEFAULT 0,
  nay boolean NOT NULL DEFAULT 0,
  fake boolean NOT NULL DEFAULT 0,
  legit boolean NOT NULL DEFAULT 0,
  rating int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(article_id) REFERENCES article(id)
);

CREATE TABLE article_comments (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int NOT NULL,
  comment_id int NOT NULL,
  article_id int NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(comment_id) REFERENCES comment(id),
  FOREIGN KEY(article_id) REFERENCES article(id)
);