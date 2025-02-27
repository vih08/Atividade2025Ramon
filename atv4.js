/*  Gerar a tabuada de um número utilizando o laço for
4: Dado o seguinte array, crie um programa utilizando o laço forEach que some as notas de todos os alunos:
const alunos = [
{ aluno: 'joao', nota: 10 },
{ aluno: 'maria', nota: 6 },
{ aluno: 'mateus', nota: 8 },
{ aluno: 'diego', nota: 7 },]*/

const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
  ]
  
  let somaNotas = 0

  alunos.forEach(aluno => {
    somaNotas += aluno.nota;
  })
  
  console.log(somaNotas)

  

  