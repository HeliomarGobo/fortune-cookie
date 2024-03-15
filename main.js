let luckMessages = [
  "It takes courage to grow up and become who you really are.",
  "Nothing is impossible. The word itself says 'I'm possible!",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Attitude is a little thing that makes a big difference.",
  "All our dreams can come true, if we have the courage to pursue them.",
  "Champions keep playing until they get it right.",
  "I am lucky that whatever fear I have inside me, my desire to win is always stronger.",
  "You are never too old to set another goal or to dream a new dream.",
  "It is during our darkest moments that we must focus to see the light.",
  "Believe you can and you're halfway there.",
  "Life shrinks or expands in proportion to one’s courage.",
  "Try to be a rainbow in someone's cloud.",
  "Real change, enduring change, happens one step at a time.",
  "Give light and people will find the way.",
];

let randomMessage =
  luckMessages[Math.round(Math.random() * luckMessages.length)];
const cookie = document.querySelector("#img");
const firstScreen = document.querySelector(".home");
const secondScreen = document.querySelector(".luck");
const newCookie = document.querySelector("#openCookie");
const cookieOpen = document.querySelector(".message p");

const toggleScreen = () => {
  firstScreen.classList.toggle("hide");
  secondScreen.classList.toggle("hide");
};

const handleOpenCookie = () => {
  toggleScreen();
  cookieOpen.innerText = `${randomMessage}`;
};

const handleOpenNewCookie = () => {
  toggleScreen();
  location.reload();
  randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
};

const pressEnter = (e) => {
  if (e.key == "Enter" && firstScreen.classList.contains("hide")) {
    handleOpenNewCookie();
  }
};

cookie.addEventListener("click", handleOpenCookie);
newCookie.addEventListener("click", handleOpenNewCookie);
document.addEventListener("keydown", pressEnter);
