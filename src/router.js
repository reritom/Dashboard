import VueRouter from 'vue-router'
import HomeView from './components/views/home-view.vue'
import FunctionsView from './components/views/functions-view.vue'

const routes = [{
    name: "home",
    path: '/',
    component: HomeView
  },
  {
    name: "functions",
    path: '/functions',
    component: FunctionsView
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
