function load() {
    cadUsers = JSON.parse(localStorage.getItem("Usuário"));
    if (cadUsers)
        document.getElementById("mostraResult").innerHTML = `Usuário = ${cadUsers.nome} e Senha = ${cadUsers.senha}`;
    else
        document.getElementById("mostraResult").innerHTML = "Não há nenhum usuário cadastrado!";
}