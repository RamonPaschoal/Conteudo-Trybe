CREATE VIEW movies_languages AS
SELECT f.title, f.language_id, l.`name` FROM sakila.film AS f
INNER JOIN sakila.`language` AS l
ON f.language_id = l.language_id
ORDER BY f.title;

SELECT * FROM movies_languages;