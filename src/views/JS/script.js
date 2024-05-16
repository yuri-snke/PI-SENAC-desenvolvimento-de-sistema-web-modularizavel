var count = 1;

function abrir() {
  var men = document.getElementById("menu");
  var menuMBL = document.getElementById("i-btn");

  men.classList.toggle("activee");

  if (count === 1) {
    menuMBL.classList.add("fa-x");
    menuMBL.classList.remove("fa-bars");
    count++;
  } else {
    menuMBL.classList.remove("fa-x");
    menuMBL.classList.add("fa-bars");
    count--;
  }



}

function mostrarModal(){
 

  confirm('Deseja Excluir?')
}

function Sair(){

  var mdl = document.getElementById("modalConf");

  mdl.style.display = "none";
}
