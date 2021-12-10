CREATE VIEW film_with_categories AS
SELECT f.title, c.category_id, c.`name` FROM sakila.film AS f
INNER JOIN film_category AS fc
ON f.film_id = fc.film_id
INNER JOIN category AS c
ON fc.category_id = c.category_id
ORDER BY f.title;

SELECT * FROM film_with_categories;