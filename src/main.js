import Vue, { createApp } from "@vue/compat";
import App from "./App.vue";
import router from "./router";

/*--------------------REGISTER BOOTSTRAP---------------------------------*/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/*-----------------------------------------------------------------------*/

createApp(App).use(router).mount("#app");
