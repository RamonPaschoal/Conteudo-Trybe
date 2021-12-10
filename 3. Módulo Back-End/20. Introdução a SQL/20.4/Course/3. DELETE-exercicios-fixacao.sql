USE sakila; 

SELECT * FROM film_actor;
DELETE FROM film_actor
	WHERE actor_id = 12; -- Requisito 1
    
SELECT * FROM actor;
DELETE FROM actor
	WHERE first_name = 'KARL'; -- Requisito 1

SELECT * FROM film_actor;
DELETE FROM film_actor
	WHERE actor_id IN (8, 103, 181); -- Requisito 2

SELECT * FROM actor;
DELETE FROM actor
	WHERE first_name = 'MATTHEW'; -- Requisito 2
    
SELECT * FROM film_text;
DELETE FROM film_text
	WHERE description LIKE '%saga%'; -- Requisito 3
    
SELECT * FROM film_actor;
TRUNCATE film_actor;
SELECT * FROM film_category;
TRUNCATE film_category; -- Requisito 4

-- Requisito 5 inspecionar tabelas na aba DDL

-- Requisito 6 Drop Schema no sakila e adicionar de novo