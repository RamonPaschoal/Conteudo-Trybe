SELECT * FROM sakila.payment WHERE customer_id IN (269, 239, 126, 399, 142); -- Filtrada a tabela payment buscando todos os dados no qual a coluna customer seja (269, 239, 126, 399, 142)
SELECT * FROM sakila.address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas'); -- Filtrada a tabela address buscando todos os dados no qual a coluna district seja igual há ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas').

SELECT * FROM sakila.rental WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';