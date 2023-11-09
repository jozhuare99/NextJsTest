CREATE TABLE sessions (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  sessionId VARCHAR(255) NOT NULL,
  expiration DATETIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user id) REFERENCES users (id)
)