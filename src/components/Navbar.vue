<template>
  <nav data-aos="fade-down">
    <img class="logo" src="../assets/header-img/logo.png" alt="Logo">

    <ul ref="sidebar">
      <li><a href="/">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#about-us">About Us</a></li>
    </ul>

    <HamburgerNavbar @show="showSideBar"/>
  </nav>
</template>

<script>
import HamburgerNavbar from './HamburgerNavbar.vue';

export default {
  name: "Navbar",
  components: {
    HamburgerNavbar
  },
  methods: {
    showSideBar() {
      const sidebar = this.$refs.sidebar;

      sidebar.classList.toggle('slide');
    }
  },
};
</script>

<style>
nav {
  background-color: #ff490f;
  border-radius: 20px;
  display: flex;
  align-items: center;
  height: 13%;
}

nav img.logo {
  width: 10vmax;
  margin-left: 2.5rem;
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
}
</style>
