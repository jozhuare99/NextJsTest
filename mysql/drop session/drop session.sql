DELETE FROM sessions WHERE id IN (1);

-- if one user 
DELETE FROM sessions WHERE user_id = 'your_user_id';