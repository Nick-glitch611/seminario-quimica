const botao_oxigenio = document.getDocumentById("botao_oxigenio");
const botao_enxofre = document.getDocumentById("botao_enxofre");
const botao_selenio = document.getDocumentById("botao_selenio");
const botao_telurio = document.getDocumentById("botao_telurio");
const botao_polonio = document.getDocumentById("botao_polonio");

botao_oxigenio.addEventListener("click", function(aparecer){

    document.getElementById("oxigenio").style.display = "block";
});

botao_enxofre.addEventListener("click", function(aparecer){

    document.getElementById("enxofre").style.display = "block";
});

botao_selenio.addEventListener("click", function(aparecer){

    document.getElementById("selenio").style.display = "block";
});

botao_telurio.addEventListener("click", function(aparecer){

    document.getElementById("telurio").style.display = "block";
});

botao_polonio.addEventListener("click", function(aparecer){

    document.getElementById("polonio").style.display = "block";
});
