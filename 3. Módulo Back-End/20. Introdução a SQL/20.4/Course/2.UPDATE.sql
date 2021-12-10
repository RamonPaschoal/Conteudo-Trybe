SELECT * FROM staff;
INSERT
	INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
    VALUES('Ramon', 'Paschoal', 5, 'Rpaschoal90@gmail.com', 1, 1, 'Ramon', 'jonas123');
    
UPDATE staff
	SET first_name = 'Jonas', last_name = 'Jonas', username = 'Jonas'
    WHERE staff_id = 7;
    
SELECT * FROM actor;
UPDATE actor
	SET first_name = 'JONAS'
    WHERE actor_id IN (1, 2, 3); -- Dados fixos
    
SELECT * FROM actor;
UPDATE actor
	SET first_name = (
    CASE actor_id
		WHEN 1 THEN 'JOE'
        WHEN 2 THEN 'DAVIS'
        WHEN 3 THEN 'CAROLINE'
	ELSE first_name
END); -- Alterações individuais

SELECT * FROM staff;
UPDATE staff
	SET password = 'FavorResetarSuaSenha123'
    WHERE active = 1
    ORDER BY staff_id
    LIMIT 2;