import { conexao } from '../conexao.js'

async function incluirMedico(infos) {

    const data = [[
        infos.crm,
        infos.nome,
        infos.endereco,
        infos.telefone,
        infos.numeroRegistro
    ]]

    const sql = `
        INSERT INTO tbl_medico
        (crm, nome, endereco, telefone, numeroRegistro)
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

export { incluirMedico }