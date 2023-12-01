INSERT INTO users (name, email, password, created_at, updated_at, is_active, role)
VALUES
('John Doe', 'johndoe@email.com', 'password123', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user'),
('Jane Smith', 'janesmith@email.com', 'password456', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user'),
('Peter Jones', 'peterjones@email.com', 'password789', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user'),
('Mary Brown', 'marybrown@email.com', 'password1011', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user'),
('David Williams', 'davidwilliams@email.com', 'password1213', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user'),
('Sarah Miller', 'sarahmiller@email.com', 'password1415', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), TRUE, 'user');
