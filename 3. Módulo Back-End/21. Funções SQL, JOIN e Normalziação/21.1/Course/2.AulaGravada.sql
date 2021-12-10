SELECT * FROM sakila.film;

SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') FROM sakila.film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE rental_rate = 'NÃO CLASSIFICADO'
END AS valor
FROM sakila.film;