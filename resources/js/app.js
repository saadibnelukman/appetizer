// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('dashboard', require('./components/Dashboard.vue').default);
require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue'
import moment from 'moment'
import VueRouter from 'vue-router'
import Form from 'vform'
import { Button, HasError, AlertError} from 'vform/src/components/bootstrap5'

Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

import Swal from 'sweetalert2'
window.swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.toast = toast;

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


// let routes = [
//     { path: '/dashboard', component: require('./components/Dashboard.vue') },
//     { path: '/profile', component: require('./components/Profile.vue') }
// ]
let routes = [{
    path: '/dashboard',
    component: require('./components/Dashboard.vue').default
},
    {
        path: '/profile',
        component: require('./components/Profile.vue').default
    },
    {
        path: '/users',
        component: require('./components/Users.vue').default
    }
]

Vue.filter('upText',function(text){
   return text.charAt(0).toUpperCase() + text.slice(1);
});
Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});

window.Fire = new Vue();

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('dashboard', require('./components/dashboard.vue').default);
// Vue.component('profile', require('./components/Profile.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router
});
