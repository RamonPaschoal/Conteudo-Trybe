CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, a.city_id,  c.city FROM sakila.address AS a
INNER JOIN sakila.city AS c
ON a.city_id = c.city_id
ORDER BY c.city;

SELECT * FROM address_info;