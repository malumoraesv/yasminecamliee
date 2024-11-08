document.addEventListener("DOMContentLoaded", function() {
    const btnSim = document.getElementById("sim");
    const btnNao = document.getElementById("nao");
    const mensagem = document.getElementById("mensagem");

    btnSim.addEventListener("click", function() {
        mensagem.innerHTML = "Óbvio que você quer";
        const img = document.createElement("img");

        // Corrija o caminho da imagem e coloque-o entre aspas
        img.src = "yasminecamile.jpg"; // Caminho da imagem
        img.alt = "Imagem de coração";
        mensagem.appendChild(img);

        // Faz o botão "Não" desaparecer
        btnNao.style.display = "none";
    });

    btnNao.addEventListener("mouseover", function() {
        btnNao.style.position = "absolute";
        btnNao.style.top = `${Math.random() * 80 + 10}%`;
        btnNao.style.left = `${Math.random() * 80 + 10}%`;
    });
});