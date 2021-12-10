SELECT * FROM sakila.film WHERE title LIKE '%ace%'; -- Requisito 1
SELECT * FROM sakila.film WHERE description LIKE '%china'; -- Requisito 2
SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord'; -- Requisito 3
SELECT * FROM sakila.film WHERE title LIKE '___gon%'; -- Requisito 4
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%'; -- Requisito 5
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%'; -- Requisito 6
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%'; -- Requisito 7