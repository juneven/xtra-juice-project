<template>
  <NavBar />

  <header v-if="$route.path === '/'">
    <div class="header-content" data-aos="fade-right">
      <span>Fresh Juice</span>
      <span>Came From</span>
      <span>Fresh Fruits</span>
    </div>
  </header>

  <main>
    <template v-if="$route.path === '/'">
      <Products />

      <About />
    </template>

    <router-view v-else></router-view>
  </main>

  <footer v-if="$route.path !== '/contact-us'">
    <div class="top-footer">
      <div class="top-footer-header">
        <img src="./assets/header-img/logo.png" alt="X-TRA JUICE" class="logo" />
      </div>

      <div class="top-footer-content">
        <div class="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.056687477547!2d104.00046797472417!3d1.1195430988697368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sUniversitas%20Internasional%20Batam!5e0!3m2!1sid!2sid!4v1750393537388!5m2!1sid!2sid"
            width="600"
            height="350"
            style="border: 1px solid white; padding: 0.5rem; background-color: white; border-radius: 10px"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="whatsapp">
          <h3 class="title">Contact us :</h3>
          <i class="bi bi-whatsapp"></i>
          <span>+62 813-7222-1974</span>
        </div>
      </div>
    </div>

    <div class="bottom-footer">
      <p class="copyright">&copy;X-TRA JUICE | ALL RIGHTS RESERVED</p>
    </div>
  </footer>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Products from "./components/Products.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Products,
    About,
    Contact,
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(newPath) {
        if (newPath === "/products") {
          document.body.classList.add("products-page-bg");
        } else if (newPath === "/contact-us") {
          document.body.classList.add("contact-page-bg");
        } else if (newPath === "/about") {
          document.body.classList.add("about-page-bg");
        } else {
          document.body.classList.remove("products-page-bg");
          document.body.classList.remove("contact-page-bg");
          document.body.classList.remove("about-page-bg");
        }
      },
    },
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
  min-height: 100vh;
  background-color: white;
}

body.products-page-bg {
  background-color: #feefd8;
}

body.about-page-bg {
  background-color: #feefd8;
}

body.contact-page-bg {
  background-color: #feefd8;
}

#app {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

header {
  background-image: url("./assets/header-img/background-header.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 1rem;
}

header .header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  margin: 2.55em 0.75em;
  text-shadow: 1px 1px 1px black;
}

.header-content span:nth-child(2) {
  font-size: 2.5rem;
  font-weight: normal;
}

main {
  margin: 3rem 0.5rem;
}

article#products.products-page .header-products {
  border-bottom: 3px solid #ff490f;
}

article#products.products-page .content-products .card {
  background-color: #f0f0ec;
  box-shadow: 1px 1px 1px black;
}

article#products.products-page .header-products h2.title {
  color: #a63400;
}

article#products.products-page .header-products .right-section-menu .buttons a {
  color: #ff490f;
}

article#about-us.about-page .about-header-content h3.header-title {
  color: #a63400;
}

footer {
  background-color: #ff490f;
  font-size: 1rem;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
}

.top-footer .top-footer-header img.logo {
  width: 10%;
}

.top-footer .top-footer-content {
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 1.5rem;
  padding-bottom: 0.5em;
}

.top-footer .top-footer-content div > * {
  padding-right: 0.5rem;
}

.top-footer .top-footer-content .whatsapp {
  text-align: left;
}

footer .bottom-footer {
  background-color: whitesmoke;
  color: #ff490f;
  padding-block: 0.5em;
}

