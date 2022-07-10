let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let error = false;
  let inputQ1 = event.target.anillos;
  let inputQ2 = event.target.usb;
  let inputQ3 = event.target.japon;
  let inputQ4 = event.target.pelicula;
  let inputQ5 = event.target.malaga;
  let inputQ6 = event.target.anafrank;
  //***********************Validando pregunta 1 (Arte y Literatura)**************************//
  if (inputQ1.value == 7) {
    let alerttext1 = document.getElementById("alerttext1");
    alerttext1.style.color = "green";
    alerttext1.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ1.value == "") {
    alerttext1.style.color = "red";
    alerttext1.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext1.style.color = "red";
    alerttext1.innerHTML += "Respuesta incorrecta";
    error = false;
  }

  //***********************Validando pregunta 2 (Ciencia y Tecnología)**************************//
  if (inputQ2.value == "bus") {
    let alerttext2 = document.getElementById("alerttext2");
    alerttext2.style.color = "green";
    alerttext2.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ2.value == "") {
    alerttext2.style.color = "red";
    alerttext2.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext2.style.color = "red";
    alerttext2.innerHTML += "Respuesta incorrecta";
    error = false;
  }

  //***********************Validando pregunta 3 (Deportes)**************************//
  if (inputQ3.value == "sumo") {
    let alerttext3 = document.getElementById("alerttext3");
    alerttext3.style.color = "green";
    alerttext3.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ3.value == "") {
    alerttext3.style.color = "red";
    alerttext3.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext3.style.color = "red";
    alerttext3.innerHTML += "Respuesta incorrecta";
    error = false;
  }

  //***********************Validando pregunta 4 (Entretenimiento)**************************//
  if (inputQ3.value == "avengers") {
    let alerttext4 = document.getElementById("alerttext4");
    alerttext4.style.color = "green";
    alerttext4.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ4.value == "") {
    alerttext4.style.color = "red";
    alerttext4.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext4.style.color = "red";
    alerttext4.innerHTML += "Respuesta incorrecta";
    error = false;
  }

  //***********************Validando pregunta 5 (Geografía)**************************//
  if (inputQ5.value == "boquerones") {
    let alerttext5 = document.getElementById("alerttext5");
    alerttext5.style.color = "green";
    alerttext5.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ5.value == "") {
    alerttext5.style.color = "red";
    alerttext5.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext5.style.color = "red";
    alerttext5.innerHTML += "Respuesta incorrecta";
    error = false;
  }

  //***********************Validando pregunta 6 (Historia)**************************//
  if (inputQ6.value == "amsterda") {
    let alerttext6 = document.getElementById("alerttext6");
    alerttext6.style.color = "green";
    alerttext6.innerHTML += "Respuesta correcta!!";
    error = false;
  } else if (inputQ6.value == "") {
    alerttext6.style.color = "red";
    alerttext6.innerHTML += "Debe elegir una opción";
    error = true;
  } else {
    alerttext6.style.color = "red";
    alerttext6.innerHTML += "Respuesta incorrecta";
    error = false;
  }
  //******************Envío final del formulario********************** */
  if (error == false) {
    let alerttext7 = document.getElementById("alerttext7");
    alerttext7.style.color = "green";
    alerttext7.innerHTML += "Quiz completado con éxito!";
    let sendForm = setInterval(function () {
      event.target.submit(); // Reanudarà el envío una vez cumplido el tiempo
    }, 4500);
    console.log("Enviando formulario");
  }
  return false;
});
