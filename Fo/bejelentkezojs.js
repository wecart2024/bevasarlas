
//Regisztráció és Bejelentkezés között váltogattás

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container2 = document.getElementById('container2');

signUpButton.addEventListener('click', () => {
	container2.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container2.classList.remove("right-panel-active");
});

//Regisztráció és Bejelentkezés megjelenítés gomb nyomásra

function toggleLoginForm() {
    var container2 = document.getElementById('megjelenitoGomb');
    if (container2.style.display === 'none') {
        container2.style.display = 'block';
    } else {
        container2.style.display = 'none';
    }
  }

  function toggleLoginForm() {
    var container2 = document.getElementById('megjelenitoGombb');
    if (container2.style.display === 'none') {
        container2.style.display = 'block';
    } else {
        container2.style.display = 'none';
    }
  }
//Háttér elhomályosítása amikor megjelenik a Regisztráció és Bejelentkezés és gomb kezelése container kezelése

  document.getElementById("megjelenitoGomb").addEventListener("click", function() {
    var homalyosHatter = document.getElementById("homalyosHatter");
    homalyosHatter.style.display = "flex";

    homalyosHatter.addEventListener("click", function() {
        homalyosHatter.style.display = "none";
        megjelenitoGomb.style.display = "block";
    });

    document.querySelector(".container2").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGomb.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
});

document.getElementById("megjelenitoGombb").addEventListener("click", function() {
    var homalyosHatter = document.getElementById("homalyosHatter");
    homalyosHatter.style.display = "flex";

    homalyosHatter.addEventListener("click", function() {
        homalyosHatter.style.display = "none";
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
