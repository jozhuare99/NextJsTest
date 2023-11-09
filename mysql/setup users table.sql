CREATE 
TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  role VARCHAR(255) NOT NULL DEFAULT 'user',
  last_login_at TIMESTAMP NULL,
  PRIMARY KEY (id)
);