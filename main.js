document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });
  
  function output(input) {
    let robotRespuesta;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/me siento /g, "")
      .replace(/porfavor /g, "")
      .replace(/ porfavor/g, "");
  
    if (compare(preguntas, respuestas, text)) { 
      robotRespuesta = compare(preguntas, respuestas, text);
    } else if (text.match(/Gracias/gi)) {
      robotRespuesta = "¡De nada!"
    } else if (text.match(/(corona|covid|virus|pandemia)/gi)) {
      robotRespuesta = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else if (text.match(/ayuda/gi)) {
      robotRespuesta = "¿Para que necesitas ayuda?"
    }
    else if (text.match(/emergencia/gi)) {
      robotRespuesta = "Si estas en una emergencia, llama al 911"
    }
    else if (text.match(/cansado/gi)) {
      robotRespuesta = "Si ya son pasadas las 23:00, vaya a dormir"
    }
    else {
      robotRespuesta = alternativas[Math.floor(Math.random() * alternativas.length)];
    }

    addChat(input, robotRespuesta);
  }
  
  function compare(preguntasArray, respuestasArray, string) {
    let respuesta;
    let respuestaEncontrada = false;
    for (let x = 0; x < preguntasArray.length; x++) {
      for (let j = 0; j < preguntasArray[x].length; j++) {
        if (preguntasArray[x][j] === string) {
          let respuestas = respuestasArray[x];
          respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
          respuestaEncontrada = true;
          break;
        }
      }
      if (respuestaEncontrada) {
        break;
      }
    }
    return respuesta;
  }
  
  function addChat(input, robotRespuesta) {
    const mensajeContainer = document.getElementById("mensaje");
  
    let usuarioDiv = document.createElement("div");
    usuarioDiv.id = "usuario";
    usuarioDiv.className = "usuario respuesta";
    usuarioDiv.innerHTML = `<img src="usuario.png" class="avatar"><span>${input}</span>`;
    mensajeContainer.appendChild(usuarioDiv);
  
    let botDiv = document.createElement("div");
    let botImagen = document.createElement("img");
    let botTexto = document.createElement("span");
    botDiv.id = "bot";
    botImagen.src = "bot-mini.png";
    botImagen.className = "avatar";
    botDiv.className = "bot respuesta";
    botTexto.innerText = "Escribiendo...";
    botDiv.appendChild(botTexto);
    botDiv.appendChild(botImagen);
    mensajeContainer.appendChild(botDiv);

    mensajeContainer.scrollTop = mensajeContainer.scrollHeight - mensajeContainer.clientHeight;
  
    setTimeout(() => {
      botTexto.innerText = `${robotRespuesta}`;
      textToSpeech(robotRespuesta)
    }, 2000
    )
  
  }