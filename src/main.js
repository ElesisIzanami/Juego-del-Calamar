import {alternativas1, alternativas2, alternativas3,preguntas} from "./data.js"

const starButton =document.querySelector("#start");
const loginPage =document.querySelector(".portadaContainer");
const resetButton = document.querySelector("#reloadButton");
const loginInput = document.querySelector("#inputNombre");

const nombreJugadorspan = document.querySelector("#nombreJugadorspan");
const nombreJugadorspan2 = document.querySelector("#nombreJugadorspan2");
const nombreJugadorspan3 = document.querySelector("#nombreJugadorspan3");
const nombreJugadorspan4 = document.querySelector("#nombreJugadorspan4");

const resultado =document.querySelector("#resultado")

const buttonContainerA = document.querySelector("#buttonContainerA")
const buttonContainerB = document.querySelector("#buttonContainerB")
const buttonContainerC = document.querySelector("#buttonContainerC")

const pagina1 =document.querySelector(".pagina1");
const pagina2 =document.querySelector(".pagina2");
const pagina3 =document.querySelector(".pagina3");
const pagina4 =document.querySelector(".pagina4");

const nextButton1 = document.querySelector("#nextButton1");
const nextButton2 = document.querySelector("#nextButton2");
const nextButton3 = document.querySelector("#nextButton3");

starButton.addEventListener("click",mostrarPagina1);
nextButton1.addEventListener("click",mostrarPagina2);
nextButton2.addEventListener("click",mostrarPagina3);
nextButton3.addEventListener("click",mostrarPagina4);
resetButton.addEventListener("click",reset);

let puntos =0;

function displayBotones(alternativas,container,clase){

    const esCorrecta = alternativas.find(alternativa => alternativa.correcta);

    alternativas.map((element,index)=>{ 
        const boton=document.createElement("button");
        boton.setAttribute("class",clase)
        boton.setAttribute("id",element.id)
        boton.setAttribute("name",element.text)
        boton.textContent = element.text

        container.append(boton);

        boton.addEventListener("click",(e)=>{
            let indice
            if(e.target.textContent==esCorrecta.text){ 
                indice=index   
                alert("Respuesta correcta😁")
                puntos++
            } else {
                alert("Respuesta Incorrecta🥶")
            }
            let botones = document.querySelectorAll("."+clase)
                botones.forEach((botoncito,i) => {
                    console.log("INDICE:", i)
                    if(i!=indice) botones[i].disabled=true;
            })
        })  
    });
}

function mostrarPagina1(){
    let nombreJugador = loginInput.value;
    if(nombreJugador.length<3){
        alert("Complete su Nombre")
    }else{
        alert("Bienvenid@" +nombreJugador);
        loginPage.style.display = "none";
        pagina1.style.display = "flex";
        displayBotones(alternativas1,buttonContainerA,"botoneraA");
        nombreJugadorspan.innerText =nombreJugador;
        const pregunta1Container = document.getElementById("pregunta1");
        pregunta1Container.innerText =preguntas.pregunta1;
    }
}
function mostrarPagina2(){
    pagina1.style.display = "none";
    pagina2.style.display = "flex";
    displayBotones(alternativas2,buttonContainerB,"botoneraB");
    nombreJugadorspan2.innerText =loginInput.value;
    const pregunta2Container = document.getElementById("pregunta2");
        pregunta2Container.innerText =preguntas.pregunta2;

}
function mostrarPagina3(){
    pagina2.style.display = "none";
    pagina3.style.display = "flex";
    displayBotones(alternativas3,buttonContainerC,"botoneraC");
    nombreJugadorspan3.innerText =loginInput.value;
    const pregunta3Container = document.getElementById("pregunta3");
    pregunta3Container.innerText =preguntas.pregunta3;
}
function mostrarPagina4(){
    pagina3.style.display = "none";
    pagina4.style.display = "flex";
    nombreJugadorspan4.innerText =loginInput.value;
    resultado.innerText = puntos;
}

function reset(){
    location.reload()
}
