email = document.getElementById('email')
password = document.getElementById('password')


function cadastrar(){
    if(email.value == '' || password.value == ''){
        alert('Preencha todos os campos')
    }
        else{
            alert('Cadastro realizado com sucesso!')
             alert(`seu email é: ${email.value} \ne sua senha é: ${password.value}`)
        }
       

}



