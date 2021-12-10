SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

SELECT Id, Title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = B.Id
); -- Requisito 1

SELECT Id, Title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = B.Id AND B.Title LIKE '%lost%'
); -- Requisito 2

SELECT * FROM hotel.Customers;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Cars;

SELECT `Name` FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = C.CustomerID
); -- Requisito 3

SELECT C.`Name`, CS.`Name`  FROM hotel.Customers AS C
INNER JOIN hotel.Cars AS CS
WHERE EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CarID = CS.ID AND CustomerId = C.CustomerId
); -- Requisito 4