import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/register.vue";
import Services from "../views/Services.vue"; 
import ContactUs from "../views/contanctUs.vue"; 

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/register", name: "Register", component: Register },
  { path: "/services", name: "Services", component: Services }, 
  { path: "/contact-us", name: "ContactUs", component: ContactUs }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
