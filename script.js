document.addEventListener("DOMContentLoaded", function(){
  const chButton = document.querySelector(".css-changeButton");
  const EnterButton = document.querySelector(".css-enterButton");
  const EnButton = document.querySelector(".css-input");
  

  EnButton.addEventListener("keyup", function(e){
    const color = e.target.value;
    if(color){
      EnButton.value = color.toUpperCase();
      if(isValidHex(color)) document.body.style.backgroundColor = `#${color}`;
    }
  });

  chButton.addEventListener("click", showRGB_HEX);
  EnterButton.addEventListener("click", desireBackColor);
  EnButton.addEventListener("keydown", function(event){
    if(event.key=="Enter") {desireBackColor();}
  });
});

function isValidHex(color){
  if (color.length !== 6) return false;
	return /^[0-9A-Fa-f]{6}$/i.test(color);
}


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

  const hr = singleCharHandle(r.toString(16));
  const hg = singleCharHandle(g.toString(16));
  const hb = singleCharHandle(b.toString(16));

  const rgb = (`rgb(${r},${g},${b})`).toUpperCase();
  const hex = (`#${hr}${hg}${hb}`).toUpperCase();
  
  document.body.style.backgroundColor = rgb;

  document.querySelector(".css-rgb-hex-container").innerHTML = `
  <div class="css-rgb-container">
    <div class="css-title">RGB</div>
    <button class="css-rgb">${rgb}</button>
  </div>
  <div class="css-hex-container">
    <div class="css-title">HEX</div>
    <button class="css-hex">${hex}</button>
  </div>
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
