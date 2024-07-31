import { createRouter, createWebHistory } from "vue-router";
import ShowPass from "../views/ShowPass.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ShowPass,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/TitleToSlug.vue"),
    },
    {
      path: "/color-change",
      name: "color-change",
      component: () => import("../views/ColorChange.vue"),
    },
    {
      path: "/product-price",
      name: "product-price",
      component: () => import("../views/ProductPrice.vue"),
    },
    {
      path: "/get-repos",
      name: "get-repos",
      component: () => import("../views/GetRepos.vue"),
    },
    {
      path: "/form-validate",
      name: "form-validate",
      component: () => import("../views/FormValidate.vue"),
    },
    {
      path: "/to-do-list",
      name: "to-do-list",
      component: () => import("../views/ToDoList.vue"),
    },
    {
      path: "/button-form",
      name: "button-form",
      component: () => import("../views/ButtonForm.vue"),
    },
    {
      path: "/gradient-generator",
      name: "gradient-generator",
      component: () => import("../views/GradientGenerator.vue"),
    },
    {
      path: "/toggle-class",
      name: "toggle-class",
      component: () => import("../views/ToggleClass.vue"),
    },
    {
      path: "/create-tabs",
      name: "create-tabs",
      component: () => import("../views/CreateTabs.vue"),
    },
    {
      path: "/random-images",
      name: "random-images",
      component: () => import("../views/RandomImages.vue"),
    },
    {
      path: "/just-a-note",
      name: "just-a-note",
      component: () => import("../views/JustaNote.vue"),
    },
  ],
});

export default router;
