let gmail = document.querySelector(".Gmail");
let linkdein = document.querySelector(".Linkdein");
let github = document.querySelector(".Github");
let hire = document.querySelector(".hireme");
let viewcode1 = document.querySelector(".viewcode1");
let viewcode2 = document.querySelector(".viewcode2");
let livedemo1 = document.querySelector(".livedemo1");
let livedemo2 = document.querySelector(".livedemo2");
let cv = document.querySelector(".cv");

gmail.addEventListener("click", () => {
    window.location.href = "mailto:vermanaman2106@gmail.com?subject=Let’s Connect&body=Hi Naman, I saw your portfolio and...";
})

linkdein.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/naman-verma-587365353/?trk=PROFILE_DROP_DOWN", "_blank");
})

github.addEventListener("click", () => {
    window.open("https://github.com/vermanaman-2106", "_blank");
})

hire.addEventListener("click", () => {
    window.open("index2.html", "_blank");
})

viewcode1.addEventListener("click", () => {
    window.open("https://github.com/vermanaman-2106/TIC-TAE-TOE", "_blank")
})

viewcode2.addEventListener("click", () => {
    window.open("https://github.com/vermanaman-2106/Currency-Converter/tree/main", "_blank")
})

livedemo1.addEventListener("click", () => {
    window.open("https://vermanaman-2106.github.io/TIC-TAE-TOE/", "_blank");
    console.log("clicked");
})

livedemo2.addEventListener("click", () => {
    window.open(" https://vermanaman-2106.github.io/Currency-Converter/", "_blank")
})