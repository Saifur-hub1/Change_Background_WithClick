document.addEventListener("DOMContentLoaded", function(){
  const chButton = document.querySelector(".css-changeButton");
  const EnterButton = document.querySelector(".css-enterButton");
  const EnButton = document.querySelector(".css-input");
  

  

  chButton.addEventListener("click", showRGB_HEX);
  EnterButton.addEventListener("click", desireBackColor);
  EnButton.addEventListener("keydown", function(event){
    if(event.key=="Enter") {desireBackColor();}
  });
});



function desireBackColor(){
  const inputFeed = document.querySelector(".css-input").value;
  document.body.style.backgroundColor = inputFeed;
}

// rgb(0,0,0)
// rgb(255,255,255)
// rgb(1,2,10)-> #01020A
// 10->A; 11->B; 12->C; 13->D; 14->E; 15->F 
// #******
function showRGB_HEX(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  const hr = singleCharHandle(r.toString(16).toUpperCase());
  const hg = singleCharHandle(g.toString(16).toUpperCase());
  const hb = singleCharHandle(b.toString(16).toUpperCase());

  const rgb = `rgb(${r},${g},${b})`;
  const hex = `#${hr}${hg}${hb}`;
  
  document.body.style.backgroundColor = rgb;

  document.querySelector(".css-rgb-hex-container").innerHTML = `
  <button class="css-rgb">${rgb}</button>
  <button class="css-hex">${hex}</button>
  `;

  const rgbCopyButton = document.querySelector(".css-rgb");
  const HEXCopyButton = document.querySelector(".css-hex");

  HEXCopyButton.addEventListener("click", function(){ 

    navigator.clipboard.writeText(hex).then(showCopyMessage(hex));

  });
  rgbCopyButton.addEventListener("click", function(){

    navigator.clipboard.writeText(rgb).then(showCopyMessage(rgb));

  });
}

function showCopyMessage(text){
  const messageElement = document.createElement("div");
  messageElement.innerText = `Copied to Clipboard`;
  messageElement.classList.add("css-copy-clipboard");

  document.body.appendChild(messageElement);
  setTimeout(function (){document.body.removeChild(messageElement);},500);
}

function singleCharHandle(hex){
  return hex.length===1? hex = `0${hex}`: hex;
}
