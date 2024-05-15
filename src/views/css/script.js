// document.getElementById('btn_mobile').addEventListener("click", function abrirMenu() {

//     alert('oi')

//     const men = document.getElementById('menu');

//     men.classList.add('active_menu');



// })
var teste = 1;

function abrir() {


   
    var men = document.getElementById('menu');
    var menuMBL = document.getElementById('i-btn')

    men.classList.toggle('activee');

    if(teste === 1){
     
        menuMBL.classList.add('fa-x');
        menuMBL.classList.remove('fa-bars');
        teste ++;
    }else{
        menuMBL.classList.remove('fa-x');
        menuMBL.classList.add('fa-bars');
        teste --;
    }


    
      
}