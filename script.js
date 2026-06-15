const botao_oxigenio = document.getElementById("botao_oxigenio");

botao_oxigenio.addEventListener('click', function() {
    
    const div_oxigenio = document.getElementById('oxigenio');
    
    if (div_oxigenio.style.display === 'block') {
        
        div_oxigenio.style.display = 'none';
        
    } else {
        
        div_oxigenio.style.display = 'block';
        
        div_oxigenio.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
        
});

const botao_enxofre = document.getElementById("botao_enxofre");

botao_enxofre.addEventListener("click", function(){

    const div_enxofre = document.getElementById("enxofre");
    
    if (div_enxofre.style.display === "none") { 
        
        div_enxofre.style.display = "block";
        
    } else {
        
        div_enxofre.style.display = "none";

        div_enxofre.scrollIntoView({ behavior: 'smooth', block: 'center'

            }
});

const botao_selenio = document.getElementById("botao_selenio");

botao_selenio.addEventListener("click", function(){

    const div_selenio = document.getElementById("selenio");
    
    if (div_selenio.style.display === "none") { 
        
        div_selenio.style.display = "block";
        
    } else {
        
        div_selenio.style.display = "none";

        div_selenio.scrollIntoView({ behavior: 'smooth', block: 'center'

            }
});

const botao_telurio = document.getElementById("botao_telurio");

botao_telurio.addEventListener("click", function(){

    const div_telurio = document.getElementById("telurio");
    
    if (div_telurio.style.display === "none") { 
        
        div_telurio.style.display = "block";
        
    } else {
        
        div_telurio.style.display = "none";

        div_telurio.scrollIntoView({ behavior: 'smooth', block: 'center'

            }
                            
});

const botao_polonio = document.getElementById("botao_polonio");

botao_polonio.addEventListener("click", function(){

    const div_polonio = document.getElementById("polonio");
    
    if (div_polonio.style.display === "none") { 
        
        div_polonio.style.display = "block";
        
    } else {
        
        div_polonio.style.display = "none";

        div_polonio.scrollIntoView({ behavior: 'smooth', block: 'center'

            }
});
