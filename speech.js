// Voz

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "es";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 0;
  synth.speak(voice);
}