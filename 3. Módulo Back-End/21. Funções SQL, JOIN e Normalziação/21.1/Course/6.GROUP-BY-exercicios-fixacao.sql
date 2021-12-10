SELECT `active`, COUNT(*) FROM sakila.customer GROUP BY `active`; -- Requisito 1

SELECT `active`, store_id, COUNT(*) AS 'Qtde cliente' FROM sakila.customer GROUP BY `active`, store_id; -- Requisito 2

SELECT AVG(rental_duration) AS avg_rental_duration, rating FROM sakila.film GROUP BY rating ORDER BY avg_rental_duration DESC; -- Requisito 3

SELECT district, COUNT(*) AS avg_district FROM sakila.address GROUP BY district ORDER BY avg_district DESC; -- Requisito 4