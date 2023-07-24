import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import LoginPage from "./pages/LoginPage.vue";
import ProductManagementPage from "./pages/ProductManagementPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import AddNewProductPage from "./pages/AddNewProductPage.vue";
import EditProductPage from "./pages/EditProductPage.vue";
import MainPage from "./pages/MainPage.vue";
import "./global.css";

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/productManagement",
    name: "ProductManagementPage",
    component: ProductManagementPage,
    addMetaTag: true,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/addNewProduct",
    name: "AddNewProductPage",
    component: AddNewProductPage,
  },
  {
    path: "/editProduct/:id",
    name: "EditProductPage",
    component: EditProductPage,
  },
  {
    path: "/productDetail/:id",
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/redirect",
    redirect: "/",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "Practice";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  // check if route requires authentication and user is not logged in
  const requiresAuth = toRoute.matched.some((x) => x.meta.requiresAuth);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("userRole");
  if (requiresAuth && !token && role === "seller") {
    next("/login");
    alert("You need to login to access this page");
  } 
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
