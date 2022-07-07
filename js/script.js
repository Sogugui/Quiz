// let fname= document.getElementById('fname');
// let lname= document.getElementById('lname');
// let email= document.getElementById('email');
// let error= document.getElementById('error');
// error.style.color="red";

// function sendform(){
//     console.log("Enviando formulario")
//     let erroralert= [];
//     if(fname.value=== null || fname.value === ''|| fname.value.length<3 || fname.value.length>30){
//         erroralert.push("Tu nombre debe ser > 3 y < 30 caracteres")
//     }
//     if(lname.value=== null || lname.value === ''|| lname.value.length<3 ||lname.value.length>30){
//         erroralert.push("Tu apellido debe ser > 3 y < 30 caracteres") }

//     if( email.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/|| email.value=== null || email.value===''){
//             erroralert.push("Introduce un email correcto")
//         }

//         error.innerHTML= erroralert.join()

//         return false;
//         }

let errortext=document.getElementById("errortext")
errortext.style.color="red"
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
    erroralert.push("Debes elegir una opción!")
   }
   if(inputQ2!=":checked"){
    error=true
    erroralert.push("Debes elegir una opción!")
   }
   if(inputQ3!=":checked"){
    error=true
    erroralert.push("Debes elegir una opción!")
   }
   if(inputQ4!=":checked"){
    error=true
    erroralert.push("Debes elegir una opción!")
   }
   if(inputQ5!=":checked"){
    error=true
    erroralert.push("Debes elegir una opción!")
   }
   if(inputQ6!=":checked"){
    error=true
    erroralert.push("Debes elegir una opción!")
   }
   errortext.innerHTML+=erroralert.join()
   return false 

})