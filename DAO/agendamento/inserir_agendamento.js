import { conexao } from '../conexao.js'

async function incluirAgendamento(infos) {

    const data = [[
        infos.data,
        infos.hora,
        infos.queixa,
        infos.gravidade
    ]]

    const sql = `
        INSERT INTO tbl_agendamento
        (data, hora, queixa, gravidade)
        VALUES ?
    `

    const conn = await conexao()

    try {

        const [results] = await conn.query(sql, [data])

        await conn.end()

        return results

    } catch (err) {

        await conn.end()

        return err.message
    }
}

export { incluirAgendamento }