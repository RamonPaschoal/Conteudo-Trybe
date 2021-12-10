USE sakila;
SELECT * FROM staff;
INSERT
	INTO staff (first_name, last_name, address_id, email, store_id, active, username)
    VALUES ('Ramon', 'Paschoal', 5, 'rpaschoal90@gmail.com', 1, 1, 'Ramon'); -- Requisito 1
    
INSERT
    INTO staff (first_name, last_name, address_id, email, store_id, active, username)
    VALUES('Fora', 'Bolsonaro', 17, 'forabolsonaro@corno.com', 2, 0, 'Corno'),
    ('Jonas', 'Jonas', 6, 'jonas@jonas.com', 2, 1, 'Jonas'); -- Requisito 2

SELECT * FROM actor;
INSERT
	INTO actor (first_name, last_name)
    SELECT first_name, last_name FROM customer WHERE customer_id BETWEEN 1 AND 5; -- Requisito 3

SELECT * FROM category;
INSERT
	INTO category (name)
    VALUES
    ('Jonas'),
    ('Fantasy'),
    ('Biogarphy'); -- Requisito 4
    
SELECT * FROM store;
INSERT
	INTO store (manager_staff_id, address_id)
    VALUES (3, 3); -- Requisito 5