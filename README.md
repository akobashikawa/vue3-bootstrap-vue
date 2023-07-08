# vue3-bootstrap-vue

- [Starting with Bootstrap-Vue step by step](https://www.ma-no.org/en/programming/javascript/starting-with-bootstrap-vue-step-by-step)
- [Compatibildad Vue 3 - Vite con Bootstrap-Vue, Font-Awesome, etc](https://platzi.com/tutoriales/1856-avanzado-vue/23120-compatibildad-vue-3-vite-con-bootstrap-vue-font-awesome-etc/)

- npm install -g @vue/cli
- vue create vue3-bootstrap-vue
  - Manually select features
    - Babel
    - Router
    - Linter / Formatter
  - Version: 3.x
  - Use history mode for router: No
  - Pick a linter / formatter config: ESLint + Prettier
  - Lint on save
  - Dedicated config files
  - Save as a preset: No
- cd vue3-bootstrap-vue
- npm run serve
  - http://localhost:8080/
- npm install --save bootstrap@4.3.1 bootstrap-vue @vue/compat

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}
```

```js
// main.js
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
```