(function () {
  const canvas = document.getElementById("stars"), ctx = canvas.getContext("2d"); let stars = [];
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; stars = Array.from({ length: 90 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 + .2, a: Math.random() })) }
  function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach(s => { s.a += .01; ctx.globalAlpha = .25 + .3 * Math.sin(s.a); ctx.fillStyle = "#ffd9e3"; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill() }); requestAnimationFrame(draw) }
  addEventListener("resize", resize); resize(); draw();
  const petals = document.getElementById("petals");
  window.makePetal = function (x, y) {
    const p = document.createElement("span"); p.textContent = Math.random() > .35 ? "♡" : "✦"; p.className = "spark";
    p.style.left = x + "px"; p.style.top = y + "px"; p.style.setProperty("--x", (Math.random() * 220 - 110) + "px"); p.style.setProperty("--y", (Math.random() * 260 - 130) + "px"); p.style.fontSize = (9 + Math.random() * 12) + "px"; petals.appendChild(p); setTimeout(() => p.remove(), 1300);
  };
  function floating() { let p = document.createElement("span"); p.textContent = Math.random() > .25 ? "♡" : "✦"; p.style.position = "fixed"; p.style.left = Math.random() * 100 + "vw"; p.style.bottom = "-20px"; p.style.color = "#efadc0"; p.style.opacity = ".35"; p.style.fontSize = (8 + Math.random() * 13) + "px"; p.style.zIndex = "2"; p.style.pointerEvents = "none"; p.style.animation = `floatUp ${6 + Math.random() * 6}s linear forwards`; petals.appendChild(p); setTimeout(() => p.remove(), 13000) }
  setInterval(floating, 1000);
  const cursor = document.getElementById("cursor-heart"); addEventListener("pointermove", e => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px" });
  window.confetti = function () { for (let i = 0; i < 45; i++)setTimeout(() => makePetal(innerWidth / 2, innerHeight / 2), i * 18) };
})();