import {conexao} from '../conexao.js'


async function buscarConsulta(){
  console.log('DAO de CONSULTA')
    const sql = `SELECT * FROM tbl_consulta;`
    
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


export {buscarConsulta}
