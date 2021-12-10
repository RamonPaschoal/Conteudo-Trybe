USE Pixar;

SELECT * FROM Theater;
SELECT * FROM Movies;
SELECT * FROM BoxOffice;

-- ---------------------------------------------------------------------------------------------------

SELECT m.title, bo.domestic_sales, bo.international_sales FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id; -- Requisito 1

-- ---------------------------------------------------------------------------------------------------

SELECT m.title, bo.domestic_sales, bo.international_sales FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.domestic_sales < bo.international_sales; -- Requisito 2

-- ---------------------------------------------------------------------------------------------------

SELECT m.title, bo.rating FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC; -- Requisito 3

-- ---------------------------------------------------------------------------------------------------

SELECT * FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.`name`; -- Requisito 4

-- ---------------------------------------------------------------------------------------------------

SELECT * FROM Movies AS m
RIGHT JOIN Theater AS t
ON t.id = m.theater_id
ORDER BY t.`name`; -- Requisito 5

-- ---------------------------------------------------------------------------------------------------

SELECT title FROM Movies
WHERE id IN (
	SELECT movie_id FROM BoxOffice WHERE rating > 7.5
);

SELECT m.title FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.rating > 7.5; -- Requisito 6

-- ---------------------------------------------------------------------------------------------------

SELECT rating FROM BoxOffice
WHERE movie_id IN (
	SELECT id FROM Movies WHERE `year` > 2009
);

SELECT bo.rating FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
WHERE m.year > 2009; -- Requisito 7

-- ---------------------------------------------------------------------------------------------------

SELECT t.`name`, t.location FROM Theater AS t
WHERE EXISTS (
	SELECT * FROM Movies WHERE t.id = Movies.theater_id
); -- Requisito 8

-- ---------------------------------------------------------------------------------------------------

SELECT t.`name`, t.location FROM Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Movies WHERE t.id = Movies.theater_id
); -- Requisito 9