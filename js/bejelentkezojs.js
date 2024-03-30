
//Regisztráció és Bejelentkezés között váltogattás

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//Regisztráció és Bejelentkezés megjelenítés gomb nyomásra

function toggleLoginForm() {
    var container = document.getElementById('megjelenitoGomb');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
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

    document.querySelector(".container").addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    megjelenitoGomb.addEventListener("click", function(event) {
        event.preventDefault(); 
        event.stopPropagation();
    });
});

