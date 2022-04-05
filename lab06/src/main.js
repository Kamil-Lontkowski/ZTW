import { createApp } from "vue";
import App from "./App.vue";
import MainBookPage from "./views/MainBookPage.vue";
import BooksDetailsPage from "./views/BookDetailsPage.vue";
import HelloWorldPage from "./views/HelloWorldPage.vue";
import { createRouter, createWebHistory } from "vue-router";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const routes = [
  { path: "/", component: HelloWorldPage },
  { path: "/books", component: MainBookPage },
  { path: "/books/:id", component: BooksDetailsPage },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = createApp(App);
app.use(router);
app.mount("#app");
//createApp(App).use(BootstrapVue).use(IconsPlugin).use(router);
