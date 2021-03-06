SELECT COUNT(*) FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25'; -- Requisito 1
SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005/08/22'; -- Requisito 2
SELECT
	DATE(rental_date) AS Data,
    YEAR(rental_date) AS Ano,
	MONTH(rental_date) AS Mês,
	DAY(rental_date) AS Dia,
	HOUR(rental_date) AS Hora,
	MINUTE(rental_date) AS Minuto,
	SECOND(rental_date) AS Segundo
FROM sakila.rental WHERE rental_id = 10330; -- Requisito 3
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59'; -- Requisito 4