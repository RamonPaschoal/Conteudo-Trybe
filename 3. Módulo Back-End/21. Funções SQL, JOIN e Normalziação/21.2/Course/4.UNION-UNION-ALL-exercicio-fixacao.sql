SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor; -- Requisito 1

SELECT C.first_name, C.last_name FROM sakila.customer AS C
WHERE C.first_name LIKE '%tracy%'
UNION
SELECT A.first_name, A.last_name FROM sakila.actor AS A
WHERE A.first_name LIKE '%je%'; -- Requisito 2

(SELECT first_name FROM sakila.actor
ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name; -- Requisito 3

(SELECT first_name, last_name FROM sakila.actor)
UNION ALL 
(SELECT first_name, last_name FROM sakila.customer)
ORDER BY first_name LIMIT 15 OFFSET 45; -- Requisito 4