import { createApp } from "vue";
import router from "./router";
import "./style.css";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
