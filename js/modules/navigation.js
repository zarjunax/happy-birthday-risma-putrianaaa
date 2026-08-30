window.showView = function (name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + name);
  if (target) { target.classList.add("active"); window.playClick?.(); window.location.hash = name; }
};
document.addEventListener("click", e => {
  const btn = e.target.closest("[data-go]");
  if (btn) showView(btn.dataset.go);
});
window.addEventListener("load", () => {
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById("view-" + hash)) showView(hash);
});