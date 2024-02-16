//X nyomására eltünik a container 2

document.addEventListener("DOMContentLoaded", function() {
    var homalyosHatter2 = document.getElementById("homalyosHatter2");
    var closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", function() {
        homalyosHatter2.style.display = 'none';
        megjelenitoGombb.style.display = "block";
    });
});

// a homályos részre nyomására eltünik a container 2 és a Searc gombra nyomva újra megjelenik
function toggleSearchForm() {
    var container2 = document.getElementById('megjelenitoGombb');
    if (container2.style.display === 'none') {
        container2.style.display = 'block';
    } else {
        container2.style.display = 'none';
    }
  }
  document.getElementById("megjelenitoGombb").addEventListener("click", function() {
    var homalyosHatter2 = document.getElementById("homalyosHatter2");
    homalyosHatter2.style.display = "flex";

    homalyosHatter2.addEventListener("click", function() {
        homalyosHatter2.style.display = "none";
        megjelenitoGombb.style.display = "block";
    });
    
    document.querySelector(".container2").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGombb.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
    
    
});
