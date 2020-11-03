import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails.vue'
import BookEdit from '../views/BookEdit.vue'
import BookAdd from '../views/BookAdd.vue'
import ReviewAdd from '../cmps/review/ReviewAdd.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/book',
    name: 'Books',
    component: BookApp
  },
  {
    path: '/book/edit/:id?',
    component: BookEdit
  },
  {
    path: '/book/add',
    component: BookAdd
  },
  {
    path: '/book/:id',
    component: BookDetails,
    children: [
      {
        path: '/book/:id/addreview',
        component: ReviewAdd
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
