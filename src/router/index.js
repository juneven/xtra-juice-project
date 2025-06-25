// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: null
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
