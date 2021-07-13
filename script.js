function cadastraEmail() {
    var emailCadastro = document.getElementById("input-email");

    var dados = JSON.parse(localStorage.getItem("dadosEmail"));

    if(dados == null) {
        localStorage.setItem("dadosEmail", "[]");
        dados = [];
    }

    var registro = {
        email: emailCadastro.value
    }

    dados.push(registro);

    localStorage.setItem("dadosEmail", JSON.stringify(dados));
    alert("Email cadastrado com sucesso!")
}
  