import Vue from 'vue'
import App from './components/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faEdit, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./bootstrap');

window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    components: {
        App
    }
});
