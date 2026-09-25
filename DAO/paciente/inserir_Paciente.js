import { conexao } from '../conexao.js'

async function incluirPaciente(infos) {

    const data = [[
        infos.nome,
        infos.endereco,
        infos.telefone,
        infos.doencasPrevias,
        infos.remedioDeUsoContinuo
    ]]

    const sql = `
        INSERT INTO tbl_paciente
        (nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo)
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

export { incluirPaciente }