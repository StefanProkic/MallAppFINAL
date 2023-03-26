import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import "../src/css/main.css";
import "./assets/scss/style.scss"; */
import "./assets/scss/style.scss";
import "./assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
