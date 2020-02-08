import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppGlobal from './mixins/AppGlobal'

Vue.config.devtools = true
// Vue.config.productionTip = true

Vue.mixin(AppGlobal)

Vue.prototype.OC = window.OC
Vue.prototype.OCA = window.OCA

// devtools.connect('https://24d9e7d3.ngrok.io', 8098)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#content')
