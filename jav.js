const opciones=document.getElementById("option");
const titulo=document.getElementById("titulo");

function desaparecer(){
    menu.classList.toggle('hide');
}

titulo.addEventListener("click", desaparecer);

const divmenu=document.getElementById("div-menu");
const menu=document.getElementById("menu");

divmenu.addEventListener("click", ()=>{
    menu.classList.toggle('main-menu-show');
})