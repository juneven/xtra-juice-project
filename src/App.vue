<template>
  <header>
    <NavBar />

    <div class="header-content">
      <div class="left-content" data-aos="fade-right">
        <span>Fresh Juice</span>
        <span>Came From</span>
        <span>Fresh Fruits</span>
      </div>
    </div>
  </header>

  <main>
    <Products />

    <About />
  </main>

  <footer>
    <p class="copyright">&copy;X-TRA JUICE | ALL RIGHTS RESERVED</p>
  </footer>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Products from "./components/Products.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Products,
    About,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 20px;
}

#app {
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
}

header {
  background-image: url("./assets/header-img/background-header.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
}

header .left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  margin: 2em 0.5em;
}

.left-content span:nth-child(2) {
  font-size: 2.5rem;
  font-weight: normal;
}

main {
  margin: 3rem 0.5rem;
}

footer {
  background-color: #ff490f;
  font-size: 1rem;
  padding: 2em 1em;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
}

/* Ukuran Mobile Kecil */
@media screen and (max-width: 480px) {
  header {
    padding: 0;
  }

  header .left-content {
    font-size: 3.5rem;
    margin: 3em 0.5em;
    position: relative;
    z-index: 1;
  }

  .left-content span:nth-child(2) {
    font-size: 2rem;
  }

  nav {
    border-radius: 0;
    height: 8%;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  nav img.logo {
    margin-left: 0.5rem;
  }

  nav ul {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30%;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    transform: translateX(100%);
    transition: all 1s;
    text-align: center;
  }

  nav ul li {
    width: 50%;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
    margin-right: 1rem;
  }

  article#products {
    align-items: center;
  }

  article#products .header-products {
    flex-direction: column;
    border: none;
  }

  .header-products h2.title {
    border-bottom: 3px solid whitesmoke;
    width: 100%;
    padding-bottom: 0.5rem;
  }

  .header-products .right-section-menu {
    width: 100vw;
    margin: 1rem auto;
  }

  .categories a {
    font-size: 1rem;
  }

  .right-section-menu .buttons {
    font-size: 1.3rem;
  }

  .content-products {
    align-items: center;
    width: 90vw;
    margin: 0 auto;
  }

  .card {
    width: 40vw;
    margin: 0.5rem auto;
  }

  .card-img {
    text-align: center;
  }

  .card-img img {
    margin: 0;
  }

  .card-content span.price {
    font-size: 1rem;
  }

  .modal {
    width: 90%;
    height: 70%;
  }

  .header-modal img {
    width: 20%;
  }

  .content-modal {
    flex-direction: column;
    align-items: center;
  }

  .content-modal .detail-product-information {
    width: 90%;
  }

  .detail-product-information .header-detail-product-information {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 1rem;
  }

  .detail-product-information h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .detail-product-information h1 {
    font-size: 2rem;
  }

  .informational-product h2 {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .informational-product .nutrition-product {
    width: 60%;
  }

  article#about-us {
    flex-direction: column;
  }

  .left-content {
    display: none;
  }

  .right-content {
    width: 75%;
    text-align: justify;
  }
}

/* Ukuran Mobile Sedang sampai besar */
@media (min-width: 481px) and (max-width: 767px) {
  header {
    padding: 0;
  }

  header .left-content {
    font-size: 4rem;
    margin: 3.8em 0.5em;
    position: relative;
    z-index: 1;
  }

  .left-content span:nth-child(2) {
    font-size: 1.5rem;
  }

  nav {
    border-radius: 0;
    width: 100vw;
    justify-content: space-between;
    position: relative;
    z-index: 3;
  }

  nav span.logo {
    margin: 0;
  }

  nav ul {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30%;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.3rem;
    transform: translateX(100%);
    transition: all 1s;
    text-align: center;
  }

  nav ul li {
    width: 50vw;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
  }

  article#products .header-products {
    flex-direction: column;
    border: none;
    width: 95vw;
  }

  .header-products h2.title {
    border-bottom: 3px solid whitesmoke;
    width: 100%;
    padding-bottom: 0.5rem;
  }

  .header-products .right-section-menu {
    width: 100vw;
    margin: 1rem auto;
  }

  .content-products {
    align-items: center;
    width: 90vw;
    margin: 0 auto;
  }

  .card {
    width: 40vw;
    margin: 0.5rem auto;
  }

  .card-img {
    text-align: center;
  }

  .card-img img {
    margin: 0;
  }

  .card-content span.price {
    font-size: 1rem;
  }

  .modal {
    width: 85vw;
    height: 90vmax;
    top: 50vh;
  }

  .header-modal img {
    width: 20vw;
  }

  .content-modal {
    flex-direction: column;
  }

  .content-modal .product-picture {
    border-radius: 10px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }

  .content-modal .product-picture img {
    height: 30vw;
  }

  .content-modal .detail-product-information {
    width: 100%;
    padding: 0.5rem;
  }

  .detail-product-information h2 {
    font-size: 1rem;
  }

  .detail-product-information h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .detail-product-information .informational-product {
    display: flex;
    justify-content: space-between;
  }

  .informational-product div {
    margin: 0 0.5rem;
    width: 50%;
  }

  .informational-product h2 {
    font-size: 1.2rem;
  }

  .detail-product-information .btn-back {
    margin: 2.5rem auto;
  }

  article#about-us {
    flex-direction: column;
  }

  .left-content {
    display: none;
  }

  .right-content {
    width: 75%;
    text-align: justify;
  }
}

/* Ukuran Tablet */
@media (min-width: 767px) and (max-width: 1024px) {
  header {
    padding: 0;
  }

  header .left-content {
    margin: 3em 0.5em;
  }

  nav {
    border-radius: 0;
    width: 100vmax;
    justify-content: space-between;
  }

  nav span.logo {
    margin: 0;
  }

  nav ul {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30%;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    transform: translateX(100%);
    transition: all 1s;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
  }

  article#products .header-products {
    border: none;
    justify-content: space-between;
    width: 95vw;
    border-bottom: 3px solid whitesmoke;
  }

  .header-products .right-section-menu {
    width: 50%;
  }

  .right-section-menu .buttons {
    display: flex;
    font-size: 1.8rem;
    padding: 0;
  }

  .content-products {
    padding-left: 1.5rem;
  }

  .card {
    width: 25vw;
  }

  .card-img {
    text-align: center;
  }

  .card-img img {
    margin: 0;
  }

  .modal {
    width: 85vw;
    height: 90vmax;
    top: 10vh;
  }

  .header-modal img {
    width: 20vw;
  }

  .content-modal {
    flex-direction: column;
  }

  .content-modal .product-picture {
    border-radius: 10px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }

  .content-modal .product-picture img {
    height: 30vw;
  }

  .content-modal .detail-product-information {
    width: 100%;
    padding: 0.5rem;
  }

  .detail-product-information h2 {
    font-size: 1rem;
  }

  .detail-product-information h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .detail-product-information .informational-product {
    display: flex;
    justify-content: space-between;
  }

  .informational-product div {
    margin: 0 0.5rem;
    width: 50%;
  }

  .informational-product h2 {
    font-size: 1.2rem;
  }

  .detail-product-information .btn-back {
    margin: 2.5rem auto;
  }

  article#about-us {
    flex-direction: column;
  }

  .left-content {
    display: none;
  }

  .right-content {
    width: 75%;
    text-align: justify;
  }
}
</style>
