import generateJoke from "./generateJoke";
import "./styles/main.css";
import laughing from "./assets/77e02eaf-709d-4b1d-aee4-6ad2225bfabd.jpg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

console.log(generateJoke());
