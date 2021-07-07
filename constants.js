// Opciones que el usuario puede llegar a escribir

const prompts = [
    ["Hola", "Hey", "Buenos dias", "Buenas tardes"],
    ["¿Como estas?", "¿En que andas?", "¿Como anda todo?"],
    ["¿Que andas haciendo?", "¿Que pasa?", "¿Algo que tengas para contarme?"],
    ["¿Que edad tienes?"],
    ["¿Quien sos?", "¿Sos un humano?", "¿Sos un bot?", "¿Sos un robot o un humano?"],
    ["¿Quien te creo?", "¿Quien te programo?"],
    [
      "Tu nombre por favor",
      "¿Tu nombre?",
      "Puedo saber tu nombre, por favor",
      "¿Como deberia llamarte?"
    ],
    ["Te amo"],
    ["Feliz", "Bien", "Divertido", "Increible", "Fantastico", "Copado"],
    ["Mal", "Aburrido", "Cansado"],
    ["Ayudame", "Contame una historia", "Dime un chiste"],
    ["Ah", "Si", "Ok", "Okay", "Bien"],
    ["Chau", "Hasta luego", "Nos vemos", "Nos vemos luego"],
    ["¿Que deberia comer hoy?"],
    ["¿Que onda?"],
    ["¿Que?", "¿Porque?", "¿Como?", "¿Donde?", "¿Cuando?"],
    ["No","No estoy seguro","Quizas","No, gracias"],
    [""],
    ["Jajaja","Ja","JAJA","Jeje","Gracioso","Que risa"]
  ]
  
  // posibles respuestas en orden
  
  const replies = [
    ["¡Hola!", "¡Hey!", "Buenas tardes","Buenos dias"],
    [
      "Bien... ¿Vos como estas?",
      "Bastante bien, ¿Vos?",
      "Fantastico, ¿Vos?"
    ],
    [
      "No mucho",
      "Por irme a dormir",
      "¿Puedes adivinar?",
      "En verdad no"
    ],
    ["Soy infinito"],
    ["Soy solo un bot", "Soy un bot, ¿Vos que sos?"],
    ["El unico dios, JavaScript"],
    ["No tengo nombre", "Lamentablemente no tengo nombre, ojala tuviera uno"],
    ["Yo tambien", "Te amo a vos tambien"],
    ["¿Te sentiste mal alguna vez?", "Me alegro de escucharlo"],
    ["¿Porque?", "¿Porque? No deberias", "Intenta ver la television"],
    ["¿Que pasa?", "Erase una vez.."],
    ["Contame una historia", "Contame un chiste", "Cuentame sobre ti"],
    ["Adios", "Chau", "Nos vemos luego"],
    ["Sushi", "Pizza"],
    ["Bro"],
    ["¡Buena pregunta!"],
    ["Esta bien","Te entiendo","¿De que quieres hablar?"],
    ["Porfavor di algo :(", "Porfavor cuentame algo :("],
    ["Jaja!","¡Buena!"]
  ]
  
  // alternativas random
  
  const alternative = [
    "Igual",
    "Continua...",
    "Bro...",
    "Intenta nuevamente",
    "Te estoy escuchando...",
    "No entiendo :/"
  ]
  
  // coronavirus
  
  const coronavirus = ["Porfavor quedate en casa", "Usá barbijo", "Afortunadamente, no tengo COVID", "Son tiempos dificiles", "Soy un robot no puedo tener COVID", "Los robots no se pueden contagiar COVID"]