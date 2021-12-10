SELECT Piece, Price FROM Provides WHERE Provider = 'RBT'; -- Requisito 1
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5; -- Requisito 2
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2; -- Requisito 3
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC; -- Requisito 4
SELECT COUNT(*) FROM Provides WHERE Piece = 1; -- Requisito 5