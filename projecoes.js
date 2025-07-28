let custosTotais = []

function calcularBreakEven() {
    const custoTotal = document.getElementById("custoTotal")
    const custosTotais = Number(custoTotal.innerText)
    const precoProduto = document.getElementById("precoProduto").value
    const minimoVendas = document.getElementById("minimoBreakEven")
    minimoVendas.innerText = (custosTotais / precoProduto).toFixed(2)
}

function calcularMargem () {
    const custoTotal = document.getElementById("custoTotal")
    const qtdVendida = document.getElementById("qtdVendida").value
    const precoProduto = document.getElementById("precoProduto").value
    let receita = qtdVendida * precoProduto 
    document.getElementById("receita").innerText = `R$ ${receita}`
    const custosTotais = custoTotal.innerText
    const margemLiquida = document.getElementById("margemLiquida")
    margemLiquida.innerText = `${((receita - custosTotais) * 100 / receita).toFixed(2)}% ou R$ ${(receita - custosTotais)}`
}

function adicionarCusto() {
    const custoTotal = document.getElementById("custoTotal")
    const novoCusto = document.getElementById("novoCusto").value
    const valor = document.getElementById("valor").value
    const custosFixosList = document.getElementById("custosFixosList")
    const listaDeCustosExistentes = Array.from(custosFixosList.getElementsByTagName("li")).map((li) => li.innerText.toLowerCase())
    const mensagem = document.getElementById("mensagem")
    if (!listaDeCustosExistentes.includes(novoCusto.toLowerCase()) && novoCusto !== '' && valor !== '') {
        custosFixosList.innerHTML += `<li>${novoCusto}</li><span>${valor}</span>`
        mensagem.innerText = ""
        custosTotais.push(Number(valor))
    } if (novoCusto === '' || valor === '') {
        mensagem.innerText = "Você esqueceu de adicionar alguma informação do custo"
        
    } if (listaDeCustosExistentes.includes(novoCusto.toLowerCase())) {
        mensagem.innerText = "Você já colocou este custo"
    }
        
    console.log(custosTotais)
    custoTotal.innerText = custosTotais.reduce((pv, na) => pv + na)
}

function adicionarSocio() {
    const listaDeSocios = document.getElementById("listaDeSocios")
    listaDeSocios.innerHTML += `<li><input type="number" id="porcentagemSocio" placeholder="Porcentagem do Sócio"><p id="valorSocio"></p></li>`
}

function calcularLucroDeCada(){
    const listaDeSocios = document.getElementById("listaDeSocios")
    const listaDeInputs = Array.from(listaDeSocios.getElementsByTagName("input"))
    const custoTotal = document.getElementById("custoTotal")
    const qtdVendida = document.getElementById("qtdVendida").value
    const precoProduto = document.getElementById("precoProduto").value
    let receita = qtdVendida * precoProduto 
    document.getElementById("receita").innerText = receita 
    const custosTotais = custoTotal.innerText
     listaDeInputs.forEach((input) => {
     input.parentElement.querySelector("p").innerText = `R$ ${(input.value/100)*(receita - custosTotais)}`}
    )
     }; 
     

