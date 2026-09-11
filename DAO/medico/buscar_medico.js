import {conexao} from '../conexao.js'


async function buscarMedico(){
  console.log('DAO de MEDICO')
    const sql = `SELECT * FROM tbl_medico;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


export {buscarMedico}