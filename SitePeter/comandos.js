const botao = document.getElementById("btnMusica");
const musica = document.getElementById("musica");

botao.addEventListener("click", () => {

    if (musica.paused) {
        musica.play();
        botao.textContent = "⏸ Pausar Música";
    } else {
        musica.pause();
        botao.textContent = "🎵 Tocar Música";
    }

});