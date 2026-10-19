const shareButton = document.querySelector("#shareButton");
const shareStatus = document.querySelector("#shareStatus");

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Conoce CodePOS MX: tecnología para impulsar tu negocio.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = "Enlace compartido.";
    } catch (error) {
      if (error.name !== "AbortError") shareStatus.textContent = "No se pudo compartir el enlace.";
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(shareData.url);
    shareStatus.textContent = "Enlace copiado al portapapeles.";
  } catch {
    shareStatus.textContent = "Copia la dirección de esta página desde tu navegador.";
  }
});
