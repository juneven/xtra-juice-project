<template>
  <nav data-aos="fade-down">
    <img class="logo" src="../assets/header-img/logo.png" alt="Logo" data-aos="fade-right" />

    <ul ref="sidebar">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
    </ul>

    <HamburgerNavbar @show="showSideBar" />
  </nav>
</template>

<script>
import HamburgerNavbar from "./HamburgerNavbar.vue";

export default {
  name: "Navbar",
  components: {
    HamburgerNavbar,
  }, 
  methods: {
    showSideBar() {
      const sidebar = this.$refs.sidebar;

      sidebar.classList.toggle("slide");
    },
  },
};
</script>

<style>
nav {
  position: fixed;
  top: 3%;
  left: 2%;
  right: 2%;
  height: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 100;
  background-color: #ff490f;
  border-radius: 20px;
}

nav img.logo {
  max-height: 150%;
  margin-left: 2.55rem;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
  width: 50%;
  margin: auto;
  font-size: 1.3rem;
}

nav ul li a {
  text-decoration: none;
  color: #fffafa;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  transition: all 0.5s;
}

nav ul li a:hover {
  background-color: #fffafa;
  color: #ff490f;
}
</style>
