import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps,{
	load: {
		key: 'AIzaSyD_tuf6gIbcqEYOR9uutttFj2Bhp2Hyh1g'
	}
});


new Vue({
  render: h => h(App),
}).$mount('#app')
