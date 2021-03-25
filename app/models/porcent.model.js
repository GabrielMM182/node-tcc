const { poolPromise } = require('../../config/database');

exports.create = async (dados) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`INSERT INTO cadastrar (especie_bicho) 
                            VALUES('${dados.especie_bicho}' )`);
    return rs;
}

exports.getAll = async () => {

    const pool = await poolPromise;
    const rs = await pool   
                .request()
                .query(` SELECT result_especie_gato, result_especie_cao, result_especie_ave, result_vacina_sim, result_vacina_nao ,total, result_banho_sim, result_banho_nao
                         FROM(SELECT COUNT(especie_bicho) as result_especie_gato FROM cadastrar WHERE especie_bicho = 'Felina') result_especie_gato
                         CROSS JOIN(SELECT COUNT(especie_bicho) as result_especie_cao FROM cadastrar WHERE especie_bicho = 'Canina') result_especie_cao
                         CROSS JOIN(SELECT COUNT(especie_bicho) as result_especie_ave FROM cadastrar WHERE especie_bicho = 'Ave') result_especie_ave
                         
                         CROSS JOIN(SELECT COUNT(vacina) as result_vacina_sim FROM cadastrar WHERE vacina = 'sim') result_vacina_sim
                         CROSS JOIN(SELECT COUNT(vacina) as result_vacina_nao FROM cadastrar WHERE vacina = 'nao') result_vacina_nao

                         CROSS JOIN(SELECT COUNT(banho) as result_banho_sim FROM cadastrar  WHERE banho = 'sim') result_banho_sim
                         CROSS JOIN(SELECT COUNT(banho) as result_banho_nao FROM cadastrar  WHERE banho = 'nao') result_banho_nao


                         CROSS JOIN(SELECT COUNT(*) as total FROM cadastrar) total
                         `)
    return rs.recordset;
}