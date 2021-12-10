CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title FROM sakila.actor AS a
INNER JOIN film_actor AS fa
ON fa.actor_id = a.actor_id
INNER JOIN film AS f
ON fa.film_id = f.film_id
ORDER BY actor;

SELECT * FROM film_info;