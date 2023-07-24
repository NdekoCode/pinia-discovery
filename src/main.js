import "./assets/main.scss";

import pinia from "@/plugins/pinia";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.use(pinia);
app.mount("#app");
