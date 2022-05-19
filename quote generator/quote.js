const displayquote = document.querySelector(".quote");
const btn = document.querySelector(".quote_btn");
const author = document.querySelector(".author")
const speechbtn = document.querySelector(".speech")
const copyBtn = document.querySelector(".copy")
let cpymsg = document.querySelector(".cpymsg")
synth = speechSynthesis;

function randomquote() {
    btn.innerText = "Generating Quote"
    fetch("http://api.quotable.io/random").then((response) => response.json()).then(result => {
        displayquote.innerText = result.content
        author.innerText = result.author
        btn.innerText = "New Quote..."

    });
}

function speakquote() {
    let voice = new SpeechSynthesisUtterance(`${displayquote.innerText} by ${author.innerText}`)
    synth.speak(voice)
}


copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(displayquote.innerText);
    alert("Quote copied")



});


btn.addEventListener("click", randomquote)
speechbtn.addEventListener("click", speakquote)