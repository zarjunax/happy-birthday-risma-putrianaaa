(function () {
  const grid = document.getElementById("memoryGrid");

  function placeholder(m) { return `<div class="memory-image"><img src="${m.image}" style="width: 100%; height: 100%; object-fit: cover;"></div>` }

  window.MEMORIES.forEach((m, i) => {
    const el = document.createElement("article"); el.className = "memory-item"; el.style.setProperty("--rot", `${i % 2 ? 2.5 : -2.5}deg`);
    el.innerHTML = `${placeholder(m)}<div class="memory-caption">${m.title}</div>`;
    el.addEventListener("click", () => openMemory(m)); grid.appendChild(el);
  });

  window.openMemory = function (m) {
    const old = document.querySelector(".memory-modal"); if (old) old.remove();
    const wrap = document.createElement("div"); wrap.className = "modal-backdrop open memory-modal";

    wrap.innerHTML = `<div class="modal-inner"><button class="modal-close">×</button><div class="overline">✦ MEMORY ✦</div><h2 style="font:600 58px var(--display);margin:15px 0">${m.title}</h2><p style="color:#d9bec8;font:18px/1.7 var(--display)">${m.caption}</p><img src="${m.image}" style="width: 100%; border-radius: 8px; margin-top: 15px;"></div>`;

    document.body.appendChild(wrap); wrap.querySelector(".modal-close").onclick = () => wrap.remove(); wrap.onclick = e => { if (e.target === wrap) wrap.remove() };
  };
})();