/* Ukuran Mobile Kecil */
@media screen and (max-width: 480px) {
  header .header-content {
    font-size: 2.75rem;
    margin: 2.5em 0.5em;
    position: relative;
    z-index: 1;
  }

  .header-content span:nth-child(2) {
    font-size: 2rem;
  }

  nav {
    border-radius: 0;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    left: 0;
  }

  nav img.logo {
    width: 15%;
    margin-left: 0.55rem;
  }

  nav ul {
    position: fixed;
    right: 0;
    top: 0;
    width: 40%;
    height: 1200px;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    transform: translateX(100%);
    transition: all 1s;
    text-align: center;
    gap: 4em;
    padding-top: 5em;
  }

  nav ul li {
    width: 100%;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
    margin-right: 1rem;
  }

  article#products {
    margin-block: 0;
  }

  article#products .header-products {
    flex-direction: column;
    border: none;
    margin: 1rem 0.5rem;
  }

  article#products .header-products h2.title {
    border-bottom: 3px solid whitesmoke;
    width: 100%;
  }

  article#products.products-page .header-products {
    border: none;
  }

  article#products.products-page .header-products h2.title {
    border-bottom: 3px solid #ff490f;
  }

  .header-products .right-section-menu {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
  }

  .categories a {
    font-size: 1rem;
  }

  .right-section-menu .buttons {
    font-size: 1.5rem;
  }

  .content-products {
    gap: 1rem;
    padding-inline: 1rem;
  }

  .content-products .card-title h2 {
    font-size: 1.25rem;
  }

  .content-products .card-title span {
    font-size: 0.85rem;
  }

  .content-products.foods {
    margin-inline-start: 0;
  }

  .card {
    width: 15%;
    flex-grow: 1;
    flex-basis: 40%;
  }

  .card-content span.price {
    font-size: 1rem;
  }

  .card .btn-details {
    font-size: 0.75rem;
  }

  .modal {
    width: 90%;
    border-radius: 20px;
  }

  .header-modal img {
    width: 25%;
    margin-left: 1rem;
  }

  .header-modal .close-btn {
    font-size: 2rem;
  }

  .content-modal {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
    margin-inline: 0;
  }

  .content-modal .product-picture {
    width: 65%;
  }

  .content-modal .detail-product-information {
    width: 90%;
    margin-top: 1rem;
  }

  .detail-product-information .header-detail-product-information {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 0.5rem;
    margin-inline: 1rem;
  }

  .detail-product-information h2 {
    font-size: 1.25rem;
  }

  .detail-product-information h1 {
    font-size: 1.5rem;
  }

  .detail-product-information .informational-product {
    gap: 0.25rem;
  }

  .detail-product-information .informational-product > * {
    flex: 1;
  }

  .informational-product h2 {
    font-size: 0.7rem;
    width: 100%;
  }

  .informational-product span {
    font-size: 0.75rem;
  }

  article#about-us {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0.95rem;
  }

  article#about-us.about-page {
    margin: 0;
  }

  article#about-us .about-header-content {
    width: 100%;
  }

  article#about-us .about-header-content .underline {
    width: 50%;
  }

  article#about-us.about-page .about-header-content h3.header-title {
    margin-top: 0;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .left-content {
    gap: 1rem;
    width: 100%;
  }

  .left-content img {
    width: 45%;
  }

  .left-content img:nth-child(2) {
    margin: 0;
  }

  .right-content {
    width: 100%;
  }

  .right-content p {
    font-size: 0.85rem;
  }

  footer.contact-page {
    margin-top: 0;
  }

  .top-footer .top-footer-content {
    flex-direction: column;
  }

  .top-footer .top-footer-header img.logo {
    width: 20%;
  }

  .top-footer .top-footer-content .location iframe {
    width: 80%;
  }

  .top-footer .top-footer-content .whatsapp {
    font-size: 1rem;
    padding-left: 1em;
  }

  footer .bottom-footer {
    font-size: 0.75rem;
  }
}

