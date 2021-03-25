const { poolPromise } = require('../../config/database');

// pegar as porcentagens
// exports.getPorcent = async() => {
//     const pool = await poolPromise;
//     const rs = await pool   
//                 .request()
//                 .query(` SELECT result_especie_gato, result_especie_cao, result_especie_ave, total
//                          FROM(SELECT COUNT(especie_bicho) as result_especie_gato FROM cadastrar WHERE especie_bicho = 'Felina') result_especie_gato
//                          CROSS JOIN(SELECT COUNT(especie_bicho) as result_especie_cao FROM cadastrar WHERE especie_bicho = 'Canina') result_especie_cao
//                          CROSS JOIN(SELECT COUNT(especie_bicho) as result_especie_ave FROM cadastrar WHERE especie_bicho = 'Ave') result_especie_ave
                        
//                          CROSS JOIN(SELECT COUNT(*) as total FROM cadastrar) total
//                          `)
//     return rs.recordset;
// }


// para puxar os valores em uma lista
exports.getAll = async() =>{

    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`SELECT * FROM cadastrar`)

                return rs.recordset;
} 

exports.create = async(dados) => {


    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`INSERT INTO cadastrar (nome, cpf, tempo, especie_bicho, diagnostico, raca, nome_bicho,
                        valor, banho, vacina, tipo_vacina, endereco, bairro, cidade, telefone)
                VALUES ('${dados.nome}' , '${dados.cpf}' , '${dados.tempo}' , '${dados.especie_bicho}' , 
                        '${dados.diagnostico}' , '${dados.raca}' , '${dados.nome_bicho}' , '${dados.valor}' ,
                        '${dados.banho}' , '${dados.vacina}' , '${dados.tipo_vacina}' , '${dados.endereco}' ,
                        '${dados.bairro}' , '${dados.cidade}' , '${dados.telefone}' )`);
                        
    return rs.rowsAffected;                                
}

exports.delete = async(id) => {
    const pool = await poolPromise;
    const rs = await pool   
                     .request()
                     .query(`DELETE from cadastrar
                             WHERE id = ${id} `);
    return rs.rowsAffected;
}

exports.find = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT *
                    FROM cadastrar 
                    WHERE id = ${id} `);
    
            return rs.recordset;
}

// colocar no query quais outras infos vai querer mudar no editar ex: nome,idade,cidade etc 
// mas elas devem estar declaradas em CREATE

exports.update = async(id, dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`UPDATE cadastrar  SET 
                        nome = '${dados.nome}',
                        cpf =  '${dados.cpf}',
                        tempo = '${dados.tempo}',
                        especie_bicho = '${dados.especie_bicho}',
                        diagnostico = '${dados.diagnostico}',
                        raca = '${dados.raca}',
                        nome_bicho = '${dados.nome_bicho}',
                        valor = '${dados.valor}',
                        banho = '${dados.banho}',
                        vacina = '${dados.vacina}',
                        tipo_vacina = '${dados.tipo_vacina}',
                        endereco = '${dados.endereco}',
                        bairro = '${dados.bairro}',
                        cidade = '${dados.cidade}',
                        telefone = '${dados.telefone}'

                        WHERE id = ${id} `);
    return rs.rowsAffected;                                
}