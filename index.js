const express = require('express')
const path = require('path')
const app = express()

const apiRootPath = '/api/v1'

const students = [
  {id: 1, nome: 'italo'},
  {id: 2, nome: 'italo'},
  {id: 3, nome: 'italo'},
  {id: 4, nome: 'italo'},
  {id: 5, nome: 'italo'},
  {id: 6, nome: 'italo'},
  {id: 7, nome: 'italo'},
  {id: 8, nome: 'italo'},
  {id: 9, nome: 'italo'},
]

app.get(path.join(apiRootPath, '/alunos'), (req, res) => {
  res.send(students)
})

app.get(path.join(apiRootPath, '/aluno/:studentId'), (req, res) => {
  const studentId = req.params.studentId
  const filteredStudents = students.filter(s => {
    if (s.id == studentId) return true
    return false
  }) 
  res.send(filteredStudents)
})

app.get(path.join(apiRootPath, '/simnao'), (req, res) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const possibleResults = ['sim', 'nao'];
  const randomZeroOrOne = getRandomInt(0, 1)

  res.send({resultado: possibleResults[randomZeroOrOne]})
})
 
const port = process.env.PORT || 3000;
app.listen(port)