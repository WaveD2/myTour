const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const video = document.querySelector(".video");
const feature = document.querySelector(".feature");
const about = document.querySelector(".about");
const gallery = document.querySelector(".gallery");

const email = document.querySelector(".email");
const form = document.querySelector(".form");
const number = document.querySelector(".number");
const message = document.querySelector(".messager");

menu.addEventListener("click", () => {
  navbar.classList.toggle("block");
  video.classList.toggle("videonew");
  feature.classList.toggle("videonew");
  about.classList.toggle("videonew");
  gallery.classList.toggle("videonew");
});

function sendMsg(e) {
  e.preventDefault();

  Email.send({
    SecureToken: " 0d0dd878-ad68-4a79-b603-eb9144b09431",
    To: "huetran20041981@gmail.com",
    From: email.value,
    Subject: "Contact WaveD",
    Body: message.value,
  }).then((message) => alert(message));
}

form.addEventListener("submit", sendMsg);
