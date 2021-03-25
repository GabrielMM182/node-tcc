CREATE TRIGGER Trg_UPDATE_felina
ON  cadastrar 
AFTER INSERT 
AS
BEGIN

    DECLARE
    @especie_bicho FLOAT


    SELECT @especie_bicho = COUNT(especie_bicho)
    FROM cadastrar
    WHERE especie_bicho = 'Felina'

END