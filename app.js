// document.getElementById("cv").addEventListener("click",function(){
//     document.ge
// })
function visitPage() {
  window.location =
    "https://drive.google.com/file/d/1BuYKwKmTJrAZ6VqLRF7Ss5bRXU5IXwGl/view?usp=sharing";
}
function fb() {
  window.location = "https://www.facebook.com/diamond.saroha/";
}
function instagram() {
  window.location = "https://www.instagram.com/diamond_saroha/";
}
function github() {
  window.location = "https://github.com/Shrestdtu";
}
function linkedin() {
  window.location = "https://www.linkedin.com/in/shrest-saroha-9102b01a2/";
}
function twitter() {
  window.location = "https://twitter.com/SarohaShrest";
}

var typed = new Typed(".autochange", {
  strings: ["Shrest", "a Programmer", "a Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Wrap every letter in a div
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<div class='letter'>$&</div>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
