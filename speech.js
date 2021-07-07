// Voz

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "es-AR";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 0;
  synth.speak(voice);
}