<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>We Card | Kezdőlap</title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Icons+Round'><link rel="stylesheet" href="./style.css">
  <link rel='stylesheet' href='darkmode.css'>
  <link rel='stylesheet' href='bejelentkezocss.css'>
</head>
<body>
<nav class="navbar">
  <ul class="navbar-items flexbox-col">
    <li class="navbar-logo flexbox-left">
      <a class="navbar-item-inner flexbox">
        <div class="navbar-item-inner-icon-wrapper flexbox">
          <img class="logo" src="./image/logo2.png">
        </div>
      </a>
      <span class="logo-text">We card</span>
    </li>
    <li onclick="toggleSearchForm()"  class="navbar-item flexbox-left">
      <a class="navbar-item-inner flexbox-left">
        <div class="navbar-item-inner-icon-wrapper flexbox">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <span id="keresoGomb" class="link-text"   id="link-text searchButton" class="link-text" >
          Keresés<input id="keresoGomb" class="keres" type="text" placeholder="Keresés" />
        </span>
      </a>
    </li>
    <li class="navbar-item flexbox-left">
      <a class="navbar-item-inner flexbox-left">
        <div class="navbar-item-inner-icon-wrapper flexbox">
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <span class="link-text oldalnevtext">Kezdőlap</span>
      </a>
    </li>
    <li class="navbar-item flexbox-left">
      <a class="navbar-item-inner flexbox-left">
        <div class="navbar-item-inner-icon-wrapper flexbox">
          <ion-icon name="basket-outline"></ion-icon>
        </div>
        <span class="link-text">Valami</span>
      </a>
    </li>
    <li onclick="toggleLoginForm()" class="navbar-item flexbox-left" id="megjelenitoGomb">
      <a class="navbar-item-inner flexbox-left">
        <div class="navbar-item-inner-icon-wrapper flexbox" >
          <ion-icon name="log-in-outline"></ion-icon>
        </div>
        <span class="link-text">Bejelentkezés</span>
      </a>
    </li>
    <!--<img  class="gyumi gyumi-text"  src="gyumolcskep1.png" alt="">-->
  </ul>
  <li onclick="toggleDarkMode()" onclick="myFunction()" class="navbar-item flexbox-left megjelenit">
    <a class="navbar-item-inner flexbox-left">
      <div class="navbar-item-inner-icon-wrapper flexbox">
        <ion-icon name="contrast-outline"></ion-icon>
      </div>
      <span class="link-text ">Megjelenités</span>
    </a>
  </li>
</nav>
<div class="homalyos-hatter" id="homalyosHatter" style="display: none">
<div class="body">
<div class="container"  id="container" >
  <div class="form-container sign-up-container">
    <form action="#">
      <a class="h1">Regisztráció</a>
            <span class="span">Nincs még fiókód, hozz létre egyet!</span>
            <input class="input" type="text" placeholder="Név" />
            <input class="input" type="email" placeholder="E-mail" />
            <input class="input" type="password" placeholder="Jelszó" />
            <input class="input" type="password" placeholder="Jelszó ismét" />
      <button>Létrehozás</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <a class="h1">Bejelentkezés</a>
      <span class="span">Ha már van fiókód</span>
      <input class="input" type="email" placeholder="E-mail" />
      <input class="input" type="password" placeholder="Jelszó" />
      <a class="a" href="#">Elfelejtetted a jelszót?</a>
      <button>Belépés</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <a class="h1">Üdvözöllek újra</a>
        <p class="p">Örülök hogy újra itt vagy!</p>
        <button class="ghost" id="signIn">Bejelentkezés</button>
      </div>
      <div class="overlay-panel overlay-right">
        <a class="h1">Üdvözöllek!</a>
        <p class="p">Ez itt a mi kis élelmiszer információs oldalunk</p>
        <button class="ghost" id="signUp">Regisztráció</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<main id="main" class="flexbox-col">
  <h2>Fő oldal</h2>
</main>
<script src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>
<script src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>
<script src='darkmode.js'></script>
<script src='bejelentkezojs.js'></script>
</body>
</html>
