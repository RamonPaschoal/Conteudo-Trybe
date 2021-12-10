SELECT * FROM sakila.film;

SELECT rating, AVG(length) AS avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115.0 AND 121.50
ORDER BY avg_length DESC; -- Requisito 1

SELECT rating, SUM(replacement_cost) AS sum_replacement_cost
FROM sakila.film
GROUP by rating
HAVING sum_replacement_cost > 3950.50
ORDER BY sum_replacement_cost; -- Requisito 1