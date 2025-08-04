// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Header from "../views/Header.vue";
import MainContent from "../views/MainContent.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const routes = [
  { path: "/", name: "header", component: Header },
  { path: "/MainContent", name: "MainContent", component: MainContent },
  { path: "/Footer", name: "Footer", component: Footer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
