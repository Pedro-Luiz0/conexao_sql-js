
import express from 'express'


// BUSCAR DADOS

import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidade } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamento } from './DAO/agendamento/buscar_agendamento.js'
import { buscarMedico } from './DAO/medico/buscar_medico.js'
import { buscarConsulta } from './DAO/consulta/buscar_consulta.js'

// INSERIR DADOS

import { incluirPaciente } from './DAO/paciente/inserir_Paciente.js'
import { incluirEspecialidade } from './DAO/especialidade/inserir_especialidade.js'
import { incluirAgendamento } from './DAO/agendamento/inserir_agendamento.js'
import { incluirMedico } from './DAO/medico/inserir_medico.js'
import { incluirConsulta } from './DAO/consulta/inserir_consulta.js'


const app = express()

app.use(express.json())

app.get('/ola', (req, res) => {
    res.json({ mensagem: 'Ola MUNDOO!' })
})

app.get('/paciente', async (req, res) => {

    let pacientes = await buscarPacientes()

    res.json(pacientes)
})

app.post('/inserirPaciente', async (req, res) => {

    let {
        nome,
        endereco,
        telefone,
        doencasPrevias,
        remedioDeUsoContinuo
    } = req.body

    let infos = {
        nome,
        endereco,
        telefone,
        doencasPrevias,
        remedioDeUsoContinuo
    }

    let resp = await incluirPaciente(infos)

    res.send(resp)
})

app.get('/especialidade', async (req, res) => {

    let especialidades = await buscarEspecialidade()

    res.json(especialidades)
})

app.post('/inserirEspecialidade', async (req, res) => {

    let {
        nome,
        publicoAlvo
    } = req.body

    let infos = {
        nome,
        publicoAlvo
    }

    let resp = await incluirEspecialidade(infos)

    res.send(resp)
})

app.get('/agendamento', async (req, res) => {

    let agendamentos = await buscarAgendamento()

    res.json(agendamentos)
})

app.post('/inserirAgendamento', async (req, res) => {

    let {
        data,
        hora,
        queixa,
        gravidade
    } = req.body

    let infos = {
        data,
        hora,
        queixa,
        gravidade
    }

    let resp = await incluirAgendamento(infos)

    res.send(resp)
})

app.get('/medico', async (req, res) => {

    let medicos = await buscarMedico()

    res.json(medicos)
})


app.post('/inserirMedico', async (req, res) => {

    let {
        crm,
        nome,
        endereco,
        telefone,
        numeroRegistro
    } = req.body

    let infos = {
        crm,
        nome,
        endereco,
        telefone,
        numeroRegistro
    }

    let resp = await incluirMedico(infos)

    res.send(resp)
})


app.get('/consulta', async (req, res) => {

    let consultas = await buscarConsulta()

    res.json(consultas)
})


app.post('/inserirConsulta', async (req, res) => {

    let {
        data,
        hora,
        numeroBeneficiario,
        crm,
        numeroAgendamento
    } = req.body

    let infos = {
        data,
        hora,
        numeroBeneficiario,
        crm,
        numeroAgendamento
    }

    let resp = await incluirConsulta(infos)

    res.send(resp)
})


app.listen(3000, () => {

    console.log('🚀 Server is running on http://localhost:3000')
    console.log('🚀 http://localhost:3000/ola')
    console.log('🚀 http://localhost:3000/paciente')
    console.log('🚀 http://localhost:3000/especialidade')
    console.log('🚀 http://localhost:3000/agendamento')
    console.log('🚀 http://localhost:3000/medico')
    console.log('🚀 http://localhost:3000/consulta')

})