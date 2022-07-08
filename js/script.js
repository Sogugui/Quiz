
let form= document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let error=false;
    let erroralert=[];
    let inputQ1= event.target.anillos.value
    let inputQ2=event.target.usb.value
    let inputQ3=event.target.japon.value
    let inputQ4=event.target.pelicula.value
    let inputQ5=event.target.malaga.value
    let inputQ6=event.target.anafrank.value
    if(inputQ1!=":checked"){
    error=true
    console.log("Debes elegir una opción")
    if (inputQ2!=":checked"){
        error=true
        console.log("Completa la segunda pregunta!")
        

    }}
   return false 

})