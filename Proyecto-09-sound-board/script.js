const btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    stopSongs(); // Detener todas las canciones antes de reproducir la seleccionada

    const audio = btn.parentElement.querySelector("audio");
    audio.play();
  });
});

function stopSongs() {
  btns.forEach(btn => {
    const audio = btn.parentElement.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
  });
}
