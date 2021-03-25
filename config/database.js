const sql = require('mssql')



//  AMBIENTE LOCAL 
const config = 'mssql://sa:123456@DESKTOP-PCLIDCP/\SA/modelo'; //notebook

const config = 'mssql://sa:123456@DESKTOP-436GPST/\SA/modelo'; //pc


const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};

