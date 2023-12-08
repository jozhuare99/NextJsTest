CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	storeId INT NOT NULL,
	isPaid BOOLEAN DEFAULT FALSE,
	phone VARCHAR(255) DEFAULT '',
	address VARCHAR(255) DEFAULT '',
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (storeId) REFERENCES Store(id)
	);