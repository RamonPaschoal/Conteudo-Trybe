USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution'; -- Requisito 1
SELECT 1, 2, 3; -- Requisito 2
SELECT 10 + 5; -- Requisito 3
SELECT (10 * 5) + 10; -- Requisito 4
SELECT * FROM Scientists; -- Requisito 5
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects; -- Requisito 6
SELECT Name FROM Scientists ORDER BY Name; -- Requisito 7
SELECT Name FROM Projects ORDER BY Name desc; -- Requisito 8
SELECT CONCAT('O projeto', ' ', Name,  ' ', 'precisou de', ' ', Hours, ' ', 'horas para ser concluído.') FROM Projects; -- Requisito 9
SELECT Hours FROM Projects ORDER BY Hours desc LIMIT 3; -- Requisito 10
SELECT DISTINCT Project FROM AssignedTo; -- Requisito 11
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1; -- Requisito 12
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1; -- Requisito 13
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5; -- Requisito 14
SELECT CONCAT('Existem', ' ', COUNT(*), ' ', 'cientistas na tabela Scientists.') AS resultado FROM Scientists; -- Requisito 15