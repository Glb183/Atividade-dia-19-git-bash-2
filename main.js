const alunos = [
    {
        nome:"Jovens Titãs",
        tipo:"Ação"
    },
    {
        nome:"Du, Dudu e Edu",
        tipo:"Comédia"
    },
    {
        nome:"Hora de Aventura",
        tipo:"Aventura"
    }
]

const formulario = document.getElementById("formAluno")
const campoNome = document.getElementById("nome")
const campoCurso = document.getElementById("curso")
const corpoTabela = document.getElementById("corpoTabela")

function exibir(){
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < alunos.length; posicao++){

        const aluno = alunos[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.curso}</td>
            </tr>
       
        `
       
    }
}

exibir();

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const aluno = {
        nome: campoNome.value,
        curso: campoCurso.value
    }

    alunos.push(aluno)

    exibir()

} )