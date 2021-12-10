USE sakila;
SELECT * FROM actor;
UPDATE actor
	SET first_name = 'JULES'
    WHERE first_name = 'JULIA'; -- Requisito 1

SELECT * FROM category;
UPDATE category
	SET name = 'Science Fiction'
    WHERE name = 'Sci-Fi'; -- Requisito 2

SELECT * FROM film;
UPDATE film
	SET rental_rate = 25
    WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20; -- Requisito 3

SELECT * FROM film;
UPDATE film
	SET rental_rate = (
		CASE
			WHEN length BETWEEN 0 AND 100 THEN 10
            WHEN length > 100 THEN 20
		END); -- Requisito 4