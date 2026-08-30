function showToast(text) { const t = document.getElementById("toast"); t.textContent = text; t.classList.add("show"); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => t.classList.remove("show"), 2200) }
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => setTimeout(() => document.getElementById("preloader").classList.add("hide"), 850));
const gift = document.getElementById("giftBox");
gift.addEventListener("click", () => {
    gift.classList.add("open");
    confetti();

    document.getElementById("popSound").play().catch(e => console.log("Efek suara gagal:", e));
    document.getElementById("bgMusic").play().catch(e => console.log("Lagu gagal:", e));

    setTimeout(() => {
        showView("letter-home");
        setTimeout(() => {
            gift.classList.remove("open");
        }, 500);
    }, 2000);
});
document.getElementById("finalBtn").addEventListener("click", () => { confetti(); showView("final") });
document.getElementById("soundToggle").addEventListener("click", () => document.body.classList.toggle("soft-bright"));
document.addEventListener("keydown", e => { if (e.key === "Escape") showView("home") });
const letterCopy = document.getElementById("letterCopy");
const originalText = Array.from(letterCopy.querySelectorAll("p")).map(p => p.textContent);
let isTypingStarted = false;

letterCopy.innerHTML = "";

function playTypewriter() {
    if (isTypingStarted) return;
    isTypingStarted = true;

    let pIndex = 0;
    let charIndex = 0;
    let currentP = null;

    function type() {
        if (pIndex < originalText.length) {
            if (charIndex === 0) {
                currentP = document.createElement("p");
                letterCopy.appendChild(currentP);
            }

            if (charIndex < originalText[pIndex].length) {
                currentP.textContent += originalText[pIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 5);
            } else {
                pIndex++;
                charIndex = 0;
                setTimeout(type, 200);
            }
        } else {
            letterCopy.classList.add("done");
        }
    }
    type();
}

const btnReadLetter = document.querySelector('[data-go="letter"]');
if (btnReadLetter) {
    btnReadLetter.addEventListener("click", () => {
        setTimeout(playTypewriter, 800);
    });
}