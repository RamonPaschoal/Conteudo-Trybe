USE PecasFornecedores;
SELECT * FROM Pecas WHERE name LIKE 'GR%'; -- Requisito 1
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY fornecedor; -- Requisito 2
SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%N%'; -- Requisito 3
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC; -- Requisito 4
SELECT COUNT(*) FROM Fornecedores WHERE name LIKE '%F%'; -- Requisito 5
SELECT * FROM Fornecimentos WHERE preco BETWEEN 15 AND 40 ORDER BY preco; -- Requisito 6
SELECT COUNT(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019/07/30'; -- Requisito 7