/* Ukuran Mobile Sedang sampai besar */
@media (min-width: 480px) and (max-width: 767px) {
  header .header-content {
    font-size: 3.5rem;
    margin: 2em 0.2em;
    position: relative;
    z-index: 1;
  }

  .header-content span:nth-child(2) {
    font-size: 2rem;
  }

  nav {
    border-radius: 0;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    left: 0;
  }

  nav img.logo {
    width: 15%;
    margin-left: 0.75rem;
  }

  nav ul {
    position: fixed;
    right: 0;
    top: 0;
    height: 1200px;
    width: 30%;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    transform: translateX(100%);
    transition: all 1s;
    gap: 3em;
    margin-top: 4.5em;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
  }

  article#products {
    margin-block: 0;
  }

  article#products .header-products {
    flex-direction: column;
    border: none;
    align-items: flex-start;
  }

  article#products .header-products h2.title {
    border-bottom: 3px solid whitesmoke;
    padding-bottom: 0.5rem;
    width: 100%;
    margin: 1rem 0;
  }

  article#products.products-page .header-products {
    border: none;
  }

  article#products.products-page .header-products h2.title {
    color: #a63400;
    border-bottom: 3px solid #ff490f;
  }

  article#products .header-products .right-section-menu {
    justify-content: space-between;
    width: 100%;
  }

  .content-products {
    gap: 1.5rem;
  }

  .card {
    width: 40%;
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
    width: 80%;
  }

  .header-modal img {
    width: 15%;
  }

  .content-modal {
    flex-direction: column;
  }

  .content-modal .product-picture {
    border-radius: 10px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  .content-modal .product-picture img {
    width: 40%;
  }

  .content-modal .detail-product-information {
    width: 100%;
    padding: 0.5rem;
  }

  .detail-product-information .header-detail-product-information h2 {
    font-size: 2rem;
  }

  .detail-product-information .header-detail-product-information h1 {
    font-size: 1.8rem;
  }

  .detail-product-information .informational-product h2 {
    font-size: 0.75rem;
  }

  .detail-product-information .informational-product {
    display: flex;
    justify-content: flex-start;
  }

  .informational-product span {
    font-size: 0.75rem;
  }

  .detail-product-information .btn-back {
    margin: 2.5rem auto;
  }

  article#about-us {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0.95rem;
  }

  article#about-us .about-header-content {
    width: 100%;
    margin-bottom: 2rem;
  }

  article#about-us .about-header-content .underline {
    width: 50%;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .left-content {
    gap: 1rem;
  }

  .left-content img {
    width: 95%;
  }

  .left-content img:nth-child(2) {
    margin: 0;
  }

  .right-content {
    width: 100%;
  }

  .right-content p {
    font-size: 1rem;
  }

  footer.contact-page {
    margin-top: 0;
  }

  .top-footer .top-footer-content {
    flex-direction: column;
  }

  .top-footer .top-footer-header img.logo {
    width: 15%;
  }

  .top-footer .top-footer-content .location iframe {
    width: 80%;
  }

  .top-footer .top-footer-content .whatsapp {
    font-size: 1rem;
    padding-left: 1em;
  }

  footer .bottom-footer {
    font-size: 0.95rem;
  }
}

/* Ukuran Tablet */
@media (min-width: 767px) and (max-width: 1024px) {
  header .header-content {
    font-size: 4.5rem;
    margin: 1em 0.15em;
    position: relative;
    z-index: 1;
  }

  nav {
    border-radius: 0;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    left: 0;
  }

  nav img.logo {
    width: 12%;
    margin-left: 0.85rem;
  }

  nav ul {
    position: fixed;
    right: 0;
    top: 0;
    height: 1500px;
    width: 30%;
    background-color: #ff490f;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.25rem;
    transform: translateX(100%);
    transition: all 1s;
    margin-top: 5em;
    gap: 3em;
  }

  nav ul.slide {
    transform: translateX(0);
  }

  .menu-toggle {
    display: flex;
  }

  article#products,
  article#contact-us {
    margin-block: 0;
  }

  article#products .header-products {
    border: none;
    justify-content: space-between;
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

  .content-products.foods {
    margin-left: 0.25rem;
  }

  .card {
    width: 30%;
  }

  .card-img {
    text-align: center;
  }

  .card-img img {
    margin: 0;
  }

  .modal {
    width: 90%;
  }

  .header-modal img {
    width: 15%;
  }

  .content-modal {
    flex-direction: column;
  }

  .content-modal .product-picture {
    border-radius: 10px;
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }

  .content-modal .product-picture img {
    width: 40%;
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
    align-items: center;
    margin: 3.5rem 0;
    padding: 0.95rem;
  }

  article#about-us.about-page .about-header-content h3.header-title {
    margin: 0;
  }

  article#about-us.about-page .about-header-content {
    margin-block: 0;
  }

  article#about-us .about-header-content {
    width: 100%;
    margin-block: 2rem;
  }

  article#about-us .about-header-content .underline {
    width: 50%;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .left-content {
    width: 100%;
    gap: 1rem;
  }

  .left-content img {
    width: 45%;
  }

  .left-content img:nth-child(2) {
    margin: 0;
  }

  .right-content {
    width: 100%;
  }

  .right-content p {
    font-size: 1.15rem;
  }

  footer.contact-page {
    margin-top: 0;
  }

  .top-footer .top-footer-content {
    flex-direction: column;
  }

  .top-footer .top-footer-header img.logo {
    width: 15%;
  }

  .top-footer .top-footer-content .location iframe {
    width: 80%;
  }

  .top-footer .top-footer-content .whatsapp {
    font-size: 1.2rem;
    padding-left: 1em;
  }

  footer .bottom-footer {
    font-size: rem;
  }
}
</style>
