<template>
  <nav data-aos="fade-down">
    <span class="logo" data-aos="fade-right">
      <img src="../assets/header-img/logo.png" alt="Logo">
    </span>

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
  padding: 0.8em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 95vw;
  height: 6vmax;
}

nav span.logo {
  margin-left: 2rem;
}

.logo img {
  width: 10vmax;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
  width: 50vmax;
  margin: 0 auto;
  font-size: 1.3rem;
}

nav ul li a {
  text-decoration: none;
  color: #fffafa;
  font-weight: bold;
  padding: 0.5em;
  margin: 1rem;
}
</style>
