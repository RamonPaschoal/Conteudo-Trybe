USE sakila;
DELIMITER $$

CREATE PROCEDURE RetornarDezAtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(*) AS qtd_filmes FROM film_actor
    GROUP BY actor_id
    ORDER BY qtd_filmes DESC LIMIT 10;
END $$

DELIMITER ;

CALL RetornarDezAtoresMaisPopulares(); -- Requisito 1

-- -----------------------------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE RetornaFilmesPorCategoria(IN selectedCategory VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.`name` FROM film AS f
	INNER JOIN film_category AS fc
    ON f.film_id = fc.film_id
    INNER JOIN category AS c
    ON c.category_id = fc.category_id
    WHERE selectedCategory = c.`name`;
END $$

DELIMITER ;

CALL RetornaFilmesPorCategoria('Action'); -- Requisito 2

-- -----------------------------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE RetornaEmailCliente(IN emailCustomer VARCHAR(50), OUT isActive BOOLEAN)
BEGIN
	SELECT `active` FROM customer WHERE email = emailCustomer INTO isActive;
END $$

DELIMITER ;

SET @email = 'MARY.SMITH@sakilacustomer.org';
CALL RetornaEmailCliente(@email, @`status`);
SELECT @`status`; -- Requisito 3