const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const counterText = document.getElementById("counterText");
const darkToggle = document.getElementById("darkToggle");
const chatBubble = document.getElementById("chatBubble");

let noCount = 0;

// NO button movement
function moveNoButton(){
    noCount++;
    counterText.innerText = `NO button tried: ${noCount} times 😄`;

    const x = Math.random()*200 - 100;
    const y = Math.random()*120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    let size = parseFloat(getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (size + 1) + "px";

    chatBubble.innerText = "🤖 Hmm… lagta hai padhai se bhaag rahe ho 😏";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES button logic
yesBtn.addEventListener("click", ()=>{
    if(noCount < 10){
        popupText.innerHTML = `
        HAA! Very good 😄👏<br><br>
        Khauf toh hai mera tumlog par 😎<br>
        Chalo padhte hain 📖🔥`;
        chatBubble.innerText = "🤖 Good choice! Consistency is power 💪";
    }else{
        popupText.innerHTML = `
        HAA! Padho ✍️ Likho 📚<br><br>
        IAS–YAS bano 🇮🇳<br>
        Desh ko sambhalo 💪🔥`;
        chatBubble.innerText = "🤖 Proud of you! Nation builders in making 🇮🇳";
    }
    popup.style.display = "flex";
});

// Close popup
popup.addEventListener("click", ()=>{
    popup.style.display = "none";
});

// Dark mode toggle
darkToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    darkToggle.innerText =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
