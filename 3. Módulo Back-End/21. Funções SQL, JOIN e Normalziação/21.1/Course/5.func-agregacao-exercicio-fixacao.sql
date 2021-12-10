SELECT AVG(length) AS 'Média de Duração' FROM sakila.film; -- Requisito 1
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film; -- Requisito 2
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film; -- Requisito 3
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film; -- Requisito 4
SELECT COUNT(length) AS 'Filmes Registrados' FROM sakila.film; -- Requisito 5