
let form= document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let error=false;
    let erroralert=[];
    let inputQ1= event.target.anillos
    console.log(inputQ1);
    let inputQ2=event.target.usb.value
    let inputQ3=event.target.japon.value
    let inputQ4=event.target.pelicula.value
    let inputQ5=event.target.malaga.value
    let inputQ6=event.target.anafrank.value

    if(inputQ1.value==7){
        let alerttext1= document.getElementById("alerttext1")
        alerttext1.style.color="green"
        alerttext1.innerHTML+="Respuesta correcta!!!"

        }else if (inputQ1.value==""){  
            alerttext1.style.color="red"
        alerttext1.innerHTML+="Debe elegir una opción"
        error=true

        }else{errortext1.style.color="red"
        alerttext1.innerHTML+="Respuesta incorrecta "}

        return false
        }
        
)




//     error=true
//     let errortext1=document.getElementById("errortext1")
//     errortext1.style.color="red"
//     errortext1.innerHTML+="Elige una opción"
// }


