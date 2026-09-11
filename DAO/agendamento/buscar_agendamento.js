import {conexao} from '../conexao.js'


async function buscarAgendamento(){
  console.log('DAO de AGENDAMENTO')
    const sql = `SELECT * FROM tbl_agendamento;`
    
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


export {buscarAgendamento}
