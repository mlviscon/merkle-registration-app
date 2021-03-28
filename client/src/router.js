import vue from 'vue'
import vueRouter from 'vue-router'
import registrationPage from './components/RegistrationPage.vue'
import adminPage from './components/AdminPage.vue'
import confirmationPage from './components/ConfirmationPage.vue'

vue.use(vueRouter)

export default new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Registration Page',
            component: registrationPage,
            alias: ['/index', '/index.html']
        },
        {
            path: '/admin',
            name: 'Admin Page',
            component: adminPage,
        },
        {
            path: '/confirmation',
            name: 'Confirmation Page',
            component: confirmationPage,
        }
    ]
})