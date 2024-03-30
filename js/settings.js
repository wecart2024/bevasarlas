document.addEventListener("DOMContentLoaded", function() {
    var homalyosHatter3 = document.getElementById("homalyosHatter3");
    var closeBtn2 = document.getElementById("closeBtn2");

    closeBtn2.addEventListener("click", function() {
        homalyosHatter3.style.display = 'none';
        megjelenitoGombb2.style.display = "block"; 
    });
});

function toggleBoxForm() {
    var container4 = document.getElementById('megjelenitoGombb2');
    if (container4.style.display === 'none') {
        container4.style.display = 'block';
    } else {
        container4.style.display = 'none';
    }
  }
  document.getElementById("megjelenitoGombb2").addEventListener("click", function() {
    var homalyosHatter3 = document.getElementById("homalyosHatter3");
    homalyosHatter3.style.display = "flex";
    
    document.querySelector(".container4").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGombb2.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
    
    
});

function toggleinformationBoxForm() {
    var container5 = document.getElementById('megjelenitoGombb3');
    if (container5.style.display === 'none') {
        container5.style.display = 'block';
    } else {
        container5.style.display = 'none';
    }
  }
  document.getElementById("megjelenitoGombb3").addEventListener("click", function() {
    
    homalyosHatter4.addEventListener("click", function() {
        container5.style.display = "none";
        megjelenitoGombb3.style.display = "block";
    });
    document.querySelector(".container5").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGombb3.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
    
    
});

