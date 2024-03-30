document.addEventListener("DOMContentLoaded", function() {
    var homalyosHatter5 = document.getElementById("homalyosHatter5");
    var closeBtn3 = document.getElementById("closeBtn3");

    closeBtn3.addEventListener("click", function() {
        homalyosHatter5.style.display = 'none';
        megjelenitoGombb5.style.display = "block"; 
    });
});

function toggleBoxFormTwo() {
    var container6 = document.getElementById('megjelenitoGombb5');
    if (container6.style.display === 'none') {
        container6.style.display = 'block';
    } else {
        container6.style.display = 'none';
    }
  }
  document.getElementById("megjelenitoGombb5").addEventListener("click", function() {
    var homalyosHatter5 = document.getElementById("homalyosHatter5");
    homalyosHatter5.style.display = "flex";
    
    document.querySelector(".container6").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGombb5.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
    
    
});

function toggleinformationBoxForm2() {
    var container7 = document.getElementById('megjelenitoGombb4');
    if (container7.style.display === 'none') {
        container7.style.display = 'block';
    } else {
        container7.style.display = 'none';
    }
  }
  document.getElementById("megjelenitoGombb4").addEventListener("click", function() {
    
    homalyosHatter6.addEventListener("click", function() {
        container7.style.display = "none";
        megjelenitoGombb5.style.display = "block";
    });
    document.querySelector(".container7").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGombb4.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
    
    
});