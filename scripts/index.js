function validar() {
    user = document.getElementById("txtUser");
    pass = document.getElementById("txtPass");
    usuarios = [];    
    if (user.value == "") {
        alert("O campo usuário não foi informado!");
        user.focus();
    }
    else if (pass.value == "") {
        alert("O campo senha não foi informado!");
        pass.focus();
    }
    else {
        usuarios.push({ nome: user.value, senha: pass.value });
        if(typeof(Storage)!="undefined")
            localStorage.setItem("Usuário", JSON.stringify(usuarios[0]));
        else
            alert("O navegador não possui suporte para o local storage!");
    }    
}