(function () {
    const audio = document.getElementById("bgMusic"), btn = document.getElementById("musicToggle"); let on = false;
    window.playClick = function () { };
    btn.addEventListener("click", async () => { try { if (!on) { await audio.play(); on = true; btn.textContent = "Ⅱ"; showToast("♪ musik dinyalakan") } else { audio.pause(); on = false; btn.textContent = "♪"; showToast("♪ musik dijeda") } } catch (e) { showToast("Tambahkan assets/audio/background.mp3 terlebih dahulu ♡") } });
    document.getElementById("soundToggle").addEventListener("click", () => showToast("✦ efek suara siap"));
})();