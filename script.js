const botao_oxigenio = document.getElementById("botao_oxigenio");

botao_oxigenio.addEventListener("click", function() {

    const div_oxigenio = document.getElementById("oxigenio");

    if (div_oxigenio.style.display === "none") {

        div_oxigenio.style.display = "block";

    } else {

        div_oxigenio.style.display = "none";

        div_oxigenio.scrollIntoView({behavior: "smooth", block: center});

    }
});
