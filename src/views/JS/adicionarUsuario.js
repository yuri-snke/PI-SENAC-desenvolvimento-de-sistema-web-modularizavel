async function CriarUsuario(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senhaConf = document.getElementById("senhaConf").value;

    console.log(nome.length)

    if(validaCriacao(nome, email,senha,senhaConf)){
        
        usuario ={
            nome: nome,
            email:email,
            senha:senha
        }

        try {
            await PostAPI('/api/usuario', usuario)
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "./login.html";  
          } catch (error) {
            alert("Erro ao salvar a transação. Por favor, tente novamente.");
          }
        
    }

}

async function validaCriacao(nome, email, senha, senhaConf){
    let validado;
    if(nome.length < 3){
        alert('Insira um nome válido!');
        return false;
        
    }

    if(!await validacaoEmail()){
        alert('Email inválido');
        return false;
    }
    if(senha.length < 3){
        alert('Senha muito curta!');
        return false;
    }

    if(!senha == senhaConf){
        alert('Senhas não correspondem!');
        return false;
    }
    

    return true;


}

async function validaSenha() {
    const senha = document.getElementById("senha").value;
    if(senha.length <=2)
        document.getElementById("respostaSenha").innerHTML="<font color='red'>Senha muito curta.</font>";

    else
        document.getElementById("respostaSenha").innerHTML="";
    
}

function comparaSenhas() {
    const senha = document.getElementById("senha").value;
    const senhaConf = document.getElementById("senhaConf").value;
    console.log(senhaConf)
    console.log(senha)

    if(senha == senhaConf)
        document.getElementById("respostaSenhaConf").innerHTML="";
    
    
    else
        document.getElementById("respostaSenhaConf").innerHTML="<font color='red'>Senhas não são iguais.</font>";
        

    
}





function validacaoEmail(field) {

    const email = document.getElementById("email").value;
    console.log(email)
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@")+ 1, email.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("respostaEmail").innerHTML="";
    return true;
    }
    else{
    document.getElementById("respostaEmail").innerHTML="<font color='red'>email inválido </font>";
    return false;
    }
}

