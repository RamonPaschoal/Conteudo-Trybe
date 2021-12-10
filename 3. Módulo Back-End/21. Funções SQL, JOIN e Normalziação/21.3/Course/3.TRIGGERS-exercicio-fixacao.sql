DELIMITER $$
CREATE TRIGGER insert_new_car
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSEÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros(preco) VALUES (150000);

SELECT * FROM carros; -- Requisito 1

-- ------------------------------------------------------------------------------
DELIMITER $$
CREATE TRIGGER update_car
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros SET preco = 200000 WHERE id_carro = 2;

SELECT * FROM carros; -- Requisito 2

-- ------------------------------------------------------------------------------
DELIMITER $$
CREATE TRIGGER delete_car
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 1;

SELECT * FROM log_operacoes; -- Requisito 3