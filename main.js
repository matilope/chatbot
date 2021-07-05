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
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")
      .replace(/me siento /g, "")
      .replace(/que/g, "Que es")
      .replace(/porfavor /g, "")
      .replace(/ porfavor/g, "");
  
    if (compare(prompts, replies, text)) { 

      product = compare(prompts, replies, text);
    } else if (text.match(/Gracias/gi)) {
      product = "¡De nada!"
    } else if (text.match(/(corona|covid|virus|pandemia)/gi)) {

      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else if (text.match(/ayuda/gi)) {
      product = "¿Para que necesitas ayuda?"
    }
    else if (text.match(/emergencia/gi)) {
      product = "Si estas en una emergencia, llama al 911"
    }
    else if (text.match(/cansado/gi)) {
      product = "Si ya son pasadas las 22:00hs, vaya a dormir"
    }
    else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 2000
    )
  
  }