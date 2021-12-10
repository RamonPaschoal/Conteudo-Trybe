USE sakila;

SELECT act.actor_id, CONCAT(act.first_name, ' ', act.last_name), f.film_id FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f
ON act.actor_id = f.actor_id; -- Requisito 1

SELECT first_name, last_name, address FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id; -- Requisito 2

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name), c.email, a.address_id, a.address FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC LIMIT 100; -- Requisito 3

SELECT CONCAT(c.first_name, ' ', c.last_name), c.email, a.address, a.district FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%'; -- Requisito 4

SELECT CONCAT(c.first_name, ' ', c.last_name), COUNT(a.address) AS 'qtde de endereços' FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.`active` = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC; -- Requisito 5

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT CONCAT(s.first_name, ' ', s.last_name), AVG(p.amount) FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY CONCAT(s.first_name, ' ', s.last_name) ; -- Requisito 6

SELECT A.actor_id, CONCAT(A.first_name, ' ', A.last_name), F.film_id, F.title  FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F
ON FA.film_id = F.film_id; -- Requisito 7
