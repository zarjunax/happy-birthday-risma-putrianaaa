(function () {
  const ids = ["days", "hours", "minutes", "seconds"];
  function tick() {
    let target = new Date(BIRTHDAY_CONFIG.birthday), now = new Date();

    let diff = Math.max(0, target - now);

    const vals = [Math.floor(diff / 86400000), Math.floor(diff % 86400000 / 3600000), Math.floor(diff % 3600000 / 60000), Math.floor(diff % 60000 / 1000)];
    ids.forEach((id, i) => document.getElementById(id).textContent = String(vals[i]).padStart(2, "0"));
  }
  tick(); setInterval(tick, 1000);
})();