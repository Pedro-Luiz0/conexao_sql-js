import { conexao } from '../conexao.js'

async function incluirConsulta(infos) {

    const data = [[
        infos.data,
        infos.hora,
        infos.numeroBeneficiario,
        infos.crm,
        infos.numeroAgendamento
    ]]

    const sql = `
        INSERT INTO tbl_consulta
        (data, hora, numeroBeneficiario, crm, numeroAgendamento)
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

export { incluirConsulta }