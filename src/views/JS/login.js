async function FazerLogin() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  const resposta = await PostAPI("/api/login", { email: login, senha: senha });

  localStorage.setItem("token", "Bearer " + resposta);

  window.location.href = "./index.html";
}

async function RedirectCriarUsuario(){
  window.location.href = "./criarUsuario.html";
}
