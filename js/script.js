const email = document.getElementById("email");
const password = document.getElementById("password");

function logar(){
    
    if(email.value === "admin@example.com" && password.value === "admin"){
        alert("Logado com sucesso!");
    }else{
        alert("Email ou senha incorretos!");
    }
}