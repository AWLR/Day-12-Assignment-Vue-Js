import { createWebHistory, createRouter} from 'vue-router'
import MyHome from './components/MyHome.vue'
import MyProducts from './components/MyProducts.vue'
import ContactUs from './components/ContactUs.vue'

const routes = [
    {
        name: 'MyHome',
        path: '/',
        component: MyHome,
    },
    {
        name: 'MyProducts',
        path: '/prod',
        component: MyProducts,
    },
    {
        name: 'ContactUs',
        path: '/con',
        component: ContactUs,
    },

]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;