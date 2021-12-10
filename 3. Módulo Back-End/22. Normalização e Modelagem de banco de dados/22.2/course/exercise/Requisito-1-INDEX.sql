SELECT * FROM sakila.category;

CREATE FULLTEXT INDEX ft_index ON sakila.category(`name`);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX ft_index ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';