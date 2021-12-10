SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org'; -- Requisito 1.
SELECT * FROM sakila.customer WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name; -- Requisito 2
SELECT title, description, release_year, replacement_cost FROM sakila.film WHERE rating <> 'NC-17' AND replacement_cost >= 18.00 ORDER BY replacement_cost DESC, title ASC LIMIT 100; -- Requisito 3
SELECT COUNT(*) AS qtd_clientes_ativos FROM sakila.customer WHERE active = 1 and store_id = 1; -- Requisito 4
SELECT * FROM sakila.customer WHERE active = 0 and store_id = 1; -- Requisito 5
SELECT * FROM sakila.film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50; -- Requisito 6