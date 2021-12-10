select * FROM sakila.address;

CREATE INDEX postal_code_index ON sakila.address (postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON sakila.address;
