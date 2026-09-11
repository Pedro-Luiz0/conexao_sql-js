import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidade } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamento } from './DAO/agendamento/buscar_agendamento.js'
import { buscarMedico } from './DAO/medico/buscar_medico.js'
import { buscarConsulta } from './DAO/consulta/buscar_consulta.js'

const app = express()
app.use(express.json())

app.get('/ola', (req, res) => {
    res.json({ mensagem: 'Ola MUNDOO!' })
})

app.get('/paciente' , async (req, res) => {
    let pacientes = await buscarPacientes()
    //let pacientes = await resp.json()-
    res.json(pacientes)
})

app.get('/especialidade' , async (req, res) => {
    let especialidades = await buscarEspecialidade()
    //let especialidades = await resp.json()-
    res.json(especialidades)
})

app.get('/agendamento' , async (req, res) => {
    let agendamentos = await buscarAgendamento()
    //let agendamentos = await resp.json()-
    res.json(agendamentos)
})

app.get('/medico' , async (req, res) => {
    let medicos = await buscarMedico()
    //let medicos = await resp.json()-
    res.json(medicos)
})

app.get('/consulta' , async (req, res) => {
    let consultas = await buscarConsulta()
    //let consultas = await resp.json()-
    res.json(consultas)
})

app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
  console.log('🚀 Server is running on http://localhost:3000/ola')
  console.log('🚀 Server is running on http://localhost:3000/paciente')
  console.log('🚀 Server is running on http://localhost:3000/especialidade')
  console.log('🚀 Server is running on http://localhost:3000/agendamento')
  console.log('🚀 Server is running on http://localhost:3000/medico')
  console.log('🚀 Server is running on http://localhost:3000/consulta')
})
