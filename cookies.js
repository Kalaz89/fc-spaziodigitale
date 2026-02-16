document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("accept-cookies");

  // Se l'utente ha già accettato i cookie, nascondi il banner
  if (localStorage.getItem("cookies-accepted") === "true") {
    if (banner) banner.style.display = "none";
    return;
  }

  // Se il banner esiste, attiva il pulsante
  if (btn) {
    btn.addEventListener("click", () => {
      localStorage.setItem("cookies-accepted", "true");
      banner.style.display = "none";
    });
  }
});
