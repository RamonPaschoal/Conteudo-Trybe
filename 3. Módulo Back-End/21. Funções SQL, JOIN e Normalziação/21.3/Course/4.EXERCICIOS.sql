SELECT * FROM movies;
SELECT * FROM movies_logs;
DROP TRIGGER IF EXISTS BeeMovies.delete_new_movie;
DELETE FROM movies WHERE movie_id = 2;
-- ------------------------------------------------------------------------------------------------------------------------------

DELIMITER $$
CREATE TRIGGER insert_new_movie
    BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;

-- --------------------------------------

DELIMITER $$
CREATE TRIGGER insert_movies_logs
    AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date) VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

INSERT INTO movies(ticket_price, ticket_price_estimation) VALUES (5.99, 6); -- Requisito 1

-- ------------------------------------------------------------------------------------------------------------------------------

DELIMITER $$
CREATE TRIGGER update_new_movie
    BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF (OLD.ticket_price < NEW.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs (movie_id , executed_action, log_date) VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

UPDATE movies SET ticket_price = 6.99 WHERE movie_id = 3; -- Requisito 2

-- ------------------------------------------------------------------------------------------------------------------------------

DELIMITER $$
CREATE TRIGGER delete_new_movie
    AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id , executed_action, log_date) VALUES (OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

INSERT INTO movies(ticket_price) VALUES (5.99);

DELETE FROM movies WHERE movie_id = 5; -- Requisito 3
