USE sakila;
DELIMITER $$

CREATE FUNCTION PaymentById(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payment INT;
	SELECT COUNT(customer_id) FROM payment
	WHERE payment.customer_id = id INTO total_payment;
    RETURN total_payment;
END $$

DELIMITER ;

SELECT PaymentById(1); -- Requisito 1

-- -----------------------------------------------------------------------------------------
DELIMITER $$

CREATE FUNCTION FilmNameById(inventory_id INT)
RETURNS VARCHAR(150) READS SQL DATA
BEGIN
	DECLARE film_name VARCHAR(150);
	SELECT title FROM film As F
    INNER JOIN inventory AS I
    ON F.film_id = I.film_id
    WHERE F.film_id = inventory_id LIMIT 1 INTO film_name;
    RETURN film_name;
END $$

DELIMITER ;

SELECT FilmNameById(1); -- Requisito 2

-- -----------------------------------------------------------------------------------------
DELIMITER $$

CREATE FUNCTION FilmsByCategory(category_film VARCHAR(20))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtd_film INT;
    SELECT COUNT(*) FROM film_category AS FC
    INNER JOIN category AS C
    ON C.category_id = FC.category_id
    WHERE C.`name` = category_film INTO qtd_film;
    RETURN qtd_film;
END $$

DELIMITER ;

SELECT FilmsByCategory('Action'); -- Requisito 3