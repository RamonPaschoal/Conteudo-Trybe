SELECT * FROM sakila.film;

SELECT T1.title, T1.replacement_cost, T1.length, T2.title, T2.replacement_cost, T2.length
FROM sakila.film AS T1, sakila.film AS T2
WHERE T1.replacement_cost = T2.replacement_cost; -- Requisito 1

SELECT T1.title, T1.rental_duration, T2.title, T2.rental_duration
FROM sakila.film AS T1, sakila.film AS T2
WHERE T1.length = T2.length
HAVING T1.rental_duration BETWEEN 2 and 4;