let menu = document.getElementById("menuh")
let ex = document.getElementById("x")
let barras = document.getElementById("barras")
let form = document.getElementById("formi")

function abreFechaMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        barras.style.display = "none"
        ex.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")
        barras.style.display = "inline"
        ex.style.display = "none"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
    barras.style.display = "none"
    ex.style.display = "inline"
}

function solicitarOrcamento() {
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-problema").value
    // console.log(valorNome, valorEmail, valorDescricao)

    let dadosForm = {
        email: valorEmail,
        descricao: valorDescricao
    }

    console.log(dadosForm)

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

        .then(resposta => {
            console.log(resposta);

            

            alert("Solicitação enviada com sucesso! 👽👌")
        })
        .catch(erro => {
            console.log(erro);
            alert("Erro na requisição 😭😭😭")
        })

    event.preventDefault()
}

function showForm() {
    console.log(form.style.display)

    if (form.style.display === "none") {

        form.style.display = "block"

    } else {

        form.style.display = "none"
    }
}