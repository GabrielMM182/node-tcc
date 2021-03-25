CREATE TRIGGER Trg_UPDATE_ave
ON  cadastrar 
AFTER INSERT 
AS
BEGIN

    DECLARE
    @especie_bicho FLOAT


    SELECT @especie_bicho = COUNT(especie_bicho)
    FROM cadastrar
    WHERE especie_bicho = 'Ave'

END