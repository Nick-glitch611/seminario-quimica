// Função genérica para evitar repetição de código
function alternarVisibilidade(idBotao, idDiv) {
    const botao = document.getElementById(idBotao);
    const div = document.getElementById(idDiv);

    // Garante que todas comecem escondidas se o JS não detectar o estilo inicial
    if (div.style.display === "") {
        div.style.display = "none";
    }

    botao.addEventListener("click", function() {
        if (div.style.display === "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
            // O scroll só acontece quando a div APARECE na tela
            div.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// Aplica a função para cada um dos elementos
alternarVisibilidade("botao_oxigenio", "oxigenio");
alternarVisibilidade("botao_enxofre", "enxofre");
alternarVisibilidade("botao_selenio", "selenio");
alternarVisibilidade("botao_telurio", "telurio");
alternarVisibilidade("botao_polonio", "polonio");
