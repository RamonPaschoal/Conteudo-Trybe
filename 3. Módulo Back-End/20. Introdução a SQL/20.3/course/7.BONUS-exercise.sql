USE Scientists;
SELECT * FROM Scientists WHERE Name LIKE '%e%'; -- Requisito 1
SELECT Name FROM Projects WHERE Code LIKE 'A%' ORDER BY Name; -- Requisito 2
SELECT Code, Name FROM Projects WHERE Code LIKE '%3%' ORDER BY Name; -- Requisito 3
SELECT Scientist FROM AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1'); -- Requisito 4
SELECT * FROM Projects WHERE Hours > 500; -- Requisito 5
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800; -- Requisito 6
SELECT Code, Name FROM Projects WHERE Name NOT LIKE 'A%'; -- Requisito 7
SELECT Name FROM Projects WHERE Code LIKE '%H%'; -- Requisito 8