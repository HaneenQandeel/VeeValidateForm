import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ValidationProvider, extend, ValidationObserver} from 'vee-validate';
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import Toasted from 'vue-toasted';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.use(Toasted)
Vue.use(BootstrapVue)
Vue.use(Toasted)
window.toastr = require('toastr')
Vue.use(VueToastr2)
Vue.use(IconsPlugin)
// